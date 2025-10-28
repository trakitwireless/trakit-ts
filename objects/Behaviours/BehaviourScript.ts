import { BaseComponent } from "../API/BaseComponent";
import { ID, IS_AN, JSON_TO_MAP_BY_PREDICATE, MAP_TO_JSON } from "../API/Functions";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IGlobal } from "../API/Interfaces/IGlobal";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { INamed } from "../API/Interfaces/INamed";
import { IVisual } from "../API/Interfaces/IVisual";
import { SearchPattern } from "../API/SearchPattern";
import { JsonObject, codified, colour, int, ulong } from "../API/Types";
import { Company } from "../Companies/Company";
import { COMPANIES } from "../storage";
import { BehaviourParameter } from "./BehaviourParameter";

/**
 * Business logic run by the system to react to GPS events and device information.
 */
export class BehaviourScript
	extends BaseComponent
	implements IIdUlong, INamed, IBelongCompany, IGlobal, IVisual {
	/**
	 * Unique identifier of this script.
	 */
	id: ulong = NaN;
	/**
	 * The company to which this script belongs.
	 * {@link Company.id}
	 */
	companyId: ulong = NaN;
	/**
	 * The company to which this script belongs.
	 * {@link Company.id}
	 */
	get company(): Company { return COMPANIES.get(this.companyId) as Company; }
	/**
	 * The nickname given to this script.
	 */
	name: string = "";
	/**
	 * Usage notes and instructions for users on how best to setup this script.
	 */
	notes: string = "";
	/**
	 * Indicates whether this script is available to child companies.
	 */
	global: boolean = false;
	/**
	 * The source code.
	 */
	source: string = "";
	/**
	 * A list of targeting expressions.  These expressions are defaults for derived Behaviours.
	 */
	filters: SearchPattern[] | null = null;
	/**
	 * Listed parameters for the Behaviour function.
	 */
	parameters: Map<string, BehaviourParameter> = new Map;
	/**
	 * The background colour given to this script for easy visual identification.
	 */
	fill: colour = "";
	/**
	 * The text/graphic colour given to this script for easy visual identification.
	 */
	stroke: colour = "";
	/**
	 * The codified graphic name given to this script for easy visual identification.
	 */
	graphic: codified = "";

	override toJSON() {
		return {
			"id": this.id || null,
			"v": [...this.v],
			"company": this.companyId || null,
			"name": this.name || "",
			"notes": this.notes || "",
			"global": !!this.global,
			"source": this.source || "",
			"filters": SearchPattern.stringify(this.filters),
			"parameters": MAP_TO_JSON(this.parameters),
			"fill": this.fill || "",
			"stroke": this.stroke || "",
			"graphic": this.graphic || "",
		};
	}
	override fromJSON(json: JsonObject, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"] as int[]) || !!(force && json);
		if (update) {
			if (!IS_AN(this.id)) this.id = ID(json["id"]);
			this.companyId = ID(json["company"]);
			this.name = json["name"] as string || "";
			this.notes = json["notes"] as string || "";
			this.global = !!json["global"];
			this.source = json["source"] as string || "";
			this.filters = SearchPattern.parse(json["filters"] as string);
			this.parameters = JSON_TO_MAP_BY_PREDICATE(json["parameters"] as object || {}, (k, v) => [k, BehaviourParameter.fromJSON(v)]);
			this.fill = json["fill"] as string || "";
			this.stroke = json["stroke"] as string || "";
			this.graphic = json["graphic"] as string || "";
		}
		return update;
	}

	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey() { return this.id; }
}