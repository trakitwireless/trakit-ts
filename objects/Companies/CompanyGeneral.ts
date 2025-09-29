import { IBelongCompany } from "objects/API/Interfaces/IBelongCompany";
import { BaseComponent } from "../API/BaseComponent";
import { ID, IS_AN, JSON_NUMBER, MAP_TO_JSON, JSON_TO_MAP } from "../API/Functions";
import { IAmCompany } from "../API/Interfaces/IAmCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { INamed } from "../API/Interfaces/INamed";
import { ulong, JsonObject } from "../API/Types";
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
	 * The unique identifier of this company's parent organization.
	 * {@link Company.id}
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
		const update = this.updateVersion(json?.["v"]) || !!(force && json);
		if (update) {
			if (!IS_AN(this.id)) this.id = ID(json["id"]);
			this.parentId = ID(json["parent"]);
			this.name = json["name"] || "";
			this.notes = json["notes"] || "";
			this.references = JSON_TO_MAP(json["references"] || {});
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