import { byte, codified, ulong } from '../../API/Types';
import { ARRAY_EXCEPT, ARRAY_INTERSECT, ARRAY_UNIQUE } from '../../API/Arrays';
import { Permission } from './Permission';
import { PermissionType } from './PermissionType';
import { PermissionLevel } from './PermissionLevel';
import { PermissionMethod } from './PermissionMethod';
import { FREEZE, KEYS } from '../../API/Constants';
import { PermissionEscalation, PermissionEscalationType } from './PermissionEscalation';
import { IS_AN, } from '../../API/Functions';

//#region Computing/Internals
/**
 * A pre-computed Permission used by the {@link authorizer} when checking for system access.
 */
class ComputedPermission extends Permission {
	/**
	 * Numeric processing order when looping.
	 */
	order: byte;

	constructor(
		company: ulong,
		kind: PermissionType,
		level: PermissionLevel = PermissionLevel.read,
		method: PermissionMethod = PermissionMethod.grant,
		labels: string[],
		order: byte
	) {
		super(
			company,
			kind,
			level,
			method,
			labels
		);
		this.order = order;
	}
}

/**
 * Users have implied read access to their company's general, labels, policies, icons, and pictures.
 */
const IMPLIED_PERMS = [
	PermissionType.companyGeneral,
	PermissionType.companyLabels,
	PermissionType.companyPolicies,
	PermissionType.icon,
	PermissionType.picture,
];
/**
 * These are the permissions which require label-based calculations.
 */
const LABEL_BASED_PERMS = [
	PermissionType.assetGeneral,
	PermissionType.assetAdvanced,
	PermissionType.assetDispatch,
	PermissionType.placeGeneral,
	//	PermissionType.placeExtended,
	PermissionType.dispatchJob,
	PermissionType.dispatchTemplate,
	PermissionType.formResult,
	PermissionType.formTemplate,
];
/**
 * Provides a method of comparing {@link PermissionLevel}s by finding their position in this array.
 * @const {!Array.<PermissionLevel>}
 */
const PERM_INDEX = [
	PermissionLevel.read,
	PermissionLevel.update,
	PermissionLevel.full,
];
/**
 * Used internally to separate the type from the label in _applyGrants/_applyRevokes
 * @const {!string}
 */
const TYPE_SEPARATOR = " ";
/**
 * Applied by _applyGrants/_applyRevokes and consumed by _applyCompanyPermissions to indicate "all labels" are targetted.
 * @const {!string}
 */
const TYPE_ALL_LABELS = "*";
/**
 * Static array of just one item [TYPE_ALL_LABELS] to make loops for permissions without labels quicker
 * @const {!Array.<string>}
 */
const ARRAY_ALL_LABELS = [TYPE_ALL_LABELS];

/**
 * Applies the granted permissions to the computed dictionary.
 * The key in the dictionary looks like a PermissionType, but it's not, it's a string.
 * This is because the key can be "type_label" in the case of label-based permissions.
 * The purpose of this function is to help build a complete list, not build a fully calculated "effective permissions" list.
 * The computed dictionary is specific to one target company.
 * @param	computed	Dictionary<string, [PermissionMethod, PermissionLevel, apply order]>
 * @param	grants	
 */
function _applyGrants(
	computed: Map<PermissionType | string, [PermissionMethod, PermissionLevel, byte]>,
	grants: Permission[],
	order: byte
) {
	grants.forEach(function (grant) {
		if (LABEL_BASED_PERMS.indexOf(grant.kind) < 0) {
			_applyGrant(computed, grant.kind, grant.level, order);
		} else {
			(!grant.labels || !grant.labels.length ? ARRAY_ALL_LABELS : grant.labels).forEach(function (label) {
				_applyGrant(computed, grant.kind + TYPE_SEPARATOR + label, grant.level, order);
			});
		}
	});
}
/**
 * Grants an individual grant for the following cases:
 * 1) the given type has not yet been applied from a previous step
 * 2) the given type has been revoked on a previous step
 * 3) the given type has been previously granted, but is now being granted a higher level access
 * @param	computed	Dictionary<string, [PermissionMethod, PermissionLevel, apply order]>
 * @param	type
 * @param	level
 */
function _applyGrant(
	computed: Map<PermissionType | string, [PermissionMethod, PermissionLevel, byte]>,
	type: PermissionType | string,
	level: PermissionLevel,
	order: byte
) {
	const existing = computed.get(type);
	if (
		!existing
		|| existing[0] === PermissionMethod.revoke
		|| PERM_INDEX.indexOf(level) > PERM_INDEX.indexOf(existing[1])
	) {
		computed.set(type, [PermissionMethod.grant, level, order]);
	}
}
/**
 * Applies the revoked permissions to the computed dictionary.
 * The key in the dictionary looks like a PermissionType, but it's not, it's a string.
 * This is because the key can be "type_label" in the case of label-based permissions.
 * The purpose of this function is to help build a complete list, not build a fully calculated "effective permissions" list.
 * The computed dictionary is specific to one target company.
 * @param	computed	Dictionary<string, [PermissionMethod, PermissionLevel, apply order]>
 * @param	revokes
 */
