import { BaseComponent } from "../API/BaseComponent";
import { BaseCompound } from "../API/BaseCompound";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { INamed } from "../API/Interfaces/INamed";
import { ISuspendable } from "../API/Interfaces/ISuspendable";
import { JsonObject, int, ipv4, nothing, phone, ulong } from "../API/Types";
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
			this._general,
			this._advanced,
			this._control,
		];
	}

	/**
	 * Unique identifier of this device.
	 */
	get id(): string {
		return this._general.id
			?? this._advanced.id
			?? this._control.id;
	}
	/**
	 * The company to which this device belongs.
	 */
	get companyId(): ulong {
		return this._general.companyId
			?? this._advanced.companyId
			?? this._control.companyId;
	}
	/**
	 * The company to which this device belongs.
	 */
	get company(): Company {
		return this._general.company
			?? this._advanced.company
			?? this._control.company;
	}
	set company(value: Company) {
		this.general.company = value;
		this.advanced.company = value;
		this.control.company = value;
	}
	/**
	 * The kind of communication protocol this device uses.
	 */
	get kind(): ProviderType { return this._general.kind; }

	/**
	 *  
	 */
	protected _general: ProviderGeneral = new ProviderGeneral;
	get general(): ProviderGeneral { return this._general; }
	/**
	 * This thing's name.
	 */
	get name(): string { return this._general.name; }
	set name(value: string) { this._general.name = value; }
	/**
	 * Notes about it.
	 */
	get notes(): string { return this._general.notes; }
	set notes(value: string) { this._general.notes = value; }
	/**
	 * The asset for which this device provides field data.
	 * {@link Asset.id}
	 */
	get assetId(): ulong { return this._general.assetId; }
	set assetId(value: ulong) { this._general.assetId = value; }
	/**
	 * The {@link Asset} for which this device provides field data.
	 */
	get asset(): Asset { return this._general.asset; }
	set asset(value: Asset) { this._general.asset = value; }
	/**
	 * The provider's current (or pending) configuration profile.
	 * {@link ProviderConfig.id}
	 * {@link ProviderConfiguration.id}
	 */
	get configurationId(): ulong { return this._general.configurationId; }
	set configurationId(value: ulong) { this._general.configurationId = value; }
	/**
	 * The provider's current (or pending) {@link ProviderConfig} (or {@link ProviderConfiguration}).
	 */
	get configuration(): ProviderConfig | ProviderConfiguration { return this._general.configuration; }
	set configuration(value: ProviderConfig | ProviderConfiguration) { this._general.configuration = value; }
	/**
	 * The password programmed on the device used to ensure the system is the only client authorized to make changes.
	 */
	get password(): string { return this._general.password; }
	set password(value: string) { this._general.password = value; }
	/**
	 * The firmware/application version number.
	 */
	get firmware(): string { return this._general.firmware; }
	set firmware(value: string) { this._general.firmware = value; }
	/**
	 * The phone number of this device.
	 */
	get phoneNumber(): phone { return this._general.phoneNumber; }
	set phoneNumber(value: phone) { this._general.phoneNumber = value ?? NaN; }
	/**
	 * A list of read-only values about the device like IMEI, ESN, firmware version, hardware revision, etc...
	 */
	get information(): Map<string, string> { return this._general.information; }
	set information(value: Map<string, string>) { this._general.information = value; }
	/**
	 * ICCID of the SIM card installed in this provider
	 */
	get sim(): string { return this._general.sim; }
	set sim(value: string) { this._general.sim = value; }

	/**
	 *  
	 */
	protected _advanced: ProviderAdvanced = new ProviderAdvanced;
	get advanced(): ProviderAdvanced { return this._advanced; }
	/**
	 * The last IP address of the device.
	 */
	get lastIP(): ipv4 { return this._advanced.lastIP; }
	set lastIP(value: ipv4) { this._advanced.lastIP = value; }
	/**
	 * Often changing values like latitude, longitude, speed, wiring state, VBus information, etc...
	 */
	get attributes(): Map<string, Map<string, ProviderData>> { return this._advanced.attributes; }
	set attributes(value: Map<string, Map<string, ProviderData>>) { this._advanced.attributes = value; }
	/**
	 * Store-and-forward information like last sequence number of SnF window
	 */
	get snf(): Map<string, string> { return this._advanced.snf; }
	set snf(value: Map<string, string>) { this._advanced.snf = value; }

	/**
	 *  
	 */
	protected _control: ProviderControl = new ProviderControl;
	get control(): ProviderControl { return this._control; }
	/**
	 * Collection of commands for this provider.
	 */
	get commands(): Map<ProviderCommandType, ProviderCommand> { return this._control.commands; }
	set commands(value: Map<ProviderCommandType, ProviderCommand>) { this._control.commands = value; }

	constructor(json?: JsonObject | nothing) {
		super();
		if (json) this.fromJSON(json);
	}
	override toJSON() {
		return this.suspended
			? this._general.toJSON()
			: {
				...this._general.toJSON(),
				...this._advanced.toJSON(),
				"control": this._control.toJSON(),
				"v": [...this.v],
			};
	}
	override fromJSON(json: JsonObject, force?: boolean): boolean {
		const version = json?.["v"] as int[] ?? [],
			general = this._general.fromJSON({ ...json, "v": version.slice(0, 1) }, force),
			advanced = this._advanced.fromJSON({ ...json, "v": version.slice(1, 2) }, force),
			control = this._control.fromJSON({ ...json["control"] as JsonObject, "v": version.slice(2, 3) }, force);
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
	get suspended(): boolean { return this._general.suspended; }
	/**
	 * Timestamp from the action that deleted or suspended this object.
	 */
	get since(): Date { return this._general.since; }
}