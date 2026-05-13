import { codified, ulong } from '../../API/Types';
import { Permission } from './Permission';
import { PermissionEscalation } from './PermissionEscalation';
import { PermissionLevel } from './PermissionLevel';
import { PermissionType } from './PermissionType';
/**
 * Users have implied read access to their company's general, labels, policies, icons, and pictures.
 */
export declare const IMPLIED_PERMS: PermissionType[];
/**
 * These are the permissions which require label-based calculations.
 */
export declare const LABEL_BASED_PERMS: PermissionType[];
/**
 * Creates a {@link Dictionary} where the key is a {@link Company#id} and the values are well ordered arrays of {@link Permission}s which can be used to further calculate a user's permissions.
 * @param	userCompanyId				Unique identifier of the {@link Company} to which the User belongs.
 * @param	fromGroups	Collection of permissions from {@link UserGroup}s to which the User belongs.
 * @param	fromUser		The User's user-specific permissions.
 * @param	skipImpliedPermissions		When true, does not automatically add implied permissions for the user's company.
 */
export declare function computeAll(userCompanyId: ulong, fromGroups: Permission[], fromUser: Permission[], skipImpliedPermissions?: boolean): Map<number, Permission[]>;
/**
 * Creates a well ordered array of {@link Permission}s which can be used to further calculate a user's permissions for the target company.
 * @param	userCompanyId				Unique identifier of the {@link Company#id} to which the User belongs.
 * @param	fromGroups	Collection of permissions from {@link UserGroup}s to which the User belongs.
 * @param	fromUser		The User's user-specific permissions.
 * @param	targetCompanyId			Unique identifier of the {@link Company#id} being tested for access.
 * @param	skipImpliedPermissions		When true, does not automatically add implied permissions for the user's company.
 */
export declare function compute(userCompanyId: ulong, fromGroups: Permission[], fromUser: Permission[], targetCompanyId?: ulong, skipImpliedPermissions?: boolean): Permission[];
/**
 * Creates a {@link Dictionary} where the key is a {@link Company#id} and the values are well ordered arrays of simple {@link Permission}s which can be used to further calculate a user's permissions.
 * @param	userCompanyId				Unique identifier of the {@link Company} to which the User belongs.
 * @param	fromGroups	Collection of permissions from {@link UserGroup}s to which the User belongs.
 * @param	fromUser		The User's user-specific permissions.
 */
export declare function computeAllSimple(userCompanyId: ulong, fromGroups: Permission[], fromUser: Permission[]): Map<number, Permission[]>;
/**
 * Creates a well ordered array of simple {@link Permission}s which can be used to further calculate a user's permissions.
 * @param	userCompanyId				Unique identifier of the {@link Company} to which the User belongs.
 * @param	fromGroups	Collection of permissions from {@link UserGroup}s to which the User belongs.
 * @param	fromUser		The User's user-specific permissions.
 * @param	targetCompanyId			Unique identifier of the {@link Company} being tested for access.
 */
export declare function computeSimple(userCompanyId: ulong, fromGroups: Permission[], fromUser: Permission[], targetCompanyId: ulong): Permission[];
/**
 * Creates a {@link Dictionary} where the key is a {@link PermissionType} and the values are {@link PermissionLevel}s.
 * @param	userCompanyId				Unique identifier of the {@link Company} to which the User belongs.
 * @param	fromGroups	Collection of permissions from {@link UserGroup}s to which the User belongs.
 * @param	fromUser		The User's user-specific permissions.
 * @param	targetCompanyId			Unique identifier of the {@link Company} being tested for access.
 */
export declare function computeSimpleLevels(userCompanyId: ulong, fromGroups: Permission[], fromUser: Permission[], targetCompanyId: ulong): Map<PermissionType, PermissionLevel>;
/**
 * Gets the permission level of the given simple permission type.
 * If the permission type specified is not found, undefined is returned instead.
 * @param	userCompanyId				Unique identifier of the {@link Company} to which the User belongs.
 * @param	fromGroups	Collection of permissions from {@link UserGroup}s to which the User belongs.
 * @param	fromUser		The User's user-specific permissions.
 * @param	targetCompanyId			Unique identifier of the {@link Company} being tested for access.
 * @param	targetType			The specific {@link PermissionType}s to check.
 */
export declare function getSimpleLevel(userCompanyId: ulong, fromGroups: Permission[], fromUser: Permission[], targetCompanyId: ulong, targetType: PermissionType): PermissionLevel | undefined;
/**
 * Checks a specific simple permission type and level, and returns true if access is granted.
 * @param	userCompanyId				Unique identifier of the {@link Company} to which the User belongs.
 * @param	fromGroups	Collection of permissions from {@link UserGroup}s to which the User belongs.
 * @param	fromUser		The User's user-specific permissions.
 * @param	targetCompanyId			Unique identifier of the {@link Company} being tested for access.
 * @param	targetType			The specific {@link PermissionType}s to check.
 * @param	targetLevel		Minimum requested level of access.
 */