function _applyRevokes(
	computed: Map<PermissionType | string, [PermissionMethod, PermissionLevel, byte]>,
	revokes: Permission[],
	order: byte
	
) {
	revokes.forEach(function (revoke) {
		if (LABEL_BASED_PERMS.indexOf(revoke.kind) < 0) {
			_applyRevoke(computed, revoke.kind, revoke.level, order);
		} else {
			(!revoke.labels || !revoke.labels.length ? ARRAY_ALL_LABELS : revoke.labels).forEach(function (label) {
				_applyRevoke(computed, revoke.kind + TYPE_SEPARATOR + label, revoke.level, order);
			});
		}
	});
}
/**
 * Revokes an individual permission for the following cases:
 * 1) the given type has not yet been applied from a previous step
 * 2) the given level is set to "read", meaning all access is simply being removed
 * or downgrades an existing granted permission for the following cases:
 * 1) the given type has been granted from a previous step, but the access level must be lowered
 * 2) the given type has been revoked from a previous step, but the access level must be lowered further
 * @param	computed	Dictionary<string, [PermissionMethod, PermissionLevel, apply order]>
 * @param	type
 * @param	level
 */
function _applyRevoke(
	computed: Map<PermissionType | string, [PermissionMethod, PermissionLevel, byte]>,
	type: PermissionType | string,
	level: PermissionLevel,
	order: byte
) {
	const existing = computed.get(type),
		revokeLevel = PERM_INDEX.indexOf(level);
	if (!existing || !revokeLevel) {
		// no existing definition, so set revoke to specified level
		// we add it to the list anyway for the complex permissions so that further down the chain,
		// the calculation can use the appropriate revoke level
		computed.set(type, [PermissionMethod.revoke, level, order]);
		//	} else if (!revokeLevel) {
		// revoke "read", same as revoke all, so just set as revoke read
		//		computed.set(type, [PermissionMethod.revoke, PermissionLevel.read, order]);
	} else if (
		existing[0] === PermissionMethod.grant && revokeLevel <= PERM_INDEX.indexOf(existing[1])
		|| existing[0] === PermissionMethod.revoke && revokeLevel < PERM_INDEX.indexOf(existing[1])
	) {
		// update/full, reduce access
		// re-add the existing grant/revoke, don't just set it to revoke
		computed.set(type, [existing[0], PERM_INDEX[revokeLevel - 1], order]);
	}
}

/**
 * A method used with Array#filter to retrieve only the specified permission types.
 * @this {PermissionType}			The PermissionType to filter
 * @param	permission
 */
function _filterType(this: PermissionType, permission: Permission) {
	return permission.kind == this;
}
/**
 * A method used with Array#filter to retrieve only "grant" permissions.
 * @param	permission
 */
function _filterGrants(this: ulong, permission: Permission) {
	return permission.method === PermissionMethod.grant
		&& permission.company == this;
}
/**
 * A method used with Array#filter to retrieve only "revoke" permissions.
 * @this {number}					The company's unique identifier
 * @param	permission
 */
function _filterRevokes(this: ulong, permission: Permission) {
	return permission.method === PermissionMethod.revoke
		&& permission.company == this;
}
/**
 * A method used with Array#filter to retrieve only label-based permissions.
 * @param	permission
 */
function _filterComplex(permission: Permission) {
	return !_filterSimple(permission);
}
/**
 * A method used with Array#filter to retrieve only non-label-based permissions.
 * @param	permission
 */
function _filterSimple(permission: Permission) {
	return LABEL_BASED_PERMS.indexOf(permission.kind) < 0;
}
/**
 * Sorts computed permissions into an ordered list for later processing.
 * @param	a
 * @param	b
 */
function _sortComplex(a: ComputedPermission, b: ComputedPermission) {
return a.order > b.order
	? -1
	: a.order < b.order
		? 1
		: 0;
}
/**
 *
 * @param	targetCompanyId
 * @param	userCompanyId
 * @param	groupPermissions
 * @param	userPermissions
 * @param	skipImpliedPermissions
 */
function _computePermissions(
	userCompanyId: ulong,
	groupPermissions:Permission[],
	userPermissions:Permission[],
	targetCompanyId?: ulong,
	skipImpliedPermissions?:boolean
) {
	const simple: ComputedPermission[] = [],
		complex: ComputedPermission[] = [],
		computed = new Map<PermissionType, [PermissionMethod, PermissionLevel, byte]>();

	// apply implied permissions for user's company
	targetCompanyId = targetCompanyId ?? userCompanyId;
	if (!skipImpliedPermissions && userCompanyId === targetCompanyId) {
		IMPLIED_PERMS.forEach(function (type) {
			computed.set(type, [PermissionMethod.grant, PermissionLevel.read, 0]);
		});
	}
	// group permissions are applied first 
	_applyGrants(computed, groupPermissions.filter(_filterGrants, targetCompanyId), 1);
	_applyRevokes(computed, groupPermissions.filter(_filterRevokes, targetCompanyId), 1);
	// then the user-specific permissions get applied
	_applyGrants(computed, userPermissions.filter(_filterGrants, targetCompanyId), 2);
	_applyRevokes(computed, userPermissions.filter(_filterRevokes, targetCompanyId), 2);

	// after all the grants/revokes have been compiled
	// we create two arrays:
	// 1) "simple" for non-label-based permissions
	// 2) "labelBased" for label-based permissions which is further reduced
	computed.forEach(function (methodLevelOrder, key) {
		const parts = (key as string).split(TYPE_SEPARATOR),
			type = PermissionType[parts[0]],
			label = parts[1] || "";	// if no second part is defined, it was not a label based permission
		if (!label) {
			// only return grant permissions for simple permissions
			if (methodLevelOrder[0] === PermissionMethod.grant) {
				simple.push(new ComputedPermission(
					targetCompanyId,
					type,
					methodLevelOrder[1],	// level
					methodLevelOrder[0],	// method
					[],
					0		// order
				));
			}
		} else {
			// return grants and revokes for complex permissions
			complex.push(new ComputedPermission(
				targetCompanyId,
				type,
				methodLevelOrder[1],	// level
				methodLevelOrder[0],	// method
				label === TYPE_ALL_LABELS
					? []
					: [label],
				methodLevelOrder[2]		// order
			));
		}
	});

	// the "complex" array is reduced so that like permissions are grouped by label
	// then the "complex" array is sorted by the "order" property
	// last, it is concatenated to the simple array and returned
	return simple.concat(
		complex.reduce(function (permissions, permission) {
			// if the new permission has no label restriction, we need to override existing label based 
			// permissions of a lower/same level and a lower/same order.
			if (!permission.labels.length) {
				// loop through the final permissions to find matches
				for (let i = 0, p; p = permissions[i]; i++) {
					if (
						p.kind === permission.kind			// always match type
						&& p.method === permission.method		// always match method
						&& PERM_INDEX.indexOf(p.level) <= PERM_INDEX.indexOf(permission.level)	// match on lower and same level
						&& p.__order <= permission.order			// match on lower and same order (higher orders are preserved in case they override a "revoke" permission)
					) {
						// remove the matching permission
						permissions.splice(i--, 1);
					}
				}
				// add the new permission to the final
				permissions.push(permission);
			} else {
				// within the reduce, we search for other permissions which are equivalent
				const existing = permissions.find(function (p) {
					return p.kind === permission.kind			// always match type
						&& p.method === permission.method		// always match method
						&& p.level === permission.level		// always match on level
						&& p.order <= permission.order;		// match on lower and same order (higher orders are preserved in case they override a "revoke" permission)
				});
				if (!existing) {
					// if no existing permission is found, we add it to the array
					permissions.push(permission);
				} else {
					// however if there is an equivalent permission, we need to add the new permissions labels
					if (existing.labels.length) {
						// but only if the existing permissions is not for "all labels"
						existing.labels.push(permission.labels[0]);
					}
				}
			}
			return permissions;	// this is the new array passed as second argument of complex.reduce
		}, [] as ComputedPermission[])
	)
		.sort(_sortComplex)
		.map(function (permission) {
			return new Permission(
				permission.company,
				permission.kind,
				permission.level,
				permission.method,
				permission.labels
			);
		});
}
//#endregion Computing/Internals





