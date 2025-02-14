import { BaseComponent } from "../API/BaseComponent";
import { ID, IS_AN, JSON_NUMBER, MAP_TO_OBJECT, OBJECT_TO_MAP } from "../API/Functions";
import { IAmCompany } from "../API/Interfaces/IAmCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { codified, ulong } from "../API/Types";
import { COMPANIES } from "../Storage";
import { Company } from "./Company";

/**
 * The list of Contacts from this and other companies broken down by contact role.
 */
export class CompanyDirectory
	extends BaseComponent
	implements IIdUlong, IAmCompany {
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
			"v": this.v,
			"parent": this.parentId,
			"directory": MAP_TO_OBJECT(this.employees),
		};
	}
	/**
	 * 
	 * @param json 
	 */
	override fromJSON(json: any, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"]) || !!(force && json);
		if (update) {
			if (!IS_AN(this.id)) this.id = ID(json["id"]);
			this.parentId = ID(json["parent"]);
			this.employees = OBJECT_TO_MAP(json["directory"] || {});
		}
		return update;
	}
	
	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey(): string { return this.id.toString(); }
}