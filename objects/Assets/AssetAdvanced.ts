import { ARRAY_TO_IDS } from "../API/Arrays";
import { BaseComponent } from "../API/BaseComponent";
import { FLOAT } from "../API/Constants";
import { ID, IS_AN, JSON_NUMBER, JSON_TO_MAP_PREDICATE, MAP_TO_JSON } from "../API/Functions";
import { IPosition } from "../API/Geography/Interfaces";
import { Position } from "../API/Geography/Position";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { MAP_FILTERED_BY_KEYS } from "../API/Maps";
import { JsonObject, codified, double, int, nothing, ulong } from "../API/Types";
import { Company } from "../Companies/Company";
import { Provider } from "../Providers/Provider";
import { ASSETS, COMPANIES, PROVIDERS } from "../storage";
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
	 * The {@link Company} to which this asset belongs.
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
	 */
	tags: codified[] = [];
	/**
	 * A list of attributes given to this asset by the connection device such as wiring state, VBus, etc.
	 */
	attributes: Map<codified, AssetAttribute> = new Map;
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

	//#region VehicleAdvanced
	/**
	 * The cumulative duration that the vehicle's engine has been running (in decimal hours).
	 */
	engineHours: double = NaN;
	//#endregion VehicleAdvanced

	constructor(json?: JsonObject | nothing) {
		super();
		if (json) this.fromJSON(json);
	}
	override toJSON() {
		const json: JsonObject = {
			"id": this.id || null,
			"v": [...this.v],
			"company": JSON_NUMBER(this.companyId),
			"position": (this.position?.toJSON() || null) as JsonObject | null,
			"odometer": this.odometer || 0,
			"tags": [...this.tags],
			"attributes": MAP_TO_JSON(this.attributes),
			"providers": [...this.providerIds],
			"relationships": [...this.relationshipIds],
			"places": MAP_TO_JSON(this.places),
		};
		if (IS_AN(this.engineHours)) json["engineHours"] = this.engineHours;
		return json;
	}
	override fromJSON(json: JsonObject, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"] as int[]) || !!(force && json);
		if (update) {
			this.id = ID(json["id"]);
			this.companyId = ID(json["company"]);
			this.position = !json["position"]
				? null
				: Position.fromJSON(json["position"] as unknown as IPosition);
			this.odometer = FLOAT(json["odometer"] as any);
			this.tags = [...(json["tags"] as codified[] || [])];
			this.attributes = JSON_TO_MAP_PREDICATE(json["attributes"] as object || {}, (key, attr) => [key, new AssetAttribute(attr)]);
			this.relationshipIds = (json["relationships"] as ulong[] || []).map(ID);
			this.places = JSON_TO_MAP_PREDICATE(json["places"] as object || {}, (id, ps) => [ID(id), new AssetPlaceStatus(ps)]);
			// vehicle
			this.engineHours = FLOAT(json["engineHours"] as any);
		}
		return update;
	}

	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey() { return this.id; }
}