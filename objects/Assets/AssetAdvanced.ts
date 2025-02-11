import { ARRAY_TO_IDS } from "../API/Arrays";
import { BaseComponent } from "../API/BaseComponent";
import { FLOAT } from "../API/Constants";
import { ID, IS_AN, OBJECT_TO_MAP_BY_PREDICATE } from "../API/Functions";
import { Position } from "../API/Geography/Position";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { MAP_FILTERED_BY_KEYS } from "../API/Maps";
import { double, ulong } from "../API/Types";
import { Company } from "../Companies/Company";
import { Provider } from "../Providers/Provider";
import { ASSETS, COMPANIES, PROVIDERS } from "../Storage";
import { Asset } from "./Asset";
import { AssetAttribute } from "./AssetAttribute";
import { AssetPlaceStatus } from "./AssetPlaceStatus";

/**
 * Often changing details about a thing.
 */
export class AssetAdvanced
	extends BaseComponent
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
	get company(): Company { return COMPANIES.get(this.companyId) as Company; }
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
	attributes: Map<string, AssetAttribute> = new Map;
	/**
	 * The list of {@link Provider.id|device identifiers} providing events for this asset.
	 */
	providerIds: string[] = [];
	/**
	 * The list of {@link Provider|devices} providing events for this asset.
	 */
	get providers(): Provider[] { return MAP_FILTERED_BY_KEYS(PROVIDERS, this.providerIds); }
	set providers(value: Provider[]) { this.providerIds = value?.map(p => p.id) ?? []; }
	/**
	 * A list of {@link Asset.id}s related to this one; like a {@link Person} for a {@link Vehicle} (driver).
	 */
	relationshipIds: ulong[] = [];
	/**
	 * A list of {@link Asset}s related to this one; like a {@link Person} for a {@link Vehicle} (driver).
	 */
	get relationships(): Asset[] { return MAP_FILTERED_BY_KEYS(ASSETS, this.relationshipIds); }
	set relationships(value: Asset[]) { this.relationshipIds = value?.map(ARRAY_TO_IDS) ?? []; }
	/**
	 * The current state of this asset's interaction with known {@link Place}s.
	 */
	places: Map<ulong, AssetPlaceStatus> = new Map;

	override toJSON() {
		throw new Error("Method not implemented.");
	}
	override fromJSON(json: any): this {
		if (json) {
			if (!IS_AN(this.id)) this.id = ID(json["id"]);
			var keepers = this.updateVersions(json["v"]);
			if (keepers[0]) {
				this.position = !json["position"]
					? null
					: new Position(
						json["position"]["lat"],
						json["position"]["lng"],
						json["position"]["speed"],
						json["position"]["bearing"],
						json["position"]["accuracy"],
						json["position"]["dts"],
						//json["position"]["address"],
						json["position"]["speedLimit"] || json["position"]["limit"],
						json["position"]["altitude"],
						json["position"]["streetAddress"]
					);
				this.odometer = FLOAT(json["odometer"]);
				this.tags = [...(json["tags"] || [])];
				this.attributes = OBJECT_TO_MAP_BY_PREDICATE(json["attributes"] || {}, (key, attr) => [key, new AssetAttribute(attr)]);
				this.relationshipIds = (json["relationships"] || []).map(ID);
				this.places = OBJECT_TO_MAP_BY_PREDICATE(json["places"] || {}, (id, ps) => [ID(id), new AssetPlaceStatus(ps)]);
			}
		}
		return this;
	}

	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey(): string { return this.id.toString(); }
}