import { BaseComponent } from "../../API/BaseComponent";
import { ID, IS_AN, MAP_TO_OBJECT, OBJECT_TO_MAP } from "../../API/Functions";
import { IBelongCompany } from "../../API/Interfaces/IBelongCompany";
import { IIdUlong } from "../../API/Interfaces/IIdUlong";
import { INamed } from "../../API/Interfaces/INamed";
import { expression, ulong } from "../../API/Types";
import { Company } from "../../Companies/Company";
import { COMPANIES, PROVIDER_SCRIPTS } from "../../Storage";
import { ProviderScript } from "./ProviderScript";

/**
 * The configured script loaded onto the provider over-the-air to control it's reporting schedule and behaviour.
 */
export class ProviderConfig
	extends BaseComponent
	implements IIdUlong, INamed, IBelongCompany {
	/**
	 * Unique identifier of this configuration.
	 */
	id: ulong = NaN;
	/**
	 * The company to which this configuration belongs.
	 * {@link Company.id}
	 */
	companyId: ulong = NaN;
	/**
	 * The company to which this configuration belongs.
	 * {@link Company.id}
	 */
	get company(): Company { return COMPANIES.get(this.companyId) as Company; }
	/**
	 * The script which this configuration implements.
	 * {@link ProviderScript.id}
	 */
	scriptId: ulong = NaN;
	/**
	 * The script which this configuration implements.
	 * {@link ProviderScript.id}
	 */
	get script(): ProviderScript { return PROVIDER_SCRIPTS.get(this.scriptId) as ProviderScript; }
	set script(value: ProviderScript) { this.scriptId = value?.id ?? NaN; }
	/**
	 * The nickname given to this configuration
	 *  <override max-length="100" />
	 */
	name: string = "";
	/**
	 * Simple details about how the providers are expected to behave.
	 */
	notes: string = "";
	/**
	 * The list of defined variable name/value pairs that the script requires.
	 */
	parameters: Map<string, string> = new Map;
	/**
	 * A search pattern used to filter which Places' geometry are used as geofences.
	 * Use null to disable.
	 * Use "*" to match all the Places the Provider's Asset can match.
	 * Or use "#123456" or "label:term" like other Place search patterns.
	 *  <override type="System.String" format="expression" />
	 */
	geofences: expression = "";

	toJSON() {
		return {
			"id": this.id || null,
			"v": this.v,
			"company": this.companyId,
			"script": this.scriptId,
			"name": this.name || "",
			"notes": this.notes || "",
			"parameters": MAP_TO_OBJECT(this.parameters),
			"geofences": this.geofences || "",
		};
	}
	fromJSON(json: any, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"]) || !!(force && json);
		if (update) {
			if (!IS_AN(this.id)) this.id = ID(json["id"]);
			this.companyId = ID(json["company"]);
			this.scriptId = ID(json["script"]);
			this.name = json["name"] || "";
			this.notes = json["notes"] || "";
			this.parameters = OBJECT_TO_MAP(json["parameters"] || {});
			this.geofences = json["geofences"] || "";
		}
		return update;
	}

	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey(): string { return this.id.toString(); }
}