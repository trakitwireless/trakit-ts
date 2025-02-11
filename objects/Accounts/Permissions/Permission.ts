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

	constructor(json: any)
	constructor(
		company?: ulong | any,
		kind?: PermissionType,
		level: PermissionLevel = PermissionLevel.read,
		method: PermissionMethod = PermissionMethod.grant,
		labels?: codified[]
	) {
		if (IS_NUMBER(company)) {
			this.companyId = company;
			this.kind = PermissionType[kind as PermissionType] || PermissionType.companyGeneral;
			this.level = PermissionLevel[level];
			this.method = PermissionMethod[method];
			this.labels = labels || [];
		} else if (company) {
			this.companyId = ID(company["company"]);
			this.kind = PermissionType[company["kind"] as PermissionType];
			this.level = PermissionLevel[company["level"] as PermissionLevel];
			this.method = PermissionMethod[company["method"] as PermissionMethod];
			this.labels = company["labels"] || [];
		}
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

/**
 * 
 * @param obj 
 * @returns 
 */
export function ARRAY_TO_PERMISSIONS(obj: any) {
	return new Permission(obj);
}