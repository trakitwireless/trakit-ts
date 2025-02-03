import { ulong } from '../../API/Types';
import { PermissionType } from './PermissionType';
import { PermissionLevel } from './PermissionLevel';
import { PermissionMethod } from './PermissionMethod';

/**
 * A defined permission for {@link User}s, {@link UserGroup}s, and {@link Machine}s.
 */
export class Permission {
	/**
	 * The {@link Company} that this permission targets.
	 * {@link Company.id}
	 */
	company: ulong;
	/**
	 * The type of permission.
	 */
	kind: PermissionType;
	/**
	 * The kind of permission.
	 * @deprecated Use {@link kind} instead.
	 */
	get type(): string { return this.kind.toString(); }
	set type(value: string) { this.kind = PermissionType[value]; }
		
	/**
	 * The level of access being defined.
	 */
	level: PermissionLevel;
	/**
	 * The way the access is used.
	 */
	method: PermissionMethod;
	/**
	 * Codified names of {@link LabelStyle}s.  If list is empty, this permission applies for all labels.
	 */
	labels: string[];

	constructor(
		company: ulong,
		kind: PermissionType,
		level: PermissionLevel = PermissionLevel.read,
		method: PermissionMethod = PermissionMethod.grant,
		labels?: string[]
	) {
		this.company = company;
		this.kind = kind;
		this.level = level;
		this.method = method;
		this.labels = labels || [];
	}
}