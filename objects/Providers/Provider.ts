import { BaseComponent } from "../API/BaseComponent";
import { BaseCompound } from "../API/BaseCompound";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { INamed } from "../API/Interfaces/INamed";
import { ISuspendable } from "../API/Interfaces/ISuspendable";
import { ipv4, ulong } from "../API/Types";
import { Company } from "../Companies/Company";
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
			this.general,
			this.advanced,
			this.control,
		];
	}

	/**
	 * Unique identifier of this device.
	 * {@link Asset.id}
	 */
	get id(): string {
		return this.general.id
			?? this.advanced.id
			?? this.control.id;
	}
	/**
	 * The company to which this device belongs.
	 * {@link Company.id}
	 */
	get companyId(): ulong {
		return this.general.companyId
			?? this.advanced.companyId
			?? this.control.companyId;
	}
	/**
	 * The company to which this device belongs.
	 * {@link Company.id}
	 */
	get company(): Company {
		return this.general.company
			?? this.advanced.company
			?? this.control.company;
	}
	/**
	 * The kind of communication protocol this device uses.
	 */
	get kind(): ProviderType {
		return this.general.kind;
	}

	/**
	 *  
	 */
	general: ProviderGeneral = new ProviderGeneral;
	/**
	 * This thing's name.
	 *  <override max-length="100" />
	 */
	get name(): string {
		return this.general.name;
	}
	set name(value: string) {
		this.general.name = value;
	}
	/**
	 * Notes about it.
	 */
	get notes(): string {
		return this.general.notes;
	}
	set notes(value: string) {
		this.general.notes = value;
	}
	/**
	 * The asset for which this device provides field data.
	 * {@link Asset.id}
	 */
	get asset(): ulong {
		return this.general.asset;
	}
	set asset(value: ulong) {
		this.general.asset = value;
	}
	/**
	 * The provider's current (or pending) configuration profile.
	 * {@link ProviderConfig.id}
	 * {@link ProviderConfiguration.id}
	 */
	get configuration(): ulong {
		return this.general.configuration;
	}
	set configuration(value: ulong) {
		this.general.configuration = value;
	}
	/**
	 * The password programmed on the device used to ensure the system is the only client authorized to make changes.
	 *  <override max-length="50" />
	 */
	get password(): string {
		return this.general.password;
	}
	set password(value: string) {
		this.general.password = value;
	}
	/**
	 * The firmware/application version number.
	 *  <override max-length="100" />
	 */
	get firmware(): string {
		return this.general.firmware;
	}
	set firmware(value: string) {
		this.general.firmware = value;
	}
	/**
	 * The phone number of this device.
	 *  <override format="phone" />
	 */
	get phoneNumber(): ulong {
		return this.general.phoneNumber;
	}
	set phoneNumber(value: ulong) {
		this.general.phoneNumber = value ?? NaN;
	}
	/**
	 * A list of read-only values about the device like IMEI, ESN, firmware version, hardware revision, etc...
	 *  <override>
	 *  <keys>
	 * {@link DataName}
	 *  </keys>
	 *  </override>
	 */
	get information(): Map<string, string> {
		return this.general.information;
	}
	set information(value: Map<string, string>) {
		this.general.information = value;
	}
	/**
	 * ICCID of the SIM card installed in this provider
	 */
	get sim(): string {
		return this.general.sim;
	}
	set sim(value: string) {
		this.general.sim = value;
	}

	/**
	 *  
	 */
	advanced: ProviderAdvanced = new ProviderAdvanced;
	/**
	 * The last IP address of the device.
	 */
	get lastIP(): ipv4 {
		return this.advanced.lastIP;
	}
	set lastIP(value: ipv4) {
		this.advanced.lastIP = value;
	}
	/**
	 * Often changing values like latitude, longitude, speed, wiring state, VBus information, etc...
	 */
	get attributes(): Map<string, Map<string, ProviderData>> {
		return this.advanced.attributes;
	}
	set attributes(value: Map<string, Map<string, ProviderData>>) {
		this.advanced.attributes = value;
	}
	/**
	 * Store-and-forward information like last sequence number of SnF window
	 */
	get snf(): Map<string, string> {
		return this.advanced.snf;
	}
	set snf(value: Map<string, string>) {
		this.advanced.snf = value;
	}

	/**
	 *  
	 */
	control: ProviderControl = new ProviderControl;
	/**
	 * Collection of commands for this provider.
	 */
	get commands(): Map<ProviderCommandType, ProviderCommand> {
		return this.control.commands;
	}
	set commands(value: Map<ProviderCommandType, ProviderCommand>) {
		this.control.commands = value;
	}

	constructor(json: any = null) {
		super();
		if (json) this.fromJSON(json);
	}
	override toJSON() {
		throw new Error("Method not implemented.");
	}
	override fromJSON(json: any): void {
		throw new Error("Method not implemented.");
	}

	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey(): string { return this.id; }

	// ISuspendable
	/**
	 * Indicates whether this object is suspended from event processing.
	 */
	get suspended(): boolean {
		return this.general.suspended;
	}
	/**
	 * Timestamp from the action that deleted or suspended this object.
	 */
	get since(): Date { return this.general.since; }
}