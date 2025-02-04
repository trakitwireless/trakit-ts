import { CODIFY } from "../API/Codifier";
import { COMPARE_VERSIONS, Component } from "../API/Component";
import { ID, IS_AN } from "../API/Functions";
import { IAmCompany } from "../API/Interfaces/IAmCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { MERGE } from "../API/Objects";
import { codified, ulong } from "../API/Types";


/**
 * The list of Contacts from this and other companies broken down by contact role.
 */
export class CompanyDirectory
	extends Component
	implements IIdUlong, IAmCompany {
	/**
	 * Unique identifier of the Company.
	 * {@link Company.id}
	 */
	id: ulong;
	/**
	 * The unique identifier of this company's parent organization.
	 * {@link Company.id}
	 */
	parentId: ulong;
	/**
	 * The list of Contacts from this and other companies broken down by contact role.
	 * {@link Contact.id}
	 */
	employees: Map<codified, ulong[]>;

	// Iserializable
	/**
	 * 
	 * @returns 
	 */
	toJSON() {
		return {
			"id": this.id,
			"parent": this.parentId,
			"v": this._version.slice(),
			"directory": MERGE({}, this.employees, true) as { [key: string]: ulong[] },
		};
	}
	/**
	 * 
	 * @param json 
	 */
	fromJSON(json: any): void {
		if (!IS_AN(this.id)) this.id = ID(json["id"]);
		if (!IS_AN(this.parentId)) this.parentId = ID(json["parent"]);
		var keepers = COMPARE_VERSIONS(this.v, json["v"]);
		if (keepers[0]) {
			this.employees.clear();
			for (let key of json["directory"] || {}) {
				this.employees.set(CODIFY(key), (json["directory"][key] as ulong[]));
			}
		}
	}
	
	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey(): string { return this.id.toString(); }
}