import { Component } from "../API/Component";
import { Compound } from "../API/Compound";
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
	extends Compound
	implements INamed, IBelongCompany, ISuspendable {
	/**
	 *  
	 */
	get pieces(): Component[] {
		return [
			this.General,
			this.Advanced,
			this.Control,
		];
	}

	/**
	 * Unique identifier of this device.
	 * {@link Asset.id}
	 */
	get id(): string {
		return this.General?.id
			?? this.Advanced?.id
			?? this.Control?.id;
	}
	/**
	 * The company to which this device belongs.
	 * {@link Company.id}
	 */
	get companyId(): ulong {
		return this.General?.companyId
			?? this.Advanced?.companyId
			?? this.Control?.companyId;
	}
	/**
	 * The company to which this device belongs.
	 * {@link Company.id}
	 */
	get company(): Company {
		return this.General?.company
			?? this.Advanced?.company
			?? this.Control?.company;
	}
	/**
	 * The kind of communication protocol this device uses.
	 */
	get kind(): ProviderType {
		return this.General?.kind;
	}

	/**
	 *  
	 */
	General: ProviderGeneral = new ProviderGeneral;
	/**
	 * This thing's name.
	 *  <override max-length="100" />
	 */
	get name(): string {
		return this.General.name;
	}
	set name(value: string) {
		if (this.General) this.General.name = value;
	}
	/**
	 * Notes about it.
	 */
	get notes(): string {
		return this.General.notes;
	}
	set notes(value: string) {
		if (this.General) this.General.notes = value;
	}
	/**
	 * The asset for which this device provides field data.
	 * {@link Asset.id}
	 */
	get asset(): ulong {
		return this.General.asset;
	}
	set asset(value: ulong) {
		if (this.General) this.General.asset = value;
	}
	/**
	 * The provider's current (or pending) configuration profile.
	 * {@link ProviderConfig.id}
	 * {@link ProviderConfiguration.id}
	 */
	get configuration(): ulong {
		return this.General.configuration;
	}
	set configuration(value: ulong) {
		if (this.General) this.General.configuration = value;
	}
	/**
	 * The password programmed on the device used to ensure the system is the only client authorized to make changes.
	 *  <override max-length="50" />
	 */
	get password(): string {
		return this.General.password;
	}
	set password(value: string) {
		if (this.General) this.General.password = value;
	}
	/**
	 * The firmware/application version number.
	 *  <override max-length="100" />
	 */
	get firmware(): string {
		return this.General.firmware;
	}
	set firmware(value: string) {
		if (this.General) this.General.firmware = value;
	}
	/**
	 * The phone number of this device.
	 *  <override format="phone" />
	 */
	get phoneNumber(): ulong {
		return this.General.phoneNumber;
	}
	set phoneNumber(value: ulong) {
		if (this.General) this.General.phoneNumber = value ?? NaN;
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
		return this.General.information;
	}
	set information(value: Map<string, string>) {
		if (this.General) this.General.information = value;
	}
	/**
	 * ICCID of the SIM card installed in this provider
	 */
	get sim(): string {
		return this.General.sim;
	}
	set sim(value: string) {
		if (this.General) this.General.sim = value;
	}

	/**
	 *  
	 */
	Advanced: ProviderAdvanced = new ProviderAdvanced;
	/**
	 * The last IP address of the device.
	 */
	get lastIP(): ipv4 {
		return this.Advanced.lastIP;
	}
	set lastIP(value: ipv4) {
		if (this.Advanced) this.Advanced.lastIP = value;
	}
	/**
	 * Often changing values like latitude, longitude, speed, wiring state, VBus information, etc...
	 */
	get attributes(): Map<string, Map<string, ProviderData>> {
		return this.Advanced.attributes;
	}
	set attributes(value: Map<string, Map<string, ProviderData>>) {
		if (this.Advanced) this.Advanced.attributes = value;
	}
	/**
	 * Store-and-forward information like last sequence number of SnF window
	 */
	get snf(): Map<string, string> {
		return this.Advanced.snf;
	}
	set snf(value: Map<string, string>) {
		if (this.Advanced) this.Advanced.snf = value;
	}

	/**
	 *  
	 */
	Control: ProviderControl = new ProviderControl;
	/**
	 * Collection of commands for this provider.
	 */
	get commands(): Map<ProviderCommandType, ProviderCommand> {
		return this.Control.commands;
	}
	set commands(value: Map<ProviderCommandType, ProviderCommand>) {
		if (this.Control) this.Control.commands = value;
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
		return this.General.suspended;
	}
	/**
	 * Timestamp from the action that deleted or suspended this object.
	 */
	get since(): Date { return this.General.since; }
}