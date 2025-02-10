import { BaseComponent } from "../API/BaseComponent";
import { ID, IS_AN, MAP_TO_OBJECT, OBJECT_TO_MAP } from "../API/Functions";
import { IAmCompany } from "../API/Interfaces/IAmCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { codified, ulong } from "../API/Types";


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
	 * The list of Contacts from this and other companies broken down by contact role.
	 * {@link Contact.id}
	 */
	employees: Map<codified, ulong[]> = new Map;

	constructor(json: any = null) {
		super();
		if (json) this.fromJSON(json);
	}

	// Iserializable
	/**
	 * 
	 * @returns 
	 */
	toJSON() {
		return {
			"id": this.id,
			"parent": this.parentId,
			"v": this.v.slice(),
			"directory": MAP_TO_OBJECT(this.employees),
		};
	}
	/**
	 * 
	 * @param json 
	 */
	fromJSON(json: any): void {
		if (!IS_AN(this.id)) this.id = ID(json["id"]);
		if (!IS_AN(this.parentId)) this.parentId = ID(json["parent"]);
		if (this.updateVersions(json["v"])[0]) {
			this.employees = OBJECT_TO_MAP(json["directory"] || {});
		}
	}
	
	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey(): string { return this.id.toString(); }
}