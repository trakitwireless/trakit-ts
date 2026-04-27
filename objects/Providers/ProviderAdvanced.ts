import { BaseComponent } from "../API/BaseComponent";
import { ID, JSON_NUMBER, JSON_TO_MAP, JSON_TO_MAP_PREDICATE, MAP_TO_JSON, MAP_TO_JSON_PREDICATE } from "../API/Functions";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { JsonObject, int, ipv4, nothing, ulong } from "../API/Types";
import { Company } from "../Companies/Company";
import { COMPANIES } from "../storage";
import { ProviderData } from "./ProviderData";

/**
 * Device/hardware information reported from the field.
 */
export class ProviderAdvanced
	extends BaseComponent
	implements IBelongCompany {
	/**
	 * Unique identifier of this device.
	 * {@link Provider.id}
	 */
	id: string = "";
	/**
	 * The company to which this device belongs.
	 * {@link Company.id}
	 */
	companyId: ulong = NaN;
	/**
	 * The {@link Company} to which this device belongs.
	 */
	get company(): Company { return COMPANIES.get(this.companyId) as Company; }
	set company(value: Company) { this.companyId = value?.id ?? NaN; }
	/**
	 * The last IP address of the device.
	 */
	lastIP: ipv4 = "";
	/**
	 * Often changing values like latitude, longitude, speed, wiring state, VBus information, etc...
	 */
	attributes: Map<string, Map<string, ProviderData>> = new Map;
	/**
	 * Store-and-forward information like last sequence number of SnF window
	 */
	snf: Map<string, string> = new Map;

	constructor(json?: JsonObject | nothing) {
		super();
		if (json) this.fromJSON(json);
	}
	override toJSON() {
		return {
			"id": this.id || null,
			"v": [...this.v],
			"company": JSON_NUMBER(this.companyId),
			"lastIP": this.lastIP || "",
			"attributes": MAP_TO_JSON_PREDICATE(
				this.attributes,
				(group, data) => [group, MAP_TO_JSON(data)]
			),
			"snf": MAP_TO_JSON(this.snf),
		};
	}
	override fromJSON(json: JsonObject, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"] as int[]) || !!(force && json);
		if (update) {
			this.id = json["id"] as string || "";
			this.companyId = ID(json["company"]);
			this.lastIP = json["lastIP"] as ipv4 || "";
			this.attributes = JSON_TO_MAP_PREDICATE(
				json["attributes"] as object || {},
				(group, data) => [
					group,
					JSON_TO_MAP_PREDICATE(
						data || {},
						(n, d) => [
							n,
							ProviderData.fromJSON(d)
						]
					)
				]
			);
			this.snf = JSON_TO_MAP(json["snf"] as object || {});
		}
		return update;
	}

	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey() { return this.id; }
}