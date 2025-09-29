import { codified, JsonObject, nothing, ulong } from '../../API/Types';
import { PermissionType } from './PermissionType';
import { PermissionLevel } from './PermissionLevel';
import { PermissionMethod } from './PermissionMethod';
import { ISerializable } from '../../API/Interfaces/ISerializable';
import { IBelongCompany } from '../../API/Interfaces/IBelongCompany';
import { Company } from '../../Companies/Company';
import { COMPANIES } from '../../storage';
import { ID, IS_NUMBER, JSON_NUMBER } from '../../API/Functions';

/**
 * A defined permission for {@link User}s, {@link UserGroup}s, and {@link Machine}s.
 */
export class Permission
	implements IBelongCompany, ISerializable {
	/**
	 * 
	 * @param json 
	 * @returns 
	 */
	static fromJSON(json: JsonObject) {
		return new Permission(
			json["company"] as ulong,
			json["kind"] as PermissionType,
			json["level"] as PermissionLevel,
			json["method"] as PermissionMethod,
			json["labels"] as string[],
		);
	}
	/**
	 * The {@link Company} that this permission targets.
	 * {@link Company.id}
	 */
	companyId: ulong;
	/**
	 * The company to which this contact belongs
	 */
	get company(): Company { return COMPANIES.get(this.companyId) as Company; }
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
		company?: ulong | nothing,
		kind?: PermissionType | nothing,
		level: PermissionLevel | nothing = PermissionLevel.read,
		method: PermissionMethod | nothing = PermissionMethod.grant,
		labels?: codified[] | nothing,
	) {
		this.companyId = ID(company);
		this.kind = PermissionType[kind as PermissionType];
		this.level = PermissionLevel[level as PermissionLevel] || PermissionLevel.read;
		this.method = PermissionMethod[method as PermissionMethod] || PermissionMethod.grant;
		this.labels = labels || [];
	}

	toJSON() {
		return {
			"company": JSON_NUMBER(this.companyId),
			"kind": PermissionType[this.kind] || null,
			"level": PermissionLevel[this.level] || null,
			"method": PermissionMethod[this.method] || null,
			"labels": [...this.labels],
		};
	}
}