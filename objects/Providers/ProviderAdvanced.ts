import { Component } from "../API/Component";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { ipv4, ulong } from "../API/Types";
import { COMPANIES } from "../COMPANIES";
import { Company } from "../Companies/Company";
import { ProviderData } from "./ProviderData";

/**
 * Device/hardware information reported from the field.
 */
export class ProviderAdvanced
	extends Component
	implements IBelongCompany {
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
	 * The last IP address of the device.
	 *  <override type="System.String" format="ipv4" />
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
}