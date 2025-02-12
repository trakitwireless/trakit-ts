import { BaseComponent } from "../API/BaseComponent";
import { DATE } from "../API/Functions";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { INamed } from "../API/Interfaces/INamed";
import { ISuspendable } from "../API/Interfaces/ISuspendable";
import { ulong } from "../API/Types";
import { COMPANIES } from "../Storage";
import { Company } from "../Companies/Company";
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
	 *  <override min-length="10" max-length="50" />
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
	/**
	 * A nickname given to the device/hardware.
	 *  <override max-length="100" />
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
	asset: ulong = NaN;
	/**
	 * The provider's current (or pending) configuration profile.
	 * {@link ProviderConfig.id}
	 * {@link ProviderConfiguration.id}
	 */
	configuration: ulong = NaN;

	/**
	 * The password programmed on the device used to ensure the system is the only client authorized to make changes.
	 *  <override max-length="50" />
	 */
	password: string = "";
	/**
	 * The firmware/application version number.
	 *  <override max-length="100" />
	 */
	firmware: string = "";
	/**
	 * The phone number of this device.
	 *  <override format="phone" />
	 */
	phoneNumber: ulong = NaN;
	/**
	 * A list of read-only values about the device like IMEI, ESN, firmware version, hardware revision, etc...
	 */
	information: Map<string, string> = new Map;
	/**
	 * ICCID of the SIM card installed in this provider
	 */
	sim: string = "";

	override toJSON() {
		throw new Error("Method not implemented.");
	}
	override fromJSON(json: any, force?: boolean): boolean {
		throw new Error("Method not implemented.");
	}

	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey(): string { return this.id.toString(); }

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