export declare function hasSimple(userCompanyId: ulong, fromGroups: Permission[], fromUser: Permission[], targetCompanyId: ulong, targetType: PermissionType, targetLevel: PermissionLevel): boolean;
/**
 * Checks a specific simple permission type and level from a pre-computed array of permissions, and returns true if access is granted.
 * @param	userCompanyId				Unique identifier of the {@link Company} to which the User belongs.
 * @param	permissions	Pre-computed and ordered array of {@link Permission} like the kind returned by {@link authorizer.computeSimple}.
 * @param	targetType			The specific {@link PermissionType}s to check.
 * @param	targetLevel		Minimum requested level of access.
 */
export declare function findSimple(userCompanyId: ulong, permissions: Permission[], targetType: PermissionType, targetLevel: PermissionLevel): boolean;
/**
 * Retrieves the specified simple permission level from a pre-computed array of permissions.
 * If the permission type specified is not found, undefined is returned instead.
 * @param	userCompanyId				Unique identifier of the {@link Company} to which the User belongs.
 * @param	permissions	Pre-computed and ordered array of {@link Permission} like the kind returned by {@link authorizer.computeSimple}.
 * @param	targetType			The specific {@link PermissionType}s to check.
 */
export declare function findSimpleLevel(userCompanyId: ulong, permissions: Permission[], targetType: PermissionType): PermissionLevel | undefined;
/**
 * Creates a {@link Dictionary} where the key is a {@link Company#id} and the values are well ordered arrays of complex {@link Permission}s which can be used to further calculate a user's permissions.
 * @param	userCompanyId				Unique identifier of the {@link Company} to which the User belongs.
 * @param	fromGroups	Collection of permissions from {@link UserGroup}s to which the User belongs.
 * @param	fromUser		The User's user-specific permissions.
 */
export declare function computeAllComplex(userCompanyId: ulong, fromGroups: Permission[], fromUser: Permission[]): Map<number, Permission[]>;
/**
 * Creates a well ordered array of complex {@link Permission}s which can be used to further calculate a user's permissions.
 * @param	userCompanyId				Unique identifier of the {@link Company} to which the User belongs.
 * @param	fromGroups	Collection of permissions from {@link UserGroup}s to which the User belongs.
 * @param	fromUser		The User's user-specific permissions.
 * @param	targetCompanyId			Unique identifier of the {@link Company} being tested for access.
 */
export declare function computeComplex(userCompanyId: ulong, fromGroups: Permission[], fromUser: Permission[], targetCompanyId?: ulong): Permission[];
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
export declare function getComplexLevel(userCompanyId: ulong, fromGroups: Permission[], fromUser: Permission[], targetCompanyId: ulong, targetCompanyLabels: codified[], targetType: PermissionType, targetLabels: codified[]): PermissionLevel | undefined;
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
export declare function hasComplex(userCompanyId: ulong, fromGroups: Permission[], fromUser: Permission[], targetCompanyId: ulong, targetCompanyLabels: codified[], targetType: PermissionType, targetLabels: codified[], targetLevel: PermissionLevel): boolean;
/**
 * Checks a specific complex permission type, level, and labels from a pre-computed array of permissions, and returns true if access is granted.
 * @param	userCompanyId				Unique identifier of the {@link Company} to which the User belongs.
 * @param	permissions	Pre-computed and ordered array of {@link Permission} like the kind returned by {@link authorizer.computeComplex}.
 * @param	targetCompanyLabels	List of codified {@link LabelStyle} names available in the Company
 * @param	targetType			The specific {@link PermissionType}s to check.
 * @param	targetLabels		List of codified {@link LabelStyle} names used by the target.
 * @param	targetLevel		Minimum requested level of access.
 */
export declare function findComplex(userCompanyId: ulong, permissions: Permission[], targetCompanyLabels: codified[], targetType: PermissionType, targetLabels: codified[], targetLevel: PermissionLevel): boolean;
/**
 * Retrieves the specified complex permission level from a pre-computed array of permissions.
 * If the permission type specified is not found, undefined is returned instead.
 * @param	userCompanyId				Unique identifier of the {@link Company} to which the User belongs.
 * @param	permissions	Pre-computed and ordered array of {@link Permission} like the kind returned by {@link authorizer.computeComplex}.
 * @param	targetCompanyLabels	List of codified {@link LabelStyle} names available in the Company
 * @param	targetType			The specific {@link PermissionType}s to check.
 * @param	targetLabels		List of codified {@link LabelStyle} names used by the target.
 */
export declare function findComplexLevel(userCompanyId: ulong, permissions: Permission[], targetCompanyLabels: codified[], targetType: PermissionType, targetLabels: codified[]): PermissionLevel | undefined;
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
export declare function hasAnyComplex(userCompanyId: ulong, fromGroups: Permission[], fromUser: Permission[], targetCompanyId: ulong, targetType: PermissionType, targetLevel: PermissionLevel): boolean;
/**
 * Checks a specific complex permission type, level, but not the labels, and returns true if access is granted.
 * This method can be used as a short-circuit to diving deeper into check label specific permissions.
 * @param	userCompanyId				Unique identifier of the {@link Company} to which the User belongs.
 * @param	permissions	Pre-computed and ordered array of {@link Permission} like the kind returned by {@link authorizer.computeComplex}.
 * @param	targetType			The specific {@link PermissionType}s to check.
 * @param	targetLevel		Optional level of access. If not specified, default is {@link PermissionLevel.read}.
 */
export declare function findAnyComplex(userCompanyId: ulong, permissions: Permission[], targetType: PermissionType, targetLevel: PermissionLevel): boolean;
/**
 * Generates a {@link Dictionary} (company identifier as the key) of permissions being escalated between two computed permission states.
 * @param	userCompanyId								Unique identifier of the {@link Company} to which the User belongs.
 * @param	before		Initial state of fully computed list of permissions (like returned by returned by {@link authorizer.computeAll}).
 * @param	after		Proposed state of computed permissions (like returned by {@link authorizer.computeAll}).
 * @param	targetCompaniesLabels	{@link Dictionary} of company and list of codified {@link LabelStyle} names available.  If not specified, complex permissions will not be evaluated correctly.
 */
export declare function findAllEscalations(userCompanyId: ulong, before: Map<ulong, Permission[]>, after: Map<ulong, Permission[]>, targetCompaniesLabels: Map<ulong, codified[]>): Map<number, PermissionEscalation[]>;
/**
 * Generates an array of permissions being escalated between two computed permission states for a target company.
 * @param	userCompanyId								Unique identifier of the {@link Company} to which the User belongs.
 * @param	before						Initial list of computed permissions for a company (like returned by {@link authorizer.compute}).
 * @param	after						Proposed list of computed permissions for a company (like returned by {@link authorizer.compute}).
 * @param	targetCompanyLabels					List of codified {@link LabelStyle} names available in the Company.  If not specified, complex permissions will not be evaluated correctly.
 */
export declare function findEscalations(userCompanyId: ulong, before: Permission[], after: Permission[], targetCompanyLabels: codified[]): PermissionEscalation[];
/**
 * Generates a list of labels that create an escalated permission state after the proposed modification.
 * @param	userCompanyId							Unique identifier of the Company to which the User belongs.
 * @param	targetCompanyPermissions	List of computed permissions for a company (like returned by {@link authorizer.compute}).
 * @param	targetTypes				List of {@link PermissionType}s to check.
 * @param	targetCompanyLabels				List of codified {@link LabelStyle} names available in the {@link Company}.
 * @param	targetBeforeLabels				The labels appled to the ILabelled object before the proposed change.
 * @param	targetAfterLabels				The labels appled to the ILabelled object after the proposed change.
 */
export declare function findAllLabelEscalations(userCompanyId: ulong, targetCompanyPermissions: Permission[], targetTypes: PermissionType[], targetCompanyLabels: codified[], targetBeforeLabels: codified[], targetAfterLabels: codified[]): PermissionEscalation[];
/**
 * Generates a list of labels that create an escalated permission state after the proposed modification to an labelled object.
 * @param	userCompanyId							Unique identifier of the Company to which the User belongs.
 * @param	targetCompanyPermissions	List of computed permissions for a single company (like returned by {@link authorizer.compute}).
 * @param	targetType						The specific {@link PermissionType} to check.
 * @param	targetCompanyLabels				List of codified {@link LabelStyle} names available in the {@link Company}.
 * @param	targetBeforeLabels				The labels appled to the ILabelled object before the proposed change.
 * @param	targetAfterLabels				The labels appled to the ILabelled object after the proposed change.
 */
export declare function findLabelEscalation(userCompanyId: ulong, targetCompanyPermissions: Permission[], targetType: PermissionType, targetCompanyLabels: codified[], targetBeforeLabels?: codified[], targetAfterLabels?: codified[]): PermissionEscalation | null;
//# sourceMappingURL=Authorizer.d.ts.map