//#region Generic/global compute
/**
 * Creates a {@link Dictionary} where the key is a {@link Company#id} and the values are well ordered arrays of {@link Permission}s which can be used to further calculate a user's permissions.
 * @param	userCompanyId				Unique identifier of the {@link Company} to which the User belongs.
 * @param	fromGroups	Collection of permissions from {@link UserGroup}s to which the User belongs.
 * @param	fromUser		The User's user-specific permissions.
 * @param	skipImpliedPermissions		When true, does not automatically add implied permissions for the user's company.
 */
function computeAll(
	userCompanyId: ulong,
	fromGroups: Permission[],
	fromUser: Permission[],
	skipImpliedPermissions?: boolean
) {
	if (!fromGroups) fromGroups = [];
	if (!fromUser) fromUser = [];
	const companies = new Map<ulong, Permission[]>();
	companies.set(userCompanyId, _computePermissions(
		userCompanyId,
		fromGroups,
		fromUser,
		userCompanyId,
		!!skipImpliedPermissions
	));
	fromGroups.concat(fromUser).forEach(function (permission) {
		const targetCompanyId = permission.company;
		if (!companies.has(targetCompanyId)) {
			companies.set(targetCompanyId, _computePermissions(
				userCompanyId,
				fromGroups,
				fromUser,
				targetCompanyId,
				!!skipImpliedPermissions
			));
		}
	});
	return companies;
}
/**
 * Creates a well ordered array of {@link Permission}s which can be used to further calculate a user's permissions for the target company.
 * @param	userCompanyId				Unique identifier of the {@link Company#id} to which the User belongs.
 * @param	fromGroups	Collection of permissions from {@link UserGroup}s to which the User belongs.
 * @param	fromUser		The User's user-specific permissions.
 * @param	targetCompanyId			Unique identifier of the {@link Company#id} being tested for access.
 * @param	skipImpliedPermissions		When true, does not automatically add implied permissions for the user's company.
 */
function compute(
	userCompanyId: ulong,
	fromGroups: Permission[],
	fromUser: Permission[],
	targetCompanyId?: ulong,
	skipImpliedPermissions?: boolean
) {
	return _computePermissions(
		userCompanyId,
		fromGroups || [],
		fromUser || [],
		IS_AN(targetCompanyId)
			? targetCompanyId
			: userCompanyId,
		!!skipImpliedPermissions
	);
}
//#endregion Generic / global compute
//#region Simple Permissions
/**
 * Creates a {@link Dictionary} where the key is a {@link Company#id} and the values are well ordered arrays of simple {@link Permission}s which can be used to further calculate a user's permissions.
 * @param	userCompanyId				Unique identifier of the {@link Company} to which the User belongs.
 * @param	fromGroups	Collection of permissions from {@link UserGroup}s to which the User belongs.
 * @param	fromUser		The User's user-specific permissions.
 */
function computeAllSimple(
	userCompanyId: ulong,
	fromGroups: Permission[],
	fromUser
) {
	return computeAll(
		userCompanyId,
		(fromGroups || []).filter(_filterSimple),
		(fromUser || []).filter(_filterSimple)
	);
}
/**
 * Creates a well ordered array of simple {@link Permission}s which can be used to further calculate a user's permissions.
 * @param	userCompanyId				Unique identifier of the {@link Company} to which the User belongs.
 * @param	fromGroups	Collection of permissions from {@link UserGroup}s to which the User belongs.
 * @param	fromUser		The User's user-specific permissions.
 * @param	targetCompanyId			Unique identifier of the {@link Company} being tested for access.
 */
