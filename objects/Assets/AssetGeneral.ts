import { Component } from "../API/Component";
import { DATE } from "../API/Functions";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIconic } from "../API/Interfaces/IIconic";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { ILabelled } from "../API/Interfaces/ILabelled";
import { INamed } from "../API/Interfaces/INamed";
import { IPictured } from "../API/Interfaces/IPictured";
import { ISuspendable } from "../API/Interfaces/ISuspendable";
import { ulong } from "../API/Types";
import { Company } from "../Companies/Company";
import { AssetType } from "./AssetType";

/**
 * Seldom changing details about a thing.
 */
export class AssetGeneral
	extends Component implements
	IIdUlong, INamed, IIconic, IBelongCompany, ILabelled, IPictured, ISuspendable {
	/**
	 * Unique identifier of this asset.
	 * {@link Asset.id}
	 */
	id: ulong = NaN;
	/**
	 * The company to which this asset belongs.
	 * {@link Company.id}
	 */
	companyId: ulong = NaN;
	/**
	 * The company to which this asset belongs.
	 * {@link Company.id}
	 */
	get company(): Company {
		throw new Error("Method not implemented.");
	}
	/**
	 * Type of asset.
	 */
	kind: AssetType = AssetType.asset;
	/**
	 * This thing's name.
	 *  <override max-length="100" />
	 */
	name: string = "";
	/**
	 * The icon that represents this asset on the map and in lists.
	 * {@link Icon.id}
	 */
	icon: ulong = NaN;
	/**
	 * Notes about it.
	 */
	notes: string = "";
	/**
	 * Codified label names.
	 *  <override>
	 *  <values format="codified">
	 * {@link LabelStyle.code}
	 *  </values>
	 *  </override>
	 */
	labels: string[] = [];
	/**
	 * A list of photos of this thing.
	 *  <override>
	 *  <values>
	 * {@link Picture.id}
	 *  </values>
	 *  </override>
	 */
	pictures: ulong[] = [];
	/**
	 * The fall-back address which is used to send Messages if the asset is a Person and has no Contact phone or email.
	 *  <override max-length="254" />
	 */
	messagingAddress: string = "";
	/**
	 * Name/value collections of custom fields used to refer to external systems.
	 *  <override max-count="10">
	 *  <keys max-length="20" />
	 *  <values max-length="100" />
	 *  </override>
	 */
	references: Map<string, string> = new Map;

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