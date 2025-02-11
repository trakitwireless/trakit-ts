import { BaseComponent } from "../API/BaseComponent";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { INamed } from "../API/Interfaces/INamed";
import { IPictured } from "../API/Interfaces/IPictured";
import { IIconic } from "../API/Interfaces/IIconic";
import { ILabelled } from "../API/Interfaces/ILabelled";
import { ISuspendable } from "../API/Interfaces/ISuspendable";
import { BaseCompound } from "../API/BaseCompound";
import { double, ulong } from "../API/Types";
import { Company } from "../Companies/Company";
import { AssetType } from "./AssetType";
import { AssetGeneral } from "./AssetGeneral";
import { AssetAdvanced } from "./AssetAdvanced";
import { AssetDispatch } from "./AssetDispatch";
import { AssetAttribute } from "./AssetAttribute";
import { AssetPlaceStatus } from "./AssetPlaceStatus";
import { Position } from "../API/Geography/Position";
import { DATE } from "../API/Functions";
import { Picture } from "../Images/Picture";
import { Icon } from "../Images/Icon";
import { Provider } from "../Providers/Provider";

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
			this.general,
			this.advanced,
			this.dispatch,
		];
	}

	/**
	 * Unique identifier of this asset.
	 * {@link Asset.id}
	 */
	get id(): ulong {
		return this.general.id
			?? this.advanced.id
			?? this.dispatch.id;
	}
	/**
	 * The company to which this asset belongs.
	 * {@link Company.id}
	 */
	get companyId(): ulong {
		return this.general.companyId
			?? this.advanced.companyId
			?? this.dispatch.companyId;
	}
	/**
	 * The company to which this asset belongs.
	 * {@link Company.id}
	 */
	get company(): Company {
		return this.general.company
			?? this.advanced.company
			?? this.dispatch.company;
	}
	/**
	 * Type of asset.
	 */
	get kind(): AssetType {
		return this.general.kind;
	}

	#general: AssetGeneral = new AssetGeneral;
	/**
	 *  
	 */
	get general(): AssetGeneral { return this.#general; }
	/**
	 * This thing's name.
	 *  <override max-length="100" />
	 */
	get name(): string {
		return this.general.name;
	}
	set name(value: string) {
		this.general.name = value;
	}
	/**
	 * Notes about it.
	 */
	get notes(): string {
		return this.general.notes;
	}
	set notes(value: string) {
		this.general.notes = value;
	}
	/**
	 * The icon that represents this asset on the map and in lists.
	 * {@link Icon.id}
	 */
	get iconId(): ulong { return this.general.iconId; }
	set iconId(value: ulong) { this.general.iconId = value; }
	/**
	 * The icon that represents this asset on the map and in lists.
	 * {@link Icon.id}
	 */
	get icon(): Icon { return this.general.icon; }
	set icon(value: Icon) { this.general.icon = value; }
	/**
	 * Codified label names.
	 *  <override>
	 *  <values format="codified">
	 * {@link LabelStyle.code}
	 *  </values>
	 *  </override>
	 */
	get labels(): string[] {
		return this.general.labels;
	}
	set labels(value: string[]) {
		this.general.labels = value;
	}
	/**
	 * A list of photos of this thing.
	 *  <override>
	 *  <values>
	 * {@link Picture.id}
	 *  </values>
	 *  </override>
	 */
	get pictureIds(): ulong[] { return this.general.pictureIds; }
	set pictureIds(value: ulong[]) { this.general.pictureIds = value; }
	/**
	 * A list of photos of this thing.
	 *  <override>
	 *  <values>
	 * {@link Picture.id}
	 *  </values>
	 *  </override>
	 */
	get pictures(): Picture[] { return this.general.pictures; }
	set pictures(value: Picture[]) { this.general.pictures = value; }
	/**
	 * The fall-back address which is used to send Messages if the asset is a Person and has no Contact phone or email.
	 *  <override max-length="254" />
	 */
	get messagingAddress(): string {
		return this.general.messagingAddress;
	}
	set messagingAddress(value: string) {
		this.general.messagingAddress = value;
	}
	/**
	 * Name/value collections of custom fields used to refer to external systems.
	 *  <override max-count="10">
	 *  <keys max-length="20" />
	 *  <values max-length="100" />
	 *  </override>
	 */
	get references(): Map<string, string> {
		return this.general.references;
	}
	set references(value: Map<string, string>) {
		this.general.references = value;
	}

	/**
	 *  
	 */
	advanced: AssetAdvanced = new AssetAdvanced;
	/**
	 * The things GPS coordinates including speed, bearing, and street information.
	 */
	get position(): Position | null {
		return this.advanced.position;
	}
	set position(value: Position | null) {
		this.advanced.position = value;
	}
	/**
	 * The cumulative distance travelled in kilometres.
	 */
	get odometer(): double {
		return this.advanced.odometer;
	}
	set odometer(value: double) {
		this.advanced.odometer = value;
	}
	/**
	 * The codified status tag names.
	 *  <override>
	 *  <values format="codified">
	 * {@link LabelStyle.code}
	 *  </values>
	 *  </override>
	 */
	get tags(): string[] {
		return this.advanced.tags;
	}
	set tags(value: string[]) {
		this.advanced.tags = value;
	}
	/**
	 * A list of attributes given to this asset by the connection device such as wiring state, VBus, etc.
	 *  <override>
	 *  <keys format="codified">
	 * {@link AssetAttribute.name}
	 *  </keys>
	 *  </override>
	 */
	get attributes(): Map<string, AssetAttribute> {
		return this.advanced.attributes;
	}
	set attributes(value: Map<string, AssetAttribute>) {
		this.advanced.attributes = value;
	}
	/**
	 * The list of devices providing events for this asset.
	 *  <override readonly="true">
	 *  <values>
	 * {@link Provider.id}
	 *  </values>
	 *  </override>
	 */
	get providerIds(): string[] { return this.advanced.providerIds; }
	set providerIds(value: string[]) { this.advanced.providerIds = value; }
	/**
	 * The list of devices providing events for this asset.
	 *  <override readonly="true">
	 *  <values>
	 * {@link Provider.id}
	 *  </values>
	 *  </override>
	 */
	get providers(): Provider[] { return this.advanced.providers; }
	set providers(value: Provider[]) { this.advanced.providers = value; }
	/**
	 * A list of assets related to this one; like a Person for a Vehicle (driver).
	 *  <override>
	 *  <values>
	 * {@link Asset.id}
	 *  </values>
	 *  </override>
	 */
	get relationshipIds(): ulong[] { return this.advanced.relationshipIds; }
	set relationshipIds(value: ulong[]) { this.advanced.relationshipIds = value; }
	/**
	 * A list of assets related to this one; like a Person for a Vehicle (driver).
	 *  <override>
	 *  <values>
	 * {@link Asset.id}
	 *  </values>
	 *  </override>
	 */
	get relationships(): Asset[] { return this.advanced.relationships; }
	set relationships(value: Asset[]) { this.advanced.relationships = value; }
	/**
	 * The current state of this asset's interaction with known Places.
	 *  <override>
	 *  <keys>
	 * {@link Place.id}
	 *  </keys>
	 *  </override>
	 */
	get places(): Map<ulong, AssetPlaceStatus> { return this.advanced.places; }
	set places(value: Map<ulong, AssetPlaceStatus>) { this.advanced.places = value; }

	/**
	 *  
	 */
	dispatch: AssetDispatch = new AssetDispatch;

	override toJSON() {
		throw new Error("Method not implemented.");
	}
	override fromJSON(json: any): this {
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
	get suspended(): boolean {
		return this.general.suspended ?? false;
	}
	/**
	 * Timestamp from the action that deleted or suspended this object.
	 */
	get since(): Date {
		return this.general.since ?? DATE();
	}
}