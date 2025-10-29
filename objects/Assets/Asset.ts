import { BaseComponent } from "../API/BaseComponent";
import { BaseCompound } from "../API/BaseCompound";
import { IS_AN } from "../API/Functions";
import { Position } from "../API/Geography/Position";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIconic } from "../API/Interfaces/IIconic";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { ILabelled } from "../API/Interfaces/ILabelled";
import { INamed } from "../API/Interfaces/INamed";
import { IPictured } from "../API/Interfaces/IPictured";
import { ISuspendable } from "../API/Interfaces/ISuspendable";
import { JsonObject, codified, double, int, ulong } from "../API/Types";
import { Company } from "../Companies/Company";
import { Icon } from "../Images/Icon";
import { Picture } from "../Images/Picture";
import { Provider } from "../Providers/Provider";
import { AssetAdvanced } from "./AssetAdvanced";
import { AssetAttribute } from "./AssetAttribute";
import { AssetDispatch } from "./AssetDispatch";
import { AssetGeneral } from "./AssetGeneral";
import { AssetPlaceStatus } from "./AssetPlaceStatus";
import { AssetType } from "./AssetType";
import { Person } from "./Person";
import { Trailer } from "./Trailer";
import { Vehicle } from "./Vehicle";

/**
 * The full details of an Asset, containing all the properties from the {@link AssetGeneral} and {@link AssetAdvanced} objects.
 */
export class Asset
	extends BaseCompound
	implements IIdUlong, INamed, IIconic, IBelongCompany, ILabelled, IPictured, ISuspendable {
	/**
	 * 
	 * @param json 
	 */
	static fromJSON(json: JsonObject): Person | Vehicle | Trailer | Asset {
		if (!json["kind"] && IS_AN(json["engineHours"])) {
			json["kind"] = AssetType.vehicle;
		}
		switch (json["kind"] as AssetType) {
			case AssetType.person: return new Person(json);
			case AssetType.vehicle: return new Vehicle(json);
			case AssetType.trailer: return new Trailer(json);
			default: return new Asset(json);
		}
	}
	
	/**
	 *  
	 */
	get pieces(): BaseComponent[] {
		return [
			this.#general,
			this.#advanced,
			this.#dispatch,
		];
	}

	/**
	 * Unique identifier of this asset.
	 * {@link Asset.id}
	 */
	get id(): ulong {
		return this.#general.id
			?? this.#advanced.id
			?? this.#dispatch.id;
	}
	/**
	 * The company to which this asset belongs.
	 * {@link Company.id}
	 */
	get companyId(): ulong {
		return this.#general.companyId
			?? this.#advanced.companyId
			?? this.#dispatch.companyId;
	}
	/**
	 * The company to which this asset belongs.
	 * {@link Company.id}
	 */
	get company(): Company {
		return this.#general.company
			?? this.#advanced.company
			?? this.#dispatch.company;
	}
	/**
	 * Type of asset.
	 */
	get kind(): AssetType { return this.#general.kind; }

	#general: AssetGeneral = new AssetGeneral;
	/**
	 *  
	 */
	get general(): AssetGeneral { return this.#general; }
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
	 * The icon that represents this asset on the map and in lists.
	 * {@link Icon.id}
	 */
	get iconId(): ulong { return this.#general.iconId; }
	set iconId(value: ulong) { this.#general.iconId = value; }
	/**
	 * The icon that represents this asset on the map and in lists.
	 * {@link Icon.id}
	 */
	get icon(): Icon { return this.#general.icon; }
	set icon(value: Icon) { this.#general.icon = value; }
	/**
	 * Codified label names.
	 * {@link LabelStyle.code}
	 */
	get labels(): codified[] { return this.#general.labels; }
	set labels(value: codified[]) { this.#general.labels = value; }
	/**
	 * A list of photos of this thing.
	 * {@link Picture.id}
	 */
	get pictureIds(): ulong[] { return this.#general.pictureIds; }
	set pictureIds(value: ulong[]) { this.#general.pictureIds = value; }
	/**
	 * A list of photos of this thing.
	 * {@link Picture.id}
	 */
	get pictures(): Picture[] { return this.#general.pictures; }
	set pictures(value: Picture[]) { this.#general.pictures = value; }
	/**
	 * The fall-back address which is used to send Messages if the asset is a Person and has no Contact phone or email.
	 */
	get messagingAddress(): string { return this.#general.messagingAddress; }
	set messagingAddress(value: string) { this.#general.messagingAddress = value; }
	/**
	 * Name/value collections of custom fields used to refer to external systems.
	 */
	get references(): Map<string, string> { return this.#general.references; }
	set references(value: Map<string, string>) { this.#general.references = value; }

	#advanced: AssetAdvanced = new AssetAdvanced;
	/**
	 *  
	 */
	get advanced(): AssetAdvanced { return this.#advanced; }
	/**
	 * The things GPS coordinates including speed, bearing, and street information.
	 */
	get position(): Position | null { return this.#advanced.position; }
	set position(value: Position | null) { this.#advanced.position = value; }
	/**
	 * The cumulative distance travelled in kilometres.
	 */
	get odometer(): double { return this.#advanced.odometer; }
	set odometer(value: double) { this.#advanced.odometer = value; }
	/**
	 * The codified status tag names.
	 */
	get tags(): codified[] { return this.#advanced.tags; }
	set tags(value: codified[]) { this.#advanced.tags = value; }
	/**
	 * A list of attributes given to this asset by the connection device such as wiring state, VBus, etc.
	 */
	get attributes(): Map<codified, AssetAttribute> { return this.#advanced.attributes; }
	set attributes(value: Map<codified, AssetAttribute>) { this.#advanced.attributes = value; }
	/**
	 * The list of devices providing events for this asset.
	 */
	get providerIds(): string[] { return this.#advanced.providerIds; }
	/**
	 * The list of devices providing events for this asset.
	 */
	get providers(): Provider[] { return this.#advanced.providers; }
	/**
	 * A list of assets related to this one; like a Person for a Vehicle (driver).
	 * {@link Asset.id}
	 */
	get relationshipIds(): ulong[] { return this.#advanced.relationshipIds; }
	set relationshipIds(value: ulong[]) { this.#advanced.relationshipIds = value; }
	/**
	 * A list of assets related to this one; like a Person for a Vehicle (driver).
	 * {@link Asset.id}
	 */
	get relationships(): Asset[] { return this.#advanced.relationships; }
	set relationships(value: Asset[]) { this.#advanced.relationships = value; }
	/**
	 * The current state of this asset's interaction with known Places.
	 * {@link Place.id}
	 */
	get places(): Map<ulong, AssetPlaceStatus> { return this.#advanced.places; }
	set places(value: Map<ulong, AssetPlaceStatus>) { this.#advanced.places = value; }

	#dispatch: AssetDispatch = new AssetDispatch;
	/**
	 *  
	 */
	get dispatch(): AssetDispatch { return this.#dispatch; }

	override toJSON() {
		return this.#general.suspended
			? this.#general.toJSON()
			: {
				...this.#general.toJSON(),
				...this.#advanced.toJSON(),
				...this.#dispatch.toJSON(),
				"v": [...this.v],
			};
	}
	override fromJSON(json: JsonObject, force?: boolean): boolean {
		const version = json?.["v"] as int[];
		const general = this.#general.fromJSON({ ...json, "v": version.slice(0, 1) }, force),
			advanced = this.#advanced.fromJSON({ ...json, "v": version.slice(1, 2) }, force),
			dispatch = this.#dispatch.fromJSON({ ...json, "v": version.slice(2, 3) }, force);
		return general || advanced || dispatch;
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