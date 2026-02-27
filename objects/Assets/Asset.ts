import { Contact } from "../Accounts/Contact";
import { ARRAY_UNIQUE } from "../API/Arrays";
import { BaseComponent } from "../API/BaseComponent";
import { BaseCompound } from "../API/BaseCompound";
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
import { DispatchJob } from "../Dispatch/DispatchJob";
import { DispatchTask } from "../Dispatch/DispatchTask";
import { FormResult } from "../Hosting/FormResult";
import { Icon } from "../Images/Icon";
import { Picture } from "../Images/Picture";
import { MaintenanceJob } from "../Maintenance/MaintenanceJob";
import { AssetMessage } from "../Messaging/AssetMessage";
import { Place } from "../Places/Place";
import { Provider } from "../Providers/Provider";
import { DISPATCH_JOBS, DISPATCH_TASKS, FORM_RESULTS, MAINTENANCE_JOBS, MESSAGES, PICTURES, PLACES } from "../storage";
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
			this.#general,
			this.#advanced,
			this.#dispatch,
		];
	}

	/**
	 * Unique identifier of this asset.
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
	 * The {@link Company} to which this asset belongs.
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

	//#region AssetGeneral
	#general: AssetGeneral;
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
	 * The {@link Icon} that represents this asset on the map and in lists.
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
	 * A list of {@link Picture}s of this thing.
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
	#advanced: AssetAdvanced;
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
	 * A list of {@link Asset}s related to this one; like a Person for a Vehicle (driver).
	 */
	get relationships(): Asset[] { return this.#advanced.relationships; }
	set relationships(value: Asset[]) { this.#advanced.relationships = value; }
	/**
	 * The current state of this asset's interaction with known Places.
	 * {@link Place.id}
	 */
	get places(): Map<ulong, AssetPlaceStatus> { return this.#advanced.places; }
	set places(value: Map<ulong, AssetPlaceStatus>) { this.#advanced.places = value; }
	//#endregion AssetAdvanced
	//#region VehicleAdvanced
	/**
	 * The cumulative duration that the vehicle's engine has been running (in decimal hours).
	 */
	get engineHours(): double { return this.advanced.engineHours; }
	set engineHours(value: double) { this.advanced.engineHours = value; }
	//#endregion VehicleAdvanced
	
	//#region AssetDispatch
	#dispatch: AssetDispatch;
	/**
	 *  
	 */
	get dispatch(): AssetDispatch { return this.#dispatch; }
	//#endregion AssetDispatch

	constructor(json?: JsonObject | nothing) {
		super();
		this.#general = new AssetGeneral;
		this.#advanced = new AssetAdvanced;
		this.#dispatch = new AssetDispatch;
		if (json) this.fromJSON(json);
	}
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
		const version = json?.["v"] as int[],
			general = this.#general.fromJSON({ ...json, "v": version.slice(0, 1) }, force),
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

	/**
	 * Gets the list of {@link Place}s where the asset is currently interacting.
	 * @returns An array of {@link Place} objects.
	 */
	getPlaces() {
		return [...this.places.keys().map(id => PLACES.get(id))];
	}
	/**
	 * Gets the list of {@link AssetMessage}s sent to or from this asset.
	 * @returns An array of {@link AssetMessage} objects.
	 */
	getMessages() {
		return [...MESSAGES.values().filter(m => m.assetId === this.id)];
	}
	/**
	 * Gets the list of {@link DispatchTask}s and jobs related to this asset.
	 * @returns An array of {@link DispatchTask} objects.
	 */
	getDispatchTasks() {
		return [...DISPATCH_TASKS.values().filter(t => t.assetId === this.id)];
	}
	/**
	 * Gets the list of {@link DispatchJob}s related to this asset.
	 * @returns An array of {@link DispatchJob} objects.
	 */
	getDispatchJobs() {
		return [...DISPATCH_JOBS.values().filter(j => j.assetId === this.id)];
	}
	/**
	 * Gets the list of {@link MaintenanceJob}s related to this asset.
	 * @returns An array of {@link MaintenanceJob} objects.
	 */
	getMaintenanceJobs() {
		return [...MAINTENANCE_JOBS.values().filter(j => j.assetId === this.id)];
	}
	/**
	 * Gets the list of {@link FormResult}s related to this asset.
	 * @returns An array of {@link FormResult} objects.
	 */
	getFormResults() {
		return [...FORM_RESULTS.values().filter(r => r.assetId === this.id)];
	}
	/**
	 * Gets the list of {@link Picture}s related to this asset.
	 * @returns An array of {@link Picture} objects.
	 */
	getPictures() {
		return ARRAY_UNIQUE(
			this.pictureIds.concat(
				this.contact?.pictureIds
				?? [] as ulong[]
			)
		).map(id => PICTURES.get(id));
	}
}