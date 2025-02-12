import { BaseComponent } from "../API/BaseComponent";
import { ID, IS_AN, MAP_TO_OBJECT_VALUE_JSON, OBJECT_TO_MAP_BY_PREDICATE } from "../API/Functions";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { INamed } from "../API/Interfaces/INamed";
import { byte, ulong } from "../API/Types";
import { Company } from "../Companies/Company";
import { BEHAVIOUR_SCRIPTS, COMPANIES } from "../Storage";
import { BehaviourParameter } from "./BehaviourParameter";
import { BehaviourScript } from "./BehaviourScript";

/**
 * The applied behaviour which includes all parameters and targets specific assets.
*/
export class Behaviour
	extends BaseComponent
	implements IIdUlong, INamed, IBelongCompany {
	/**
	 * Unique identifier of this behaviour.
	 */
	id: ulong = NaN;
	/**
	 * The company to which this behaviour belongs.
	 * {@link Company.id}
	 */
	companyId: ulong = NaN;
	/**
	 * The company to which this behaviour belongs.
	 * {@link Company.id}
	 */
	get company(): Company { return COMPANIES.get(this.companyId) as Company; }
	/**
	 * The script which this behaviour implements.
	 * {@link BehaviourScript.id}
	 */
	scriptId: ulong = NaN;
	/**
	 * The script which this behaviour implements.
	 * {@link BehaviourScript.id}
	 */
	get script(): BehaviourScript { return BEHAVIOUR_SCRIPTS.get(this.scriptId) as BehaviourScript; }
	/**
	 * The name of this behaviour.
	 *  <override max-length="100" />
	 */
	name: string = "";
	/**
	 * Notes.
	 */
	notes: string = "";
	/**
	 * The priority flag allows you to define an execution order for all behaviours for a provider.
	 */
	priority: byte = 255;
	/**
	 * The search pattern used to target the assets which will embed this behaviour in their execution context.
	 *  <override type="System.String" format="expression" />
	 */
	targets: string = "";
	/**
	 * A search pattern used to filter the providers which can implement this behaviour.
	 *  <override type="System.String" format="expression" />
	 */
	filters: string = "";
	/**
	 * The list of defined variable name/value pairs for the script requires.
	 */
	parameters: Map<string, BehaviourParameter> = new Map;

	override toJSON() {
		return {
			"id": this.id || null,
			"v": this.v,
			"company": this.companyId|| null,
			"script": this.scriptId|| null,
			"name": this.name||"",
			"notes": this.notes||"",
			"targets": this.targets||"*",
			"filters": this.filters||"",
			"priority": this.priority||255,
			"parameters": MAP_TO_OBJECT_VALUE_JSON(this.parameters),
		};
	}
	override fromJSON(json: any, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"]) || !!(force && json);
		if (update) {
			if (!IS_AN(this.id)) this.id = ID(json["id"]);
			this.companyId = ID(json["company"]);
			this.scriptId = ID(json["script"]);
			this.name = json["name"] || "";
			this.notes = json["notes"] || "";
			this.priority = ID(json["priority"]);
			this.targets = json["targets"] || "*";
			this.filters = json["filters"] || "";
			this.parameters = OBJECT_TO_MAP_BY_PREDICATE(json["parameters"] || {}, (k, v) => [k, BehaviourParameter.fromJSON(v)]);
		}
		return update;
	}
	
	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey(): string { return this.id.toString(); }
}