function computeSimple(
	userCompanyId: ulong,
	fromGroups: Permission[],
	fromUser: Permission[],
	targetCompanyId: ulong
) {
	return compute(
		userCompanyId,
		(fromGroups || []).filter(_filterSimple),
		(fromUser || []).filter(_filterSimple),
		targetCompanyId
	);	//.filter(_filterSimple);	don't add this because computeSimple is also used by the __AnyComplex functions
}
/**
 * Creates a {@link Dictionary} where the key is a {@link PermissionType} and the values are {@link PermissionLevel}s.
 * @param	userCompanyId				Unique identifier of the {@link Company} to which the User belongs.
 * @param	fromGroups	Collection of permissions from {@link UserGroup}s to which the User belongs.
 * @param	fromUser		The User's user-specific permissions.
 * @param	targetCompanyId			Unique identifier of the {@link Company} being tested for access.
 */
function computeSimpleLevels(
	userCompanyId: ulong,
	fromGroups: Permission[],
	fromUser: Permission[],
	targetCompanyId: ulong
) {
	const permissions = new Map<PermissionType, PermissionLevel>();
	computeSimple(
		userCompanyId,
		fromGroups,
		fromUser,
		targetCompanyId
	).forEach(function (permission) {
		permissions.set(permission.kind, permission.level);
	});
	return permissions;
}
/**
 * Gets the permission level of the given simple permission type.
 * If the permission type specified is not found, undefined is returned instead.
 * @param	userCompanyId				Unique identifier of the {@link Company} to which the User belongs.
 * @param	fromGroups	Collection of permissions from {@link UserGroup}s to which the User belongs.
 * @param	fromUser		The User's user-specific permissions.
 * @param	targetCompanyId			Unique identifier of the {@link Company} being tested for access.
 * @param	targetType			The specific {@link PermissionType}s to check.
 */
function getSimpleLevel(
	userCompanyId: ulong,
	fromGroups: Permission[],
	fromUser: Permission[],
	targetCompanyId: ulong,
	targetType: PermissionType
) {
	return findSimpleLevel(
		userCompanyId,
		computeSimple(
			userCompanyId,
			fromGroups,
			fromUser,
			targetCompanyId
		),
		targetType
	);
}
/**
 * Checks a specific simple permission type and level, and returns true if access is granted.
 * @param	userCompanyId				Unique identifier of the {@link Company} to which the User belongs.
 * @param	fromGroups	Collection of permissions from {@link UserGroup}s to which the User belongs.
 * @param	fromUser		The User's user-specific permissions.
 * @param	targetCompanyId			Unique identifier of the {@link Company} being tested for access.
 * @param	targetType			The specific {@link PermissionType}s to check.
 * @param	targetLevel		Minimum requested level of access.
 */
function hasSimple(
	userCompanyId: ulong,
	fromGroups: Permission[],
	fromUser: Permission[],
	targetCompanyId: ulong,
	targetType: PermissionType,
	targetLevel: PermissionLevel
) {
	return findSimple(
		userCompanyId,
		computeSimple(
			userCompanyId,
			fromGroups,
			fromUser,
			targetCompanyId
		),
		targetType,
		targetLevel
	);
}
/**
 * Checks a specific simple permission type and level from a pre-computed array of permissions, and returns true if access is granted.
 * @param	userCompanyId				Unique identifier of the {@link Company} to which the User belongs.
 * @param	permissions	Pre-computed and ordered array of {@link Permission} like the kind returned by {@link authorizer.computeSimple}.
 * @param	targetType			The specific {@link PermissionType}s to check.
 * @param	targetLevel		Minimum requested level of access.
 */
function findSimple(
	userCompanyId: ulong,
	permissions: Permission[],
	targetType: PermissionType,
	targetLevel: PermissionLevel
) {
	return PERM_INDEX.indexOf(
		findSimpleLevel(
			userCompanyId,
			permissions,
			targetType
		) as PermissionLevel
	) >= PERM_INDEX.indexOf(
		PermissionLevel[targetLevel]
		|| PermissionLevel.read
	);
}
/**
 * Retrieves the specified simple permission level from a pre-computed array of permissions.
 * If the permission type specified is not found, undefined is returned instead.
 * @param	userCompanyId				Unique identifier of the {@link Company} to which the User belongs.
 * @param	permissions	Pre-computed and ordered array of {@link Permission} like the kind returned by {@link authorizer.computeSimple}.
 * @param	targetType			The specific {@link PermissionType}s to check.
 */
function findSimpleLevel(
	userCompanyId: ulong,
	permissions: Permission[],
	targetType: PermissionType
) {
	if (userCompanyId === 0) return PermissionLevel.full; // hax for master accounts
	else if (!IS_AN(userCompanyId)) throw new TypeError("userCompanyId must be a number");

	const permission = (permissions || []).find(_filterType, targetType);
	return permission
		&& permission.method === PermissionMethod.grant
		? permission.level
		: undefined;
}
//#endregion Simple Permissions
//#region Complex Permissions
/**
 * Creates a {@link Dictionary} where the key is a {@link Company#id} and the values are well ordered arrays of complex {@link Permission}s which can be used to further calculate a user's permissions.
 * @param	userCompanyId				Unique identifier of the {@link Company} to which the User belongs.
 * @param	fromGroups	Collection of permissions from {@link UserGroup}s to which the User belongs.
 * @param	fromUser		The User's user-specific permissions.
 */
