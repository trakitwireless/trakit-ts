import { BaseComponent } from "../API/BaseComponent";
import { CODIFY } from "../API/Codifier";
import { ID, IS_AN, JSON_NUMBER, JSON_TO_MAP_PREDICATE, MAP_TO_JSON } from "../API/Functions";
import { IAmCompany } from "../API/Interfaces/IAmCompany";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { JsonObject, codified, int, ulong } from "../API/Types";
import { COMPANIES } from "../storage";
import { Company } from "./Company";
import { LabelStyle } from "./LabelStyle";

/**
 * The colours and styles used by this company to tag and label Assets, Places, and other things.
 */
export class CompanyStyle
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
	 * The unique identifier of this {@link Company}'s parent organization.
	 */
	get parent(): Company { return COMPANIES.get(this.parentId) as Company; }
	/**
	 * The styles for labels added to Assets, Places, and other things.
	 */
	labels: Map<codified, LabelStyle> = new Map;
	/**
	 * The styles for status tags added to Assets.
	 */
	tags: Map<codified, LabelStyle> = new Map;

	toJSON() {
		return {
			"id": JSON_NUMBER(this.id),
			"v": [...this.v],
			"parent": this.parentId,
			"labels": MAP_TO_JSON(this.labels),
			"tags": MAP_TO_JSON(this.tags),
		};
	}
	override fromJSON(json: JsonObject, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"] as int[]) || !!(force && json);
		if (update) {
			if (!IS_AN(this.id)) this.id = ID(json["id"]);
			this.parentId = ID(json["parent"]);
			this.labels = JSON_TO_MAP_PREDICATE(json["labels"] as object, OBJECT_TO_LABELSTYLE);
			this.tags = JSON_TO_MAP_PREDICATE(json["tags"] as object, OBJECT_TO_LABELSTYLE);
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

/**
 * 
 * @param key 
 * @param value 
 * @returns 
 */
function OBJECT_TO_LABELSTYLE(key: string, value: any): [codified, LabelStyle] {
	return [CODIFY(key), new LabelStyle(value)];
}