import { ARRAY_TO_IDS } from "../API/Arrays";
import { BaseComponent } from "../API/BaseComponent";
import { DATE, ID, JSON_DATE, MAP_TO_JSON, JSON_TO_MAP } from "../API/Functions";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIconic } from "../API/Interfaces/IIconic";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { ILabelled } from "../API/Interfaces/ILabelled";
import { INamed } from "../API/Interfaces/INamed";
import { IPictured } from "../API/Interfaces/IPictured";
import { ISuspendable } from "../API/Interfaces/ISuspendable";
import { MAP_FILTERED_BY_KEYS } from "../API/Maps";
import { MERGE } from "../API/Objects";
import { codified, ulong, JsonObject, int, datetime, email } from "../API/Types";
import { Company } from "../Companies/Company";
import { Icon } from "../Images/Icon";
import { Picture } from "../Images/Picture";
import { COMPANIES, ICONS, PICTURES } from "../storage";
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
	static fromJSON(json: JsonObject) {
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
	 */
	labels: codified[] = [];
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
	 */
	messagingAddress: string = "";
	/**
	 * Name/value collections of custom fields used to refer to external systems.
	 */
	references: Map<string, string> = new Map;

	override toJSON() {
		return MERGE(
			{
				"id": this.id || null,
				"v": [...this.v],
				"company": this.companyId,
				"kind": AssetType[this.kind] || null,
				"name": this.name || "",
				"notes": this.notes || "",
				"icon": this.iconId,
				"labels": [...this.labels],
			},
			this.suspended
				? {
					"suspended": true,
					"since": JSON_DATE(this.since),
				}
				: {
					"references": MAP_TO_JSON(this.references),
					"messagingAddress": this.messagingAddress,
					"pictures": [...this.pictureIds],
				}
		);
	}
	override fromJSON(json: JsonObject, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"] as int[]) || !!(force && json);
		if (update) {
			this.id = ID(json["id"]);
			this.companyId = ID(json["company"]);
			this.name = json["name"] as string || "";
			this.notes = json["notes"] as string || "";
			this.suspended = !!json["suspended"];
			this.since = DATE(json["since"] as datetime);
			this.references = JSON_TO_MAP(json["references"] as object || {});
			this.labels = [...(json["labels"] as codified[] || [])];
			this.iconId = ID(json["icon"]);
			this.pictureIds = (json["pictures"] as ulong[] || []).map(ID);
			this.messagingAddress = json["messagingAddress"] as email || "";
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