function computeAllComplex(
	userCompanyId: ulong,
	fromGroups: Permission[],
	fromUser
) {
	const computed = new Map<ulong, Permission[]>();
	computeAll(
		userCompanyId,
		(fromGroups || []).filter(_filterComplex),
		(fromUser || []).filter(_filterComplex)
	).forEach(function (value, key) {
		// because implied permissions can get through
		for (let i = 0, permission; permission = value[i]; i++) {	// loop works because value is never null
			if (!_filterComplex(permission)) {
				value.splice(i--, 1);						// remove permissions from value array
			}
		}
		// value (passed as reference) is added back to the filter/copy dictionary as modified 
		if (value.length > 0) computed.set(key, value);
	});
	return computed;
}
/**
 * Creates a well ordered array of complex {@link Permission}s which can be used to further calculate a user's permissions.
 * @param	userCompanyId				Unique identifier of the {@link Company} to which the User belongs.
 * @param	fromGroups	Collection of permissions from {@link UserGroup}s to which the User belongs.
 * @param	fromUser		The User's user-specific permissions.
 * @param	targetCompanyId			Unique identifier of the {@link Company} being tested for access.
 */
function		computeComplex(
	userCompanyId: ulong,
	fromGroups: Permission[],
	fromUser: Permission[],
	targetCompanyId?: ulong
) {
	return compute(
		userCompanyId,
		(fromGroups || []).filter(_filterComplex),
		(fromUser || []).filter(_filterComplex),
		targetCompanyId
	).filter(_filterComplex);	// because implied permissions can get through
}
/**
 * Gets the permission level of the given complex permission type.
 * If the permission type specified is not found, undefined is returned instead.
 * @param	userCompanyId				Unique identifier of the {@link Company} to which the User belongs.
 * @param	fromGroups	Collection of permissions from {@link UserGroup}s to which the User belongs.
 * @param	fromUser		The User's user-specific permissions.
 * @param	targetCompanyId			Unique identifier of the {@link Company} being tested for access.
 * @param	targetCompanyLabels	List of codified {@link LabelStyle} names available in the Company.
 * @param	targetType			The specific {@link PermissionType}s to check.
 * @param	targetLabels		List of codified {@link LabelStyle} names used by the target.
 */
function getComplexLevel(
	userCompanyId: ulong,
	fromGroups: Permission[],
	fromUser: Permission[],
	targetCompanyId: ulong,
	targetCompanyLabels: codified[],
	targetType: PermissionType,
	targetLabels
) {
	return findComplexLevel(
		userCompanyId,
		computeComplex(
			userCompanyId,
			fromGroups,
			fromUser,
			targetCompanyId
		),
		targetCompanyLabels,
		targetType,
		targetLabels
	);
}
/**
 * Checks a specific complex permission type, level, and labels, and returns true if access is granted.
 * @param	userCompanyId				Unique identifier of the {@link Company} to which the User belongs.
 * @param	fromGroups	Collection of permissions from {@link UserGroup}s to which the User belongs.
 * @param	fromUser		The User's user-specific permissions.
 * @param	targetCompanyId			Unique identifier of the {@link Company} being tested for access.
 * @param	targetCompanyLabels	List of codified {@link LabelStyle} names available in the Company.
 * @param	targetType			The specific {@link PermissionType}s to check.
 * @param	targetLabels		List of codified {@link LabelStyle} names used by the target.
 * @param	targetLevel		Minimum requested level of access.
 */
function		hasComplex(
	userCompanyId: ulong,
	fromGroups: Permission[],
	fromUser: Permission[],
	targetCompanyId: ulong,
	targetCompanyLabels: codified[],
	targetType: PermissionType,
	targetLabels,
	targetLevel: PermissionLevel
) {
	return findComplex(
		userCompanyId,
		computeComplex(
			userCompanyId,
			fromGroups,
			fromUser,
			targetCompanyId
		),
		targetCompanyLabels,
		targetType,
		targetLabels,
		targetLevel
	);
}
/**
 * Checks a specific complex permission type, level, and labels from a pre-computed array of permissions, and returns true if access is granted.
 * @param	userCompanyId				Unique identifier of the {@link Company} to which the User belongs.
 * @param	permissions	Pre-computed and ordered array of {@link Permission} like the kind returned by {@link authorizer.computeComplex}.
 * @param	targetCompanyLabels	List of codified {@link LabelStyle} names available in the Company
 * @param	targetType			The specific {@link PermissionType}s to check.
 * @param	targetLabels		List of codified {@link LabelStyle} names used by the target.
 * @param	targetLevel		Minimum requested level of access.
 */
function findComplex(
	userCompanyId: ulong,
	permissions: Permission[],
	targetCompanyLabels: codified[],
	targetType: PermissionType,
	targetLabels,
	targetLevel: PermissionLevel
) {
	return PERM_INDEX.indexOf(
		findComplexLevel(
			userCompanyId,
			permissions,
			targetCompanyLabels,
			targetType,
			targetLabels
		) as PermissionLevel
	) >= PERM_INDEX.indexOf(
		PermissionLevel[targetLevel]
		|| PermissionLevel.read
	);
}
/**
 * Retrieves the specified complex permission level from a pre-computed array of permissions.
 * If the permission type specified is not found, undefined is returned instead.
 * @param	userCompanyId				Unique identifier of the {@link Company} to which the User belongs.
 * @param	permissions	Pre-computed and ordered array of {@link Permission} like the kind returned by {@link authorizer.computeComplex}.
 * @param	targetCompanyLabels	List of codified {@link LabelStyle} names available in the Company
 * @param	targetType			The specific {@link PermissionType}s to check.
 * @param	targetLabels		List of codified {@link LabelStyle} names used by the target.
 */
function findComplexLevel(
	userCompanyId: ulong,
	permissions: Permission[],
	targetCompanyLabels: codified[],
	targetType: PermissionType,
	targetLabels: codified[]
) {
	if (userCompanyId === 0) return PermissionLevel.full; // hax for master accounts
	else if (!IS_AN(userCompanyId)) throw new TypeError("userCompanyId must be a number");

	if (!targetCompanyLabels) targetCompanyLabels = [];
	if (!targetLabels || !targetLabels.length) targetLabels = targetCompanyLabels;
	let levelRead: codified[] | null = null,
		levelUpdate: codified[] | null = null,
		levelFull: codified[] | null = null;
	(permissions || []).forEach(function (permission) {
		// only check the correct types
		if (permission.kind === targetType) {
			// if permission has no label restrictions, treat like it has all company labels
			const labels = !permission.labels
				|| !permission.labels.length
				? targetCompanyLabels.concat(targetLabels)
				: permission.labels;

			if (permission.method === PermissionMethod.grant) {
				// create arrays to hold label names for each access level
				// this also helps in the final round check since if there are no labels it still creates the access level array
				// if the access level array exists, it means that at least one grant was given (in order, without a revoke)
				// we use the fall-through pattern here on purpose
				// if full level is granted, then we also assume update and read are granted
				switch (permission.level) {
					case PermissionLevel.full: if (!levelFull) levelFull = [];		// no break
					case PermissionLevel.update: if (!levelUpdate) levelUpdate = [];	// no break
					case PermissionLevel.read: if (!levelRead) levelRead = [];		// no break
				}
				// next we cycle through all label names
				// each time a label is missing, we add it to the correct access group
				labels.forEach(function (label) {
					// we use the fall-through pattern here on purpose
					// if full level is granted, then we also assume update and read are granted
					// the fall-through makes it easier to manage the three access level arrays
					switch (permission.level) {
						case PermissionLevel.full: if ((levelFull as codified[]).indexOf(label) < 0) (levelFull as codified[]).push(label);		// no break
						case PermissionLevel.update: if ((levelUpdate as codified[]).indexOf(label) < 0) (levelUpdate as codified[]).push(label);	// no break
						case PermissionLevel.read: if ((levelRead as codified[]).indexOf(label) < 0) (levelRead as codified[]).push(label);		// no break
					}
				});
			} else /*if (permission.method === PermissionMethod.revoke)*/ {
				if (!labels.length) {
					// if there are no labels, we can safely set the access level array to null
					// that way, if a company has no labels, it can act as a flag to the final calculation
					// we use the fall-through pattern here on purpose
					// if read level is revoked, then we also assume update and read are revoked
					switch (permission.level) {
						case PermissionLevel.read: if (levelRead) levelRead = null;			// no break
						case PermissionLevel.update: if (levelUpdate) levelUpdate = null;	// no break
						case PermissionLevel.full: if (levelFull) levelFull = null;			// no break
					}
				} else {
					// if there are labels, we cycle through them
					// and remove those label names from the access level arrays
					labels.forEach(function (label) {
						let index;
						// we use the fall-through pattern here on purpose
						// if read level is revoked, then we also assume update and read are revoked
						switch (permission.level) {
							case PermissionLevel.read: if (levelRead && (index = levelRead.indexOf(label)) > -1) levelRead.splice(index, 1);			// no break
							case PermissionLevel.update: if (levelUpdate && (index = levelUpdate.indexOf(label)) > -1) levelUpdate.splice(index, 1);	// no break
							case PermissionLevel.full: if (levelFull && (index = levelFull.indexOf(label)) > -1) levelFull.splice(index, 1);			// no break
						}
					});
					// we also set the access level array to null if it no longer has any labels
					// (meaning all access has been revoked)
					if (levelRead && !levelRead.length) levelRead = null;
					if (levelUpdate && !levelUpdate.length) levelUpdate = null;
					if (levelFull && !levelFull.length) levelFull = null;
				}
			}
		}
	});

	// when returning a value, we check for highest access level to lowest
	// for full and update access level, we must match "all" labels, but for read it's "any" label
	return levelFull											// if the full access level array exists, then at least one full grant was applied
		&& !ARRAY_EXCEPT(targetLabels, levelFull).length				// next we check to see if there are any remaining (un-granted) company label names
		? PermissionLevel.full									// if there are not, then we have matched the access level for the target
		: levelUpdate											// if the update access level array exists, then at least one update grant was applied
			&& !ARRAY_EXCEPT(targetLabels, levelUpdate).length		// next we check to see if there are any remaining (un-granted) company label names
			? PermissionLevel.update								// if there are not, then we have matched the access level for the target
			: levelRead										// lastly, if the read access level array exists, then at least one read grant was applied
				&& ARRAY_INTERSECT(targetLabels, levelRead).length	// next we check to see if there are any overlapping company label names
				|| !targetCompanyLabels.length					// or in the case where the company has no labels defined, but the read-labels list exists
				? PermissionLevel.read							// if there are, then we have matched the access level for the target
				: undefined;									// finally, we return undefined if there is no access granted (or all access was revoked)
}
/**
 * Checks a specific complex permission type, level, but not the labels, and returns true if access is granted.
 * This method can be used as a short-circuit to diving deeper into check label specific permissions.
 * @param	userCompanyId				Unique identifier of the {@link Company} to which the User belongs.
 * @param	fromGroups	Collection of permissions from {@link UserGroup}s to which the User belongs.
 * @param	fromUser		The User's user-specific permissions.
 * @param	targetCompanyId			Unique identifier of the {@link Company} being tested for access.
 * @param	targetType			The specific {@link PermissionType}s to check.
 * @param	targetLevel		Optional level of access. If not specified, default is {@link PermissionLevel.read}.
 */
function		hasAnyComplex(
	userCompanyId: ulong,
	fromGroups: Permission[],
	fromUser: Permission[],
	targetCompanyId: ulong,
	targetType: PermissionType,
	targetLevel: PermissionLevel
) {
	return findAnyComplex(
		userCompanyId,
		computeComplex(
			userCompanyId,
			fromGroups,
			fromUser,
			targetCompanyId
		),
		targetType,
		targetLevel
	);
}
/**
 * Checks a specific complex permission type, level, but not the labels, and returns true if access is granted.
 * This method can be used as a short-circuit to diving deeper into check label specific permissions.
 * @param	userCompanyId				Unique identifier of the {@link Company} to which the User belongs.
 * @param	permissions	Pre-computed and ordered array of {@link Permission} like the kind returned by {@link authorizer.computeComplex}.
 * @param	targetType			The specific {@link PermissionType}s to check.
 * @param	targetLevel		Optional level of access. If not specified, default is {@link PermissionLevel.read}.
 */
function		findAnyComplex(
	userCompanyId: ulong,
	permissions: Permission[],
	targetType: PermissionType,
	targetLevel: PermissionLevel
) {
	// ain't this some shit!?
	// if we treat the complex types like simple types,
	// we can do a pre-computation lookup to see if it's worth going further
	return findSimple(
		userCompanyId,
		permissions,
		targetType,
		targetLevel
	);
}
//#endregion Complex Permissions

//#region Escalations

/**
 * Generates a {@link Dictionary} (company identifier as the key) of permissions being escalated between two computed permission states.
 * @param	userCompanyId								Unique identifier of the {@link Company} to which the User belongs.
 * @param	before		Initial state of fully computed list of permissions (like returned by returned by {@link authorizer.computeAll}).
 * @param	after		Proposed state of computed permissions (like returned by {@link authorizer.computeAll}).
 * @param	targetCompaniesLabels	{@link Dictionary} of company and list of codified {@link LabelStyle} names available.  If not specified, complex permissions will not be evaluated correctly.
 **/
function findAllEscalations(
	userCompanyId: ulong,
	before,
	after,
	targetCompaniesLabels
) {
	const escalations = new Map<ulong, PermissionEscalation[]>();
	after.forEach(function (permissions, companyId) {
		if (!before.has(companyId)) {
			escalations.set(companyId, permissions.map(function (proposed) {
				return new PermissionEscalation(
					PermissionEscalationType.vertical,
					proposed.company,
					proposed.kind,
					proposed.level,
					proposed.labels
				);
			}));
		} else {
			const escalated = findEscalations(
				userCompanyId,
				before.get(companyId),
				permissions,
				targetCompaniesLabels && targetCompaniesLabels.get(companyId)
			);
			if (escalated.length) escalations.set(companyId, escalated);
		}
	});
	return escalations;
}
/**
 * Generates an array of permissions being escalated between two computed permission states for a target company.
 * @param	userCompanyId								Unique identifier of the {@link Company} to which the User belongs.
 * @param	before						Initial list of computed permissions for a company (like returned by {@link authorizer.compute}).
 * @param	after						Proposed list of computed permissions for a company (like returned by {@link authorizer.compute}).
 * @param	targetCompanyLabels					List of codified {@link LabelStyle} names available in the Company.  If not specified, complex permissions will not be evaluated correctly.
 */
function findEscalations(
	userCompanyId: ulong,
	before: Permission[],
	after: Permission[],
	targetCompanyLabels: codified[]
) {
	if (!IS_AN(userCompanyId)) throw new TypeError("userCompanyId must be a number");

	const escalated: PermissionEscalation[] = [];
	if (after && after.length) {
		if (!before) before = [];
		after.forEach(function (proposed) {
			if (LABEL_BASED_PERMS.indexOf(proposed.kind) > -1) {
				// complex permissions are... more complicated
				// since it's possible that a matching label-based restriction is added as grant, then revoke, then grant, then revoke
				// we need to get calculate the labels specific permission level,
				// and compare the "before-level" to the "after-level"
				// ... and we need to do this on a label-by-label basis,
				// because companies with many labels will have per label permissions assigned which must be accounted for in the calculation
				// specifically, if the "before" state has a label restriction, but the "after" state doesn't
				if (!targetCompanyLabels) targetCompanyLabels = [];
				const labels = ARRAY_UNIQUE(targetCompanyLabels.concat(proposed.labels || []));
				for (let i = 0, l = labels.length; i < l; i++) {
					const beforeLevel = findComplexLevel(
						userCompanyId,
						before,
						targetCompanyLabels,
						proposed.kind,
						[labels[i]]
					),
						afterLevel = findComplexLevel(
							userCompanyId,
							after,
							targetCompanyLabels,
							proposed.kind,
							[labels[i]]
						);
					// case (invalid before)	= -1 < (invalid after)	= -1 => false; which is good
					if (_isEscalatedLevel(beforeLevel, afterLevel)) {
						escalated.push(new PermissionEscalation(
							PermissionEscalationType.vertical,
							proposed.company,
							proposed.kind,
							afterLevel as PermissionLevel,
							[labels[i]],
							beforeLevel,
							[labels[i]]	// proposed labels are unchanged
						));
						// at least one label has been escalated,
						// so we don't need to keep checking and re-add this permission
						break;
					}
				}
			} else {
				// simple permissions are... much simpler
				// since a computed list of permissions contains no revokes,
				// we can simply check the "before" state for any permissions with a lower level of access
				// ... so find any existing permission (matching type) with a higher/equal level
				// if none found, then either the permission didn't exist before, or the level is higher
				const current = before.find(function (b) { return b.kind == proposed.kind; });
				if (_isEscalatedLevel(current?.level, proposed.level)) {
					escalated.push(new PermissionEscalation(
						PermissionEscalationType.vertical,
						proposed.company,
						proposed.kind,
						proposed.level,
						null,		// simple permissions have no labels
						current?.level,
						null		// simple permissions have no labels
					));
				}
			}
		});
	}
	return escalated;
}

/**
 * Generates a list of labels that create an escalated permission state after the proposed modification.
 * @param	userCompanyId							Unique identifier of the Company to which the User belongs.
 * @param	targetCompanyPermissions	List of computed permissions for a company (like returned by {@link authorizer.compute}).
 * @param	targetTypes				List of {@link PermissionType}s to check.
 * @param	targetCompanyLabels				List of codified {@link LabelStyle} names available in the {@link Company}.
 * @param	targetBeforeLabels				The labels appled to the ILabelled object before the proposed change.
 * @param	targetAfterLabels				The labels appled to the ILabelled object after the proposed change.
 **/
function findAllLabelEscalations(
	userCompanyId: ulong,
	targetCompanyPermissions: Permission[],
	targetTypes: PermissionType[],
	targetCompanyLabels: codified[],
	targetBeforeLabels: codified[],
	targetAfterLabels: codified[]
) {
	const escalated: PermissionEscalation[] = [];
	if ((targetTypes || []).length > 0) {
		targetTypes.forEach(function (targetType) {
			const escalation = findLabelEscalation(
				userCompanyId,
				targetCompanyPermissions,
				targetType,
				targetCompanyLabels,
				targetBeforeLabels,
				targetAfterLabels
			);
			if (escalation) escalated.push(escalation);
		});
	}
	return escalated;
}
/**
 * Generates a list of labels that create an escalated permission state after the proposed modification to an labelled object.
 * @param	userCompanyId							Unique identifier of the Company to which the User belongs.
 * @param	targetCompanyPermissions	List of computed permissions for a single company (like returned by {@link authorizer.compute}).
 * @param	targetType						The specific {@link PermissionType} to check.
 * @param	targetCompanyLabels				List of codified {@link LabelStyle} names available in the {@link Company}.
 * @param	targetBeforeLabels				The labels appled to the ILabelled object before the proposed change.
 * @param	targetAfterLabels				The labels appled to the ILabelled object after the proposed change.
 **/
function findLabelEscalation(
	userCompanyId: ulong,
	targetCompanyPermissions: Permission[],
	targetType: PermissionType,
	targetCompanyLabels: codified[],
	targetBeforeLabels?: codified[],
	targetAfterLabels?: codified[]
) {
	if (userCompanyId === 0) return null; // hax for master accounts

	targetBeforeLabels = targetBeforeLabels || [];
	targetAfterLabels = targetAfterLabels || [];
	const targetCompanyIds = ARRAY_UNIQUE((targetCompanyPermissions || []).map(function (p) { return p.company; }));
	switch (targetCompanyIds.length) {
		case 1: break;//ok
		case 0: throw new Error("Zero permissions given.");
		default: throw new Error("Permissions given for more than one company.");
	}
	const beforeLevel = findComplexLevel(
		userCompanyId,
		targetCompanyPermissions,
		targetCompanyLabels,
		targetType,
		targetBeforeLabels
	),
		afterLevel = findComplexLevel(
			userCompanyId,
			targetCompanyPermissions,
			targetCompanyLabels,
			targetType,
			targetAfterLabels
		);

	return _isEscalatedLevel(beforeLevel, afterLevel)
		? new PermissionEscalation(
			PermissionEscalationType.horizontal,
			targetCompanyIds[0],
			targetType,
			afterLevel as PermissionLevel,
			targetAfterLabels.length > 0
				? targetAfterLabels
				: (targetCompanyLabels || []),
			beforeLevel,
			targetBeforeLabels.length > 0
				? targetBeforeLabels
				: (targetCompanyLabels || [])
		)
		: null;
}
/**
 * Returns true if the "after" permission level is higher than the "before".
 * If "before" is undefined, then it will ealuate as -1, which is always lower than a valid "after".
 * Used internally by {@link findEscalations} (for labelled objects).
 * @param	before
 * @param	after
 **/
function _isEscalatedLevel(before: PermissionLevel | undefined, after: PermissionLevel | undefined) {
	return PERM_INDEX.indexOf(after as PermissionLevel) > PERM_INDEX.indexOf(before as PermissionLevel);
}
//#endregion Escalations

/**
 * A collection of utility methods that allows you to check a user's permission to objects within the system.
 * The most common functions you should use are {@link authorizer.hasSimple} and {@link authorizer.hasComplex}.
 */
export const authorizer = {
	// Generic / global compute
	computeAll,
	compute,

	// Simple Permissions
	computeAllSimple,
	computeSimple,
	computeSimpleLevels,
	getSimpleLevel,
	hasSimple,
	findSimple,
	findSimpleLevel,

	// Complex Permissions
	computeAllComplex,
	computeComplex,
	getComplexLevel,
	findComplexLevel,
	hasComplex,
	findComplex,
	hasAnyComplex,
	findAnyComplex,
	
	// Escalations
	findAllEscalations,
	findEscalations,
	findAllLabelEscalations,
	findLabelEscalation,
	
	// exposed properties
	/**
	 * A list of {@link PermissionType}s which are implied for each user's own company.
	 */
	implied: FREEZE(IMPLIED_PERMS),
	/**
	 * The {@link PermissionType}s which are calculated using labels.
	 */
	simple: FREEZE(ARRAY_EXCEPT(KEYS(PermissionType) as PermissionType[], LABEL_BASED_PERMS)),
	/**
	 * {@link PermissionType}s which do not use labels to calculate access.
	 */
	complex: FREEZE(LABEL_BASED_PERMS),
};