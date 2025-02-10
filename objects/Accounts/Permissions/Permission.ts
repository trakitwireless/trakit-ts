import { codified, ulong } from '../../API/Types';
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
	set type(value: string) {
		const kind = (PermissionType as any)[value];
		if (!kind) throw new Error("Unknown PermissionType");
		this.kind = kind;
	 }
		
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
	labels: codified[];

	constructor(
		company: ulong,
		kind: PermissionType,
		level: PermissionLevel = PermissionLevel.read,
		method: PermissionMethod = PermissionMethod.grant,
		labels?: codified[]
	) {
		this.company = company;
		this.kind = PermissionType[kind];
		this.level = PermissionLevel[level];
		this.method = PermissionMethod[method];
		this.labels = labels || [];
	}
}

export function ARRAY_TO_PERMISSIONS(obj: any) {
	return new Permission(
		obj["company"],
		obj["kind"] || obj["type"],
		obj["level"],
		obj["method"],
		obj["labels"]
	);
}