import { BaseComponent } from "../API/BaseComponent";
import { ID, IS_AN, MAP_TO_OBJECT_VALUE_JSON, OBJECT_TO_MAP_BY_PREDICATE } from "../API/Functions";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { INamed } from "../API/Interfaces/INamed";
import { byte, codified, colour, ulong } from "../API/Types";
import { Company } from "../Companies/Company";
import { BEHAVIOUR_SCRIPTS, COMPANIES } from "../Storage";
import { BehaviourParameter } from "./BehaviourParameter";
import { ISerializable } from "../API/Interfaces/ISerializable";
import { BehaviourParameterType } from "./BehaviourParameterType";
import { IGlobal } from "../API/Interfaces/IGlobal";
import { IVisual } from "../API/Interfaces/IVisual";

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
	 *  <override max-length="100" />
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
	 *  <override max-length="8060" />
	 */
	source: string = "";
	/**
	 * A list of targeting expressions.  These expressions are defaults for derived Behaviours.
	 *  <override type="System.String" format="expression" />
	 */
	filters: string = "";
	/**
	 * Listed parameters for the Behaviour function.
	 */
	parameters: Map<string, BehaviourParameter> = new Map;
	/**
	 * The background colour given to this script for easy visual identification.
	 *  <override max-length="22" format="colour" />
	 */
	fill: colour = "";
	/**
	 * The text/graphic colour given to this script for easy visual identification.
	 *  <override max-length="22" format="colour" />
	 */
	stroke: colour = "";
	/**
	 * The codified graphic name given to this script for easy visual identification.
	 *  <override max-length="22" format="codified" />
	 */
	graphic: codified = "";

	override toJSON() {
		return {
			"id": this.id || null,
			"v": this.v,
			"company": this.companyId || null,
			"name": this.name || "",
			"notes": this.notes || "",
			"global": !!this.global,
			"source": this.source || "",
			"filters": this.filters || "",
			"parameters": MAP_TO_OBJECT_VALUE_JSON(this.parameters),
			"fill": this.fill || "",
			"stroke": this.stroke || "",
			"graphic": this.graphic || "",
		};
	}
	override fromJSON(json: any, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"]) || !!(force && json);
		if (update) {
			if (!IS_AN(this.id)) this.id = ID(json["id"]);
			this.companyId = ID(json["company"]);
			this.name = json["name"] || "";
			this.notes = json["notes"] || "";
			this.global = !!json["global"];
			this.source = json["source"] || "";
			this.filters = json["filters"] || "";
			this.parameters = OBJECT_TO_MAP_BY_PREDICATE(json["parameters"] || {}, (k, v) => [k, BehaviourParameter.fromJSON(v)]);
			this.fill = json["fill"] || "";
			this.stroke = json["stroke"] || "";
			this.graphic = json["graphic"] || "";
		}
		return update;
	}

	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey(): string { return this.id.toString(); }
}