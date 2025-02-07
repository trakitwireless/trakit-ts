import { Component } from "../API/Component";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { INamed } from "../API/Interfaces/INamed";
import { IPictured } from "../API/Interfaces/IPictured";
import { IIconic } from "../API/Interfaces/IIconic";
import { ILabelled } from "../API/Interfaces/ILabelled";
import { ISuspendable } from "../API/Interfaces/ISuspendable";
import { Compound } from "../API/Compound";
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


/**
 * The full details of an Asset, containing all the properties from the {@link AssetGeneral} and {@link AssetAdvanced} objects.
 */
export class Asset
	extends Compound
	implements IIdUlong, INamed, IIconic, IBelongCompany, ILabelled, IPictured, ISuspendable {
	/**
	 *  
	 */
	get pieces(): Component[] {
		return [
			this.General,
			this.Advanced,
			this.Dispatch,
		];
	}

	/**
	 * Unique identifier of this asset.
	 * {@link Asset.id}
	 */
	get id(): ulong {
		return this.General?.id
			?? this.Advanced?.id
			?? this.Dispatch?.id;
	}
	/**
	 * The company to which this asset belongs.
	 * {@link Company.id}
	 */
	get companyId(): ulong {
		return this.General?.companyId
			?? this.Advanced?.companyId
			?? this.Dispatch?.companyId;
	}
	/**
	 * The company to which this asset belongs.
	 * {@link Company.id}
	 */
	get company(): Company {
		return this.General?.company
			?? this.Advanced?.company
			?? this.Dispatch?.company;
	}
	/**
	 * Type of asset.
	 */
	get kind(): AssetType {
		return this.General?.kind;
	}

	/**
	 *  
	 */
	General: AssetGeneral = new AssetGeneral;
	/**
	 * This thing's name.
	 *  <override max-length="100" />
	 */
	get name(): string {
		return this.General?.name;
	}
	set name(value: string) {
		if (this.General) this.General.name = value;
	}
	/**
	 * Notes about it.
	 */
	get notes(): string {
		return this.General?.notes;
	}
	set notes(value: string) {
		if (this.General) this.General.notes = value;
	}
	/**
	 * The icon that represents this asset on the map and in lists.
	 * {@link Icon.id}
	 */
	get icon(): ulong {
		return this.General?.icon;
	}
	set icon(value: ulong) {
		if (this.General) this.General.icon = value;
	}
	/**
	 * Codified label names.
	 *  <override>
	 *  <values format="codified">
	 * {@link LabelStyle.code}
	 *  </values>
	 *  </override>
	 */
	get labels(): string[] {
		return this.General?.labels;
	}
	set labels(value: string[]) {
		if (this.General) this.General.labels = value;
	}
	/**
	 * A list of photos of this thing.
	 *  <override>
	 *  <values>
	 * {@link Picture.id}
	 *  </values>
	 *  </override>
	 */
	get pictures(): ulong[] {
		return this.General?.pictures;
	}
	set pictures(value: ulong[]) {
		if (this.General) this.General.pictures = value;
	}
	/**
	 * The fall-back address which is used to send Messages if the asset is a Person and has no Contact phone or email.
	 *  <override max-length="254" />
	 */
	get messagingAddress(): string {
		return this.General?.messagingAddress;
	}
	set messagingAddress(value: string) {
		if (this.General) this.General.messagingAddress = value;
	}
	/**
	 * Name/value collections of custom fields used to refer to external systems.
	 *  <override max-count="10">
	 *  <keys max-length="20" />
	 *  <values max-length="100" />
	 *  </override>
	 */
	get references(): Map<string, string> {
		return this.General?.references;
	}
	set references(value: Map<string, string>) {
		if (this.General) this.General.references = value;
	}

	/**
	 *  
	 */
	Advanced: AssetAdvanced = new AssetAdvanced;
	/**
	 * The things GPS coordinates including speed, bearing, and street information.
	 */
	get position(): Position | null {
		return this.Advanced?.position;
	}
	set position(value: Position | null) {
		if (this.Advanced) this.Advanced.position = value;
	}
	/**
	 * The cumulative distance travelled in kilometres.
	 */
	get odometer(): double {
		return this.Advanced?.odometer;
	}
	set odometer(value: double) {
		if (this.Advanced) this.Advanced.odometer = value;
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
		return this.Advanced?.tags;
	}
	set tags(value: string[]) {
		if (this.Advanced) this.Advanced.tags = value;
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
		return this.Advanced?.attributes;
	}
	set attributes(value: Map<string, AssetAttribute>) {
		if (this.Advanced) this.Advanced.attributes = value;
	}
	/**
	 * The list of devices providing events for this asset.
	 *  <override readonly="true">
	 *  <values>
	 * {@link Provider.id}
	 *  </values>
	 *  </override>
	 */
	get providers(): string[] {
		return this.Advanced?.providers;
	}
	set providers(value: string[]) {
		if (this.Advanced) this.Advanced.providers = value;
	}
	/**
	 * A list of assets related to this one; like a Person for a Vehicle (driver).
	 *  <override>
	 *  <values>
	 * {@link Asset.id}
	 *  </values>
	 *  </override>
	 */
	get relationships(): ulong[] {
		return this.Advanced?.relationships;
	}
	set relationships(value: ulong[]) {
		if (this.Advanced) this.Advanced.relationships = value;
	}
	/**
	 * The current state of this asset's interaction with known Places.
	 *  <override>
	 *  <keys>
	 * {@link Place.id}
	 *  </keys>
	 *  </override>
	 */
	get places(): Map<ulong, AssetPlaceStatus> {
		return this.Advanced?.places;
	}
	set places(value: Map<ulong, AssetPlaceStatus>) {
		if (this.Advanced) this.Advanced.places = value;
	}

	/**
	 *  
	 */
	Dispatch: AssetDispatch = new AssetDispatch;

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
	get suspended(): boolean {
		return this.General?.suspended ?? false;
	}
	/**
	 * Timestamp from the action that deleted or suspended this object.
	 */
	get since(): Date {
		return this.General?.since ?? DATE();
	}
}