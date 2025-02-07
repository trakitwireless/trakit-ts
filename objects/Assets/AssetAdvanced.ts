import { Component } from "../API/Component";
import { Position } from "../API/Geography/Position";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { double, ulong } from "../API/Types";
import { Company } from "../Companies/Company";
import { AssetAttribute } from "./AssetAttribute";
import { AssetPlaceStatus } from "./AssetPlaceStatus";

/**
 * Often changing details about a thing.
 */
export class AssetAdvanced
	extends Component
	implements IIdUlong, IBelongCompany {
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
	get company(): Company{
		throw new Error("Method not implemented.");
	}
	/**
	 * The things GPS coordinates including speed, bearing, and street information.
	 */
	position: Position | null = null;
	/**
	 * The cumulative distance travelled in kilometres.
	 */
	odometer: double = NaN;
	/**
	 * The codified status tag names.
	 *  <override>
	 *  <values format="codified">
	 * {@link LabelStyle.code}
	 *  </values>
	 *  </override>
	 */
	tags: string[] = [];
	/**
	 * A list of attributes given to this asset by the connection device such as wiring state, VBus, etc.
	 *  <override>
	 *  <keys format="codified">
	 * {@link AssetAttribute.name}
	 *  </keys>
	 *  </override>
	 */
	attributes: Map<string, AssetAttribute>= new Map;
	/**
	 * The list of devices providing events for this asset.
	 *  <override readonly="true">
	 *  <values>
	 * {@link Provider.id}
	 *  </values>
	 *  </override>
	 */
	providers: string[] = [];
	/**
	 * A list of assets related to this one; like a Person for a Vehicle (driver).
	 *  <override>
	 *  <values>
	 * {@link Asset.id}
	 *  </values>
	 *  </override>
	 */
	relationships: ulong[] = [];
	/**
	 * The current state of this asset's interaction with known Places.
	 *  <override>
	 *  <keys>
	 * {@link Place.id}
	 *  </keys>
	 *  </override>
	 */
	places: Map<ulong, AssetPlaceStatus> = new Map;

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
}