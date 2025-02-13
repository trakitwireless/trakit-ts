import { codified, ulong } from '../../API/Types';
import { PermissionType } from './PermissionType';
import { PermissionLevel } from './PermissionLevel';
import { PermissionMethod } from './PermissionMethod';
import { ISerializable } from '../../API/Interfaces/ISerializable';
import { IBelongCompany } from '../../API/Interfaces/IBelongCompany';
import { Company } from '../../Companies/Company';
import { COMPANIES } from '../../Storage';
import { ID, IS_NUMBER } from '../../API/Functions';

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
	static fromJSON(json: any) {
		return new Permission(
			ID(json["company"]),
			PermissionType[json["kind"] as PermissionType],
			PermissionLevel[json["level"] as PermissionLevel],
			PermissionMethod[json["method"] as PermissionMethod],
			json["labels"] || []
		);
	}
	/**
	 * The {@link Company} that this permission targets.
	 * {@link Company.id}
	 */
	companyId: ulong = NaN;
	/**
	 * The company to which this contact belongs
	 */
	get company(): Company { return COMPANIES.get(this.companyId) as Company; }
	/**
	 * The type of permission.
	 */
	kind: PermissionType = PermissionType.companyGeneral;
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
	level: PermissionLevel = PermissionLevel.read;
	/**
	 * The way the access is used.
	 */
	method: PermissionMethod = PermissionMethod.grant;
	/**
	 * Codified names of {@link LabelStyle}s.  If list is empty, this permission applies for all labels.
	 */
	labels: codified[] = [];

	constructor(
		company: ulong,
		kind: PermissionType,
		level: PermissionLevel = PermissionLevel.read,
		method: PermissionMethod = PermissionMethod.grant,
		labels?: codified[]
	) {
		this.companyId = company;
		this.kind = PermissionType[kind as PermissionType] || PermissionType.companyGeneral;
		this.level = PermissionLevel[level];
		this.method = PermissionMethod[method];
		this.labels = labels || [];
	}

	toJSON() {
		return {
			"company": this.companyId,
			"kind": this.kind,
			"level": this.level,
			"method": this.method,
			"labels": [...this.labels],
		};
	}
}