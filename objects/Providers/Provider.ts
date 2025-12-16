import { BaseComponent } from "../API/BaseComponent";
import { BaseCompound } from "../API/BaseCompound";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { INamed } from "../API/Interfaces/INamed";
import { ISuspendable } from "../API/Interfaces/ISuspendable";
import { JsonObject, int, ipv4, phone, ulong } from "../API/Types";
import { Asset } from "../Assets/Asset";
import { Company } from "../Companies/Company";
import { ProviderConfig } from "./Config/ProviderConfig";
import { ProviderConfiguration } from "./Configuration/ProviderConfiguration";
import { ProviderAdvanced } from "./ProviderAdvanced";
import { ProviderCommand } from "./ProviderCommand";
import { ProviderCommandType } from "./ProviderCommandType";
import { ProviderControl } from "./ProviderControl";
import { ProviderData } from "./ProviderData";
import { ProviderGeneral } from "./ProviderGeneral";
import { ProviderType } from "./ProviderType";

/**
 * A device, modem, or service which provides events from the field.
 */
export class Provider
	extends BaseCompound
	implements INamed, IBelongCompany, ISuspendable {
	/**
	 *  
	 */
	get pieces(): BaseComponent[] {
		return [
			this.#general,
			this.#advanced,
			this.#control,
		];
	}

	/**
	 * Unique identifier of this device.
	 */
	get id(): string {
		return this.#general.id
			?? this.#advanced.id
			?? this.#control.id;
	}
	/**
	 * The company to which this device belongs.
	 */
	get companyId(): ulong {
		return this.#general.companyId
			?? this.#advanced.companyId
			?? this.#control.companyId;
	}
	/**
	 * The company to which this device belongs.
	 */
	get company(): Company {
		return this.#general.company
			?? this.#advanced.company
			?? this.#control.company;
	}
	set company(value: Company) {
		this.general.company = value;
		this.advanced.company = value;
		this.control.company = value;
	}
	/**
	 * The kind of communication protocol this device uses.
	 */
	get kind(): ProviderType { return this.#general.kind; }

	/**
	 *  
	 */
	#general: ProviderGeneral = new ProviderGeneral;
	get general(): ProviderGeneral { return this.#general; }
	/**
	 * This thing's name.
	 */
	get name(): string { return this.#general.name; }
	set name(value: string) { this.#general.name = value; }
	/**
	 * Notes about it.
	 */
	get notes(): string { return this.#general.notes; }
	set notes(value: string) { this.#general.notes = value; }
	/**
	 * The asset for which this device provides field data.
	 * {@link Asset.id}
	 */
	get assetId(): ulong { return this.#general.assetId; }
	set assetId(value: ulong) { this.#general.assetId = value; }
	/**
	 * The {@link Asset} for which this device provides field data.
	 */
	get asset(): Asset { return this.#general.asset; }
	set asset(value: Asset) { this.#general.asset = value; }
	/**
	 * The provider's current (or pending) configuration profile.
	 * {@link ProviderConfig.id}
	 * {@link ProviderConfiguration.id}
	 */
	get configurationId(): ulong { return this.#general.configurationId; }
	set configurationId(value: ulong) { this.#general.configurationId = value; }
	/**
	 * The provider's current (or pending) {@link ProviderConfig} (or {@link ProviderConfiguration}).
	 */
	get configuration(): ProviderConfig | ProviderConfiguration { return this.#general.configuration; }
	set configuration(value: ProviderConfig | ProviderConfiguration) { this.#general.configuration = value; }
	/**
	 * The password programmed on the device used to ensure the system is the only client authorized to make changes.
	 */
	get password(): string { return this.#general.password; }
	set password(value: string) { this.#general.password = value; }
	/**
	 * The firmware/application version number.
	 */
	get firmware(): string { return this.#general.firmware; }
	set firmware(value: string) { this.#general.firmware = value; }
	/**
	 * The phone number of this device.
	 */
	get phoneNumber(): phone { return this.#general.phoneNumber; }
	set phoneNumber(value: phone) { this.#general.phoneNumber = value ?? NaN; }
	/**
	 * A list of read-only values about the device like IMEI, ESN, firmware version, hardware revision, etc...
	 */
	get information(): Map<string, string> { return this.#general.information; }
	set information(value: Map<string, string>) { this.#general.information = value; }
	/**
	 * ICCID of the SIM card installed in this provider
	 */
	get sim(): string { return this.#general.sim; }
	set sim(value: string) { this.#general.sim = value; }

	/**
	 *  
	 */
	#advanced: ProviderAdvanced = new ProviderAdvanced;
	get advanced(): ProviderAdvanced { return this.#advanced; }
	/**
	 * The last IP address of the device.
	 */
	get lastIP(): ipv4 { return this.#advanced.lastIP; }
	set lastIP(value: ipv4) { this.#advanced.lastIP = value; }
	/**
	 * Often changing values like latitude, longitude, speed, wiring state, VBus information, etc...
	 */
	get attributes(): Map<string, Map<string, ProviderData>> { return this.#advanced.attributes; }
	set attributes(value: Map<string, Map<string, ProviderData>>) { this.#advanced.attributes = value; }
	/**
	 * Store-and-forward information like last sequence number of SnF window
	 */
	get snf(): Map<string, string> { return this.#advanced.snf; }
	set snf(value: Map<string, string>) { this.#advanced.snf = value; }

	/**
	 *  
	 */
	#control: ProviderControl = new ProviderControl;
	get control(): ProviderControl { return this.#control; }
	/**
	 * Collection of commands for this provider.
	 */
	get commands(): Map<ProviderCommandType, ProviderCommand> { return this.#control.commands; }
	set commands(value: Map<ProviderCommandType, ProviderCommand>) { this.#control.commands = value; }

	override toJSON() {
		return this.suspended
			? this.#general.toJSON()
			: {
				...this.#general.toJSON(),
				...this.#advanced.toJSON(),
				"control": this.#control.toJSON(),
				"v": [...this.v],
			};
	}
	override fromJSON(json: JsonObject, force?: boolean): boolean {
		const version = json?.["v"] as int[] ?? [],
			general = this.#general.fromJSON({ ...json, "v": version.slice(0, 1) }, force),
			advanced = this.#advanced.fromJSON({ ...json, "v": version.slice(1, 2) }, force),
			control = this.#control.fromJSON({ ...json["control"] as JsonObject, "v": version.slice(2, 3) }, force);
		return general || advanced || control;
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
	get suspended(): boolean { return this.#general.suspended; }
	/**
	 * Timestamp from the action that deleted or suspended this object.
	 */
	get since(): Date { return this.#general.since; }
}