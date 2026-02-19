import { BaseComponent } from "../API/BaseComponent";
import { ID, IS_AN, JSON_NUMBER, JSON_TO_MAP, MAP_TO_JSON } from "../API/Functions";
import { IAmCompany } from "../API/Interfaces/IAmCompany";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { INamed } from "../API/Interfaces/INamed";
import { JsonObject, int, nothing, ulong } from "../API/Types";
import { COMPANIES } from "../storage";
import { Company } from "./Company";

/**
 * General details about a company.
 */
export class CompanyGeneral
	extends BaseComponent
	implements IIdUlong, INamed, IAmCompany, IBelongCompany {
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
	 * The unique identifier of this {@link Company}'s parent organization.
	 */
	get parent(): Company { return COMPANIES.get(this.parentId) as Company; }
	/**
	 * The organizational name.
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

	constructor(json?: JsonObject | nothing) {
		super();
		if (json) this.fromJSON(json);
	}
	override toJSON() {
		return {
			"id": JSON_NUMBER(this.id),
			"v": [...this.v],
			"parent": this.parentId,
			"name": this.name,
			"notes": this.notes,
			"references": MAP_TO_JSON(this.references),
		};
	}
	override fromJSON(json: JsonObject, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"] as int[]) || !!(force && json);
		if (update) {
			if (!IS_AN(this.id)) this.id = ID(json["id"]);
			this.parentId = ID(json["parent"]);
			this.name = json["name"] as string || "";
			this.notes = json["notes"] as string || "";
			this.references = JSON_TO_MAP(json["references"] as object || {});
		}
		return update;
	}

	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey() { return this.id; }
	
	// IBelongCompany
	set companyId(value: number) { this.parentId = value; }
	get companyId(): number { return this.parentId; }
	set company(value: Company) { this.parentId = value?.id ?? NaN; }
	get company(): Company { return this.parent; }
}