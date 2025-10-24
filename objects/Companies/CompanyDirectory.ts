import { BaseComponent } from "../API/BaseComponent";
import { ID, IS_AN, JSON_NUMBER, JSON_TO_MAP, MAP_TO_JSON } from "../API/Functions";
import { IAmCompany } from "../API/Interfaces/IAmCompany";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { JsonObject, codified, int, ulong } from "../API/Types";
import { COMPANIES } from "../storage";
import { Company } from "./Company";

/**
 * The list of Contacts from this and other companies broken down by contact role.
 */
export class CompanyDirectory
	extends BaseComponent
	implements IIdUlong, IAmCompany, IBelongCompany {
	/**
	 * Unique identifier of the Company.
	 * {@link Company.id}
	 */
	id: ulong = NaN;
	/**
	 * The unique identifier of this company's parent organization.
	 * {@link Company.id}
	 */
	parentId: ulong = NaN;
	/**
	 * The unique identifier of this company's parent organization.
	 * {@link Company.id}
	 */
	get parent(): Company { return COMPANIES.get(this.parentId) as Company; }
	/**
	 * The list of Contacts from this and other companies broken down by contact role.
	 * {@link Contact.id}
	 */
	employees: Map<codified, ulong[]> = new Map;

	/**
	 * 
	 * @returns 
	 */
	toJSON() {
		return {
			"id": JSON_NUMBER(this.id),
			"v": [...this.v],
			"parent": this.parentId,
			"directory": MAP_TO_JSON(this.employees),
		};
	}
	/**
	 * 
	 * @param json 
	 */
	override fromJSON(json: JsonObject, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"] as int[]) || !!(force && json);
		if (update) {
			if (!IS_AN(this.id)) this.id = ID(json["id"]);
			this.parentId = ID(json["parent"]);
			this.employees = JSON_TO_MAP(json["directory"] as object || {});
		}
		return update;
	}
	
	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey(): string { return this.id.toString(); }
	
	// IBelongCompany
	set companyId(value: number) { this.parentId = value; }
	get companyId(): number { return this.parentId; }
	set company(value: Company) { this.parentId = value?.id ?? NaN; }
	get company(): Company { return this.parent; }
}