import { Contact } from "../Accounts/Contact";
import { ARRAY_TO_IDS } from "../API/Arrays";
import { BaseComponent } from "../API/BaseComponent";
import { DATE, ID, IS_AN, JSON_DATE, JSON_TO_MAP, MAP_TO_JSON } from "../API/Functions";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIconic } from "../API/Interfaces/IIconic";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { ILabelled } from "../API/Interfaces/ILabelled";
import { INamed } from "../API/Interfaces/INamed";
import { IPictured } from "../API/Interfaces/IPictured";
import { ISuspendable } from "../API/Interfaces/ISuspendable";
import { MAP_FILTERED_BY_KEYS } from "../API/Maps";
import { JsonObject, codified, colour, datetime, email, int, nothing, ulong, ushort } from "../API/Types";
import { Company } from "../Companies/Company";
import { Icon } from "../Images/Icon";
import { Picture } from "../Images/Picture";
import { COMPANIES, CONTACTS, ICONS, PICTURES } from "../storage";
import { AssetType } from "./AssetType";

/**
 * Seldom changing details about a thing.
 */
export class AssetGeneral
	extends BaseComponent
	implements IIdUlong, INamed, IIconic, IBelongCompany, ILabelled, IPictured, ISuspendable {
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

	//#region PersonGeneral
	/**
	 * A reference to their Company's Contact information.
	 * {@link Contact.id}
	 */
	contactId: ulong = NaN;
	/**
	 * {@link Contact} information for this person.
	 */
	get contact(): Contact { return CONTACTS.get(this.contactId) as Contact; }
	set contact(value: Contact) { this.contactId = value.id; }
	//#endregion PersonGeneral
	//#region VehicleGeneral
	/**
	 * Manufacturer's unique identification number (Vehicle Identification Number).
	 */
	vin: string = "";
	/**
	 * The license plate.
	 */
	plate: string = "";
	/**
	 * Manufacturer's name.
	 */
	make: string = "";
	/**
	 * Manufacturer's model name/number.
	 */
	model: string = "";
	/**
	 * Year of manufacturing.
	 */
	year: ushort = NaN;
	/**
	 * Primary colour of the vehicle (given in 24bit hex; #RRGGBB)
	 */
	colour: colour = "";
	//#endregion VehicleGeneral
	//#region TrailerGeneral
	/**
	 * Manufacturer's unique identification number for this trailer.
	 */
	serial: string = "";
	//#endregion TrailerGeneral

	override toJSON(): JsonObject {
		return {
			"id": this.id || null,
			"v": [...this.v],
			"company": this.companyId,
			"kind": AssetType[this.kind] || null,
			"name": this.name || "",
			"notes": this.notes || "",
			"icon": this.iconId,
			"labels": [...this.labels],
			...(
				this.suspended
					? {
						"suspended": true,
						"since": JSON_DATE(this.since),
					}
					: {
						"references": MAP_TO_JSON(this.references),
						"messagingAddress": this.messagingAddress,
						"pictures": [...this.pictureIds],
						// person
						"contact": this.contactId,
						// vehicle
						"vin": this.vin || "",
						"plate": this.plate || "",
						"make": this.make || "",
						"model": this.model || "",
						"year": this.year || null,
						"colour": this.colour || "",
						// trailer
						"serial": this.serial || "",
					}
			),
		};
	}
	override fromJSON(json: JsonObject, force?: boolean): boolean {
		if (!json["kind"] && IS_AN(json["engineHours"])) json["kind"] = AssetType.vehicle;
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
			// person
			this.contactId = ID(json["contact"]);
			// vehicle
			this.plate = json["plate"] as string || "";
			this.vin = json["vin"] as string || "";
			this.make = json["make"] as string || "";
			this.model = json["model"] as string || "";
			this.year = ID(json["year"]) || 0;
			this.colour = json["colour"] as string || "";
			// trailer
			this.serial = json["serial"] as string || "";
		}
		return update;
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
	suspended: boolean = false;
	/**
	 * Timestamp from the action that deleted or suspended this object.
	 */
	since: Date = DATE();
}