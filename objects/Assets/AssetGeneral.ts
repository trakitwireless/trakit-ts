import { ARRAY_TO_IDS } from "../API/Arrays";
import { BaseComponent } from "../API/BaseComponent";
import { DATE, ID, JSON_DATE, MAP_TO_OBJECT, OBJECT_TO_MAP } from "../API/Functions";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIconic } from "../API/Interfaces/IIconic";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { ILabelled } from "../API/Interfaces/ILabelled";
import { INamed } from "../API/Interfaces/INamed";
import { IPictured } from "../API/Interfaces/IPictured";
import { ISuspendable } from "../API/Interfaces/ISuspendable";
import { MAP_FILTERED_BY_KEYS } from "../API/Maps";
import { ulong } from "../API/Types";
import { Company } from "../Companies/Company";
import { Icon } from "../Images/Icon";
import { Picture } from "../Images/Picture";
import { COMPANIES, ICONS, PICTURES } from "../Storage";
import { AssetType } from "./AssetType";
import { PersonGeneral } from "./PersonGeneral";
import { TrailerGeneral } from "./TrailerGeneral";
import { VehicleGeneral } from "./VehicleGeneral";

/**
 * Seldom changing details about a thing.
 */
export class AssetGeneral
	extends BaseComponent
	implements IIdUlong, INamed, IIconic, IBelongCompany, ILabelled, IPictured, ISuspendable {
	/**
	 * 
	 * @param json 
	 */
	static fromJSON(json: any) {
		switch (json["kind"] as AssetType) {
			case AssetType.person: return new PersonGeneral(json);
			case AssetType.vehicle: return new VehicleGeneral(json);
			case AssetType.trailer: return new TrailerGeneral(json);
			default: return new AssetGeneral(json);
		}
	}
	
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
	 * Type of asset.
	 */
	kind: AssetType = AssetType.asset;
	/**
	 * This thing's name.
	 *  <override max-length="100" />
	 */
	name: string = "";
	/**
	 * The {@link Icon.id} that represents this asset on the map and in lists.
	 */
	iconId: ulong = NaN;
	/**
	 * The {@link Icon} that represents this asset on the map and in lists.
	 */
	get icon(): Icon { return ICONS.get(this.iconId) as Icon; }
	set icon(value: Icon) { this.iconId = value?.id ?? NaN; }
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
	 * {@link Picture.id}s of this asset.
	 */
	pictureIds: ulong[] = [];
	/**
	 * {@link Picture}s of this asset.
	 */
	get pictures(): Picture[] { return MAP_FILTERED_BY_KEYS(PICTURES, this.pictureIds); }
	set pictures(values: Picture[]) { this.pictureIds = values?.map(ARRAY_TO_IDS) ?? []; }
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

	override toJSON() {
		return {
			"id": this.id || null,
			"v": this.v,
			"company": this.companyId,
			"kind": this.kind,
			"suspended": !!this.suspended,
			"since": this.suspended && JSON_DATE(this.since),
			"name": this.name,
			"notes": this.notes,
			"references": MAP_TO_OBJECT(this.references),
			"labels": [...this.labels],
			"messagingAddress": this.messagingAddress,
			"icon": this.iconId,
			"pictures": [...this.pictureIds],
		};
	}
	override fromJSON(json: any, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"]) || !!(force && json);
		if (update) {
			this.id = ID(json["id"]);
			this.companyId = ID(json["company"]);
			this.name = json["name"] || "";
			this.notes = json["notes"] || "";
			this.suspended = !!json["suspended"];
			this.since = DATE(json["since"]);
			this.references = OBJECT_TO_MAP(json["references"] || {});
			this.labels = [...(json["labels"] || [])];
			this.iconId = ID(json["icon"]);
			this.pictureIds = (json["pictures"] || []).map(ID);
			this.messagingAddress = json["messagingAddress"] || "";
		}
		return update;
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