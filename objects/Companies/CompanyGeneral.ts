import { BaseComponent } from "../API/BaseComponent";
import { ID, IS_AN, MAP_TO_OBJECT, OBJECT_TO_MAP } from "../API/Functions";
import { IAmCompany } from "../API/Interfaces/IAmCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { INamed } from "../API/Interfaces/INamed";
import { ulong } from "../API/Types";


/**
 * General details about a company.
 */
export class CompanyGeneral
	extends BaseComponent
	implements IIdUlong, INamed, IAmCompany {
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
	 * The organizational name.
	 *  <override max-length="100" />
	 */
	name: string = "";
	/**
	 * Notes.
	 */
	notes: string = "";
	/**
	 * Name/value collections of custom fields used to refer to external systems.
	 */
	references: Map<string, string> = new Map;

	constructor(json: any = null) {
		super();
		if (json) this.fromJSON(json);
	}

	toJSON() {
		return {
			"id": this.id,
			"parent": this.parentId,
			"name": this.name,
			"notes": this.notes,
			"references": MAP_TO_OBJECT(this.references),
		}
	}
	fromJSON(json: any): void {
		if (!IS_AN(this.id)) this.id = ID(json["id"]);
		if (!IS_AN(this.parentId)) this.id = ID(json["parent"]);
		if (this.updateVersions(json["v"])[0]) {
			this.name = json["name"] || "";
			this.notes = json["notes"] || "";
			this.references = OBJECT_TO_MAP(json["references"] || {});
		}
	}

	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey(): string { return this.id.toString(); }
}