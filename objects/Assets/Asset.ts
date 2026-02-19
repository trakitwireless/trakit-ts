import { Contact } from "../Accounts/Contact";
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
import { JsonObject, codified, colour, double, int, nothing, ulong, ushort } from "../API/Types";
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

/**
 * The full details of an Asset, containing all the properties from the {@link AssetGeneral} and {@link AssetAdvanced} objects.
 */
export class Asset
	extends BaseCompound
	implements IIdUlong, INamed, IIconic, IBelongCompany, ILabelled, IPictured, ISuspendable {
	/**
	 *  
	 */
	get pieces(): BaseComponent[] {
		return [
			this._general,
			this._advanced,
			this._dispatch,
		];
	}

	/**
	 * Unique identifier of this asset.
	 */
	get id(): ulong {
		return this._general.id
			?? this._advanced.id
			?? this._dispatch.id;
	}
	/**
	 * The company to which this asset belongs.
	 * {@link Company.id}
	 */
	get companyId(): ulong {
		return this._general.companyId
			?? this._advanced.companyId
			?? this._dispatch.companyId;
	}
	/**
	 * The {@link Company} to which this asset belongs.
	 */
	get company(): Company {
		return this._general.company
			?? this._advanced.company
			?? this._dispatch.company;
	}
	/**
	 * Type of asset.
	 */
	get kind(): AssetType { return this._general.kind; }

	//#region AssetGeneral
	protected _general: AssetGeneral = new AssetGeneral;
	/**
	 *  
	 */
	get general(): AssetGeneral { return this._general; }
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
	 * The icon that represents this asset on the map and in lists.
	 * {@link Icon.id}
	 */
	get iconId(): ulong { return this._general.iconId; }
	set iconId(value: ulong) { this._general.iconId = value; }
	/**
	 * The {@link Icon} that represents this asset on the map and in lists.
	 */
	get icon(): Icon { return this._general.icon; }
	set icon(value: Icon) { this._general.icon = value; }
	/**
	 * Codified label names.
	 * {@link LabelStyle.code}
	 */
	get labels(): codified[] { return this._general.labels; }
	set labels(value: codified[]) { this._general.labels = value; }
	/**
	 * A list of photos of this thing.
	 * {@link Picture.id}
	 */
	get pictureIds(): ulong[] { return this._general.pictureIds; }
	set pictureIds(value: ulong[]) { this._general.pictureIds = value; }
	/**
	 * A list of {@link Picture}s of this thing.
	 */
	get pictures(): Picture[] { return this._general.pictures; }
	set pictures(value: Picture[]) { this._general.pictures = value; }
	/**
	 * The fall-back address which is used to send Messages if the asset is a Person and has no Contact phone or email.
	 */
	get messagingAddress(): string { return this._general.messagingAddress; }
	set messagingAddress(value: string) { this._general.messagingAddress = value; }
	/**
	 * Name/value collections of custom fields used to refer to external systems.
	 */
	get references(): Map<string, string> { return this._general.references; }
	set references(value: Map<string, string>) { this._general.references = value; }
	//#endregion AssetGeneral
	//#region PersonGeneral
	/**
	 * Contact information for this user.
	 * {@link Contact.id}
	 */
	get contactId(): ulong { return this.general.contactId; }
	set contactId(value: ulong) { this.general.contactId = value; }
	/**
	 * {@link Contact} information for this user.
	 */
	get contact(): Contact { return this.general.contact; }
	set contact(value: Contact) { this.general.contact = value; }
	//#endregion PersonGeneral
	//#region VehicleGeneral
	/**
	 * The license plate.
	 */
	get plate(): string { return this.general.plate; }
	/**
	 * Manufacturer's unique identification number (Vehicle Identification Number).
	 */
	get vin(): string { return this.general.vin; }
	set vin(value: string) { this.general.vin = value; }
	/**
	 * Manufacturer's name.
	 */
	get make(): string { return this.general.make; }
	set make(value: string) { this.general.make = value; }
	/**
	 * Manufacturer's model name/number.
	 */
	get model(): string { return this.general.model; }
	set model(value: string) { this.general.model = value; }
	/**
	 * Year of manufacturing.
	 */
	get year(): ushort { return this.general.year; }
	set year(value: ushort) { this.general.year = value; }
	/**
	 * Primary colour of the trailer (given in 24bit hex; #RRGGBB)
	 */
	get colour(): colour { return this.general.colour; }
	set colour(value: colour) { this.general.colour = value; }
	//#endregion VehicleGeneral
	//#region TrailerGeneral
	/**
	 * Manufacturer's unique identification number for this trailer.
	 */
	get serial(): string { return this.general.serial; }
	set serial(value: string) { this.general.serial = value; }
	//#endregion TrailerGeneral

	//#region AssetAdvanced
	protected _advanced: AssetAdvanced = new AssetAdvanced;
	/**
	 *  
	 */
	get advanced(): AssetAdvanced { return this._advanced; }
	/**
	 * The things GPS coordinates including speed, bearing, and street information.
	 */
	get position(): Position | null { return this._advanced.position; }
	set position(value: Position | null) { this._advanced.position = value; }
	/**
	 * The cumulative distance travelled in kilometres.
	 */
	get odometer(): double { return this._advanced.odometer; }
	set odometer(value: double) { this._advanced.odometer = value; }
	/**
	 * The codified status tag names.
	 */
	get tags(): codified[] { return this._advanced.tags; }
	set tags(value: codified[]) { this._advanced.tags = value; }
	/**
	 * A list of attributes given to this asset by the connection device such as wiring state, VBus, etc.
	 */
	get attributes(): Map<codified, AssetAttribute> { return this._advanced.attributes; }
	set attributes(value: Map<codified, AssetAttribute>) { this._advanced.attributes = value; }
	/**
	 * The list of devices providing events for this asset.
	 */
	get providerIds(): string[] { return this._advanced.providerIds; }
	/**
	 * The list of devices providing events for this asset.
	 */
	get providers(): Provider[] { return this._advanced.providers; }
	/**
	 * A list of assets related to this one; like a Person for a Vehicle (driver).
	 * {@link Asset.id}
	 */
	get relationshipIds(): ulong[] { return this._advanced.relationshipIds; }
	set relationshipIds(value: ulong[]) { this._advanced.relationshipIds = value; }
	/**
	 * A list of {@link Asset}s related to this one; like a Person for a Vehicle (driver).
	 */
	get relationships(): Asset[] { return this._advanced.relationships; }
	set relationships(value: Asset[]) { this._advanced.relationships = value; }
	/**
	 * The current state of this asset's interaction with known Places.
	 * {@link Place.id}
	 */
	get places(): Map<ulong, AssetPlaceStatus> { return this._advanced.places; }
	set places(value: Map<ulong, AssetPlaceStatus>) { this._advanced.places = value; }
	//#endregion AssetAdvanced
	//#region VehicleAdvanced
	/**
	 * The cumulative duration that the vehicle's engine has been running (in decimal hours).
	 */
	get engineHours(): double { return this.advanced.engineHours; }
	set engineHours(value: double) { this.advanced.engineHours = value; }
	//#endregion VehicleAdvanced
	
	//#region AssetDispatch
	protected _dispatch: AssetDispatch = new AssetDispatch;
	/**
	 *  
	 */
	get dispatch(): AssetDispatch { return this._dispatch; }
	//#endregion AssetDispatch

	constructor(json?: JsonObject | nothing) {
		super();
		if (json) this.fromJSON(json);
	}
	override toJSON() {
		return this._general.suspended
			? this._general.toJSON()
			: {
				...this._general.toJSON(),
				...this._advanced.toJSON(),
				...this._dispatch.toJSON(),
				"v": [...this.v],
			};
	}
	override fromJSON(json: JsonObject, force?: boolean): boolean {
		const version = json?.["v"] as int[],
			general = this._general.fromJSON({ ...json, "v": version.slice(0, 1) }, force),
			advanced = this._advanced.fromJSON({ ...json, "v": version.slice(1, 2) }, force),
			dispatch = this._dispatch.fromJSON({ ...json, "v": version.slice(2, 3) }, force);
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
	get suspended(): boolean { return this._general.suspended; }
	/**
	 * Timestamp from the action that deleted or suspended this object.
	 */
	get since(): Date { return this._general.since; }
}