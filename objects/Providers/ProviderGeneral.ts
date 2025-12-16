import { BaseComponent } from "../API/BaseComponent";
import { DATE, ID, JSON_DATE, JSON_NUMBER, JSON_TO_MAP, MAP_TO_JSON, PHONE_PARSE } from "../API/Functions";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { INamed } from "../API/Interfaces/INamed";
import { ISuspendable } from "../API/Interfaces/ISuspendable";
import { JsonObject, datetime, int, phone, ulong } from "../API/Types";
import { Asset } from "../Assets/Asset";
import { Company } from "../Companies/Company";
import { ASSETS, COMPANIES, PROVIDER_CONFIGS, PROVIDER_CONFIGURATIONS } from "../storage";
import { ProviderConfig } from "./Config/ProviderConfig";
import { ProviderConfiguration } from "./Configuration/ProviderConfiguration";
import { ProviderType } from "./ProviderType";

/**
 * Device/hardware information and configuration.
 */
export class ProviderGeneral
	extends BaseComponent
	implements INamed, IBelongCompany, ISuspendable {
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
	 * A nickname given to the device/hardware.
	 */
	name: string = "";
	/**
	 * Notes!
	 */
	notes: string = "";
	/**
	 * The kind of communication protocol this device uses.
	 */
	kind: ProviderType = ProviderType.unknown;
	/**
	 * The asset for which this device provides field data.
	 * {@link Asset.id}
	 */
	assetId: ulong = NaN;
	/**
	 * The {@link Asset} for which this device provides field data.
	 */
	get asset(): Asset { return ASSETS.get(this.assetId) as Asset; }
	set asset(value: Asset) { this.assetId = value?.id ?? NaN; }
	/**
	 * The provider's current (or pending) configuration profile.
	 * {@link ProviderConfig.id}
	 * {@link ProviderConfiguration.id}
	 */
	configurationId: ulong = NaN;
	/**
	 * The provider's current (or pending) {@link ProviderConfig} (or {@link ProviderConfiguration}).
	 */
	get configuration(): ProviderConfig | ProviderConfiguration {
		return PROVIDER_CONFIGS.get(this.configurationId) as ProviderConfig
			?? PROVIDER_CONFIGURATIONS.get(this.configurationId) as ProviderConfiguration;
	}
	set configuration(value: ProviderConfig | ProviderConfiguration) { this.configurationId = value?.id || NaN;	}

	/**
	 * The password programmed on the device used to ensure the system is the only client authorized to make changes.
	 */
	password: string = "";
	/**
	 * The firmware/application version number.
	 */
	firmware: string = "";
	/**
	 * The phone number of this device.
	 */
	phoneNumber: phone = NaN;
	/**
	 * A list of read-only values about the device like IMEI, ESN, firmware version, hardware revision, etc...
	 */
	information: Map<string, string> = new Map;
	/**
	 * ICCID of the SIM card installed in this provider
	 */
	sim: string = "";

	override toJSON() {
		return {
			"id": this.id || null,
			"v": [...this.v],
			"company": JSON_NUMBER(this.companyId),
			"name": this.name || "",
			"notes": this.notes || "",
			"kind": ProviderType[this.kind] || ProviderType.unknown,
			"configuration": JSON_NUMBER(this.configurationId),
			...(
				this.suspended
					? {
						"suspended": true,
						"since": JSON_DATE(this.since),
					}
					: {
						"asset": JSON_NUMBER(this.assetId),
						"password": this.password || "",
						"firmware": this.firmware || "",
						"phoneNumber": JSON_NUMBER(this.phoneNumber),
						"information": MAP_TO_JSON(this.information),
						"sim": this.sim || "",
					}
			)
		};
	}
	override fromJSON(json: JsonObject, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"] as int[]) || !!(force && json);
		if (update) {
			if (!this.id) this.id = json["id"] as string || "";
			this.companyId = ID(json["company"]);
			this.name = json["name"] as string || "";
			this.notes = json["notes"] as string || "";
			this.kind = ProviderType[json["kind"] as ProviderType] || ProviderType.unknown;
			this.assetId = ID(json["asset"]);
			this.configurationId = ID(json["configuration"]);
			this.password = json["password"] as string || "";
			this.firmware = json["firmware"] as string || "";
			this.phoneNumber = PHONE_PARSE(json["phoneNumber"] as phone);
			this.information = JSON_TO_MAP(json["information"] as object || {});
			this.sim = json["sim"] as string || "";
			this.suspended = !!json["suspended"];
			this.since = DATE(json["since"] as datetime);
		}
		return update;
	}

	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey() { return this.id; }

	// ISuspendable
	/**
	 * Indicates whether this object is suspended from event processing.
	 */
	suspended: boolean = false;
	/**
	 * Timestamp from the action that deleted or suspended this object.
	 */
	since: Date = DATE();
}