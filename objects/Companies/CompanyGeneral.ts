import { COMPARE_VERSIONS, Component } from "../API/Component";
import { ID, IS_AN } from "../API/Functions";
import { IAmCompany } from "../API/Interfaces/IAmCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { INamed } from "../API/Interfaces/INamed";
import { ulong } from "../API/Types";


/**
 * General details about a company.
 */
export class CompanyGeneral
	extends Component
	implements IIdUlong, INamed, IAmCompany {
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
	 * The organizational name.
	 *  <override max-length="100" />
	 */
	name: string;
	/**
	 * Notes.
	 */
	notes: string;
	/**
	 * Name/value collections of custom fields used to refer to external systems.
	 *  <override max-count="10">
	 *  <keys max-length="20" />
	 *  <values max-length="100" />
	 *  </override>
	 */
	references: Map<string, string> = new Map;

	toJSON() {
		throw new Error("Method not implemented.");
	}
	fromJSON(json: any): void {
		if (!IS_AN(this.id)) this.id = ID(json["id"]);
		if (!IS_AN(this.parentId)) this.id = ID(json["parent"]);
		var keepers = COMPARE_VERSIONS(this.v, json["v"]);
		if (keepers[0]) {
			this.name = json["name"] || "";
			this.notes = json["notes"] || "";
			this.references.clear();
			for (let key of json["references"] || {}) {
				this.references.set(key, json["references"][key]);
			}
		}
	}
	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey(): string { return this.id.toString(); }
}