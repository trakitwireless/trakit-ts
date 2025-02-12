import { ARRAY_TO_JSON } from "../API/Arrays";
import { BaseComponent } from "../API/BaseComponent";
import { CODIFY } from "../API/Codifier";
import { ID, IS_AN, MAP_TO_OBJECT_VALUE_JSON, OBJECT_TO_MAP_BY_PREDICATE, OBJECT_TO_MAP_KEY_CODIFIED } from "../API/Functions";
import { IAmCompany } from "../API/Interfaces/IAmCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { codified, ulong } from "../API/Types";
import { COMPANIES } from "../Storage";
import { Company } from "./Company";
import { LabelStyle } from "./LabelStyle";

/**
 * The colours and styles used by this company to tag and label Assets, Places, and other things.
 */
export class CompanyStyles
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
	 * The styles for labels added to Assets, Places, and other things.
	 */
	labels: Map<codified, LabelStyle> = new Map;
	/**
	 * The styles for status tags added to Assets.
	 */
	tags: Map<codified, LabelStyle> = new Map;

	toJSON() {
		return {
			"id": IS_AN(this.id) ? this.id : null,
			"v": this.v,
			"parent": this.parentId,
			"labels": MAP_TO_OBJECT_VALUE_JSON(this.labels),
			"tags": MAP_TO_OBJECT_VALUE_JSON(this.tags),
		};
	}
	override fromJSON(json: any, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"]) || !!(force && json);
		if (update) {
			if (!IS_AN(this.id)) this.id = ID(json["id"]);
			this.parentId = ID(json["parent"]);
			this.labels = OBJECT_TO_MAP_BY_PREDICATE(json["labels"], OBJECT_TO_LABELSTYLE);
			this.tags = OBJECT_TO_MAP_BY_PREDICATE(json["tags"], OBJECT_TO_LABELSTYLE);
		}
		return update;
	}
	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey(): string { return this.id.toString(); }
}

/**
 * 
 * @param key 
 * @param value 
 * @returns 
 */
function OBJECT_TO_LABELSTYLE(key: string, value: any): [string, LabelStyle] {
	return [CODIFY(key), new LabelStyle(value)];
}