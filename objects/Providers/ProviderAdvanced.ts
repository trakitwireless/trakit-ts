import { BaseComponent } from "../API/BaseComponent";
import { ID, MAP_TO_OBJECT, MAP_TO_OBJECT_PREDICATE, MAP_TO_OBJECT_VALUE_JSON, OBJECT_TO_MAP, OBJECT_TO_MAP_BY_PREDICATE } from "../API/Functions";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { ipv4, ulong } from "../API/Types";
import { Company } from "../Companies/Company";
import { COMPANIES } from "../Storage";
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
	 * The company to which this device belongs.
	 * {@link Company.id}
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

	override toJSON() {
		return {
			"id": this.id || null,
			"v": this.v,
			"company": this.companyId,
			"lastIP": this.lastIP || "",
			"attributes": MAP_TO_OBJECT_PREDICATE(
				this.attributes,
				(group, data) => [group, MAP_TO_OBJECT_VALUE_JSON(data)]
			),
			"snf": MAP_TO_OBJECT(this.snf),
		};
	}
	override fromJSON(json: any, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"]) || !!(force && json);
		if (update) {
			this.id = json["id"] || "";
			this.companyId = ID(json["company"]);
			this.lastIP = json["lastIP"] || "";
			this.attributes = OBJECT_TO_MAP_BY_PREDICATE(
				json["attributes"] || {},
				(group, data) => [
					group,
					OBJECT_TO_MAP_BY_PREDICATE(
						data || {},
						(n, d) => [
							n,
							ProviderData.fromJSON(d)
						]
					)
				]
			);
			this.snf = OBJECT_TO_MAP(json["snf"] || {});
		}
		return update;
	}

	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey(): string { return this.id; }
}