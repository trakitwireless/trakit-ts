import { ARRAY_TO_IDS } from "../API/Arrays";
import { BaseComponent } from "../API/BaseComponent";
import { CODIFY } from "../API/Codifier";
import { FLOAT } from "../API/Constants";
import { ID, IS_AN } from "../API/Functions";
import { ROUTE_DECODE, ROUTE_ENCODE } from "../API/Geography/Functions";
import { LatLng } from "../API/Geography/LatLng";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { IIconic } from "../API/Interfaces/IIconic";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { ILabelled } from "../API/Interfaces/ILabelled";
import { INamed } from "../API/Interfaces/INamed";
import { IPictured } from "../API/Interfaces/IPictured";
import { MAP_FILTERED_BY_KEYS } from "../API/Maps";
import { JsonObject, codified, colour, double, int, ulong } from "../API/Types";
import { Company } from "../Companies/Company";
import { Icon } from "../Images/Icon";
import { Picture } from "../Images/Picture";
import { COMPANIES, ICONS, PICTURES } from "../storage";
import { PlaceType } from "./PlaceType";

/**
 * A POI (point-of-interest) saved to the system to help determine an asset's real-world position.
 */
export class Place
	extends BaseComponent
	implements IIdUlong, INamed, IIconic, IBelongCompany, ILabelled, IPictured {
	/**
	 * Unique identifier of this POI.
	 */
	id: ulong = NaN;
	/**
	 * The company to which this POI belongs.
	 * {@link Company.id}
	 */
	companyId: ulong = NaN;
	/**
	 * The company to which this POI belongs.
	 * {@link Company.id}
	 */
	get company(): Company { return COMPANIES.get(this.companyId) as Company; }
	/**
	 * The kind of geography represented by this POI.
	 */
	kind: PlaceType = PlaceType.point;
	/**
	 * POI's common name instead of street address.
	 */
	name: string = "";
	/**
	 * Full street address including province/state, country, and postal/zip code.
	 */
	address: string = "";
	/**
	 * The icon used to display this POI in lists and on the map.
	 * {@link Icon.id}
	 */
	iconId: ulong = NaN;
	/**
	 * The icon used to display this POI in lists and on the map.
	 * {@link Icon.id}
	 */
	get icon(): Icon { return ICONS.get(this.iconId) as Icon; }
	set icon(value: Icon) { this.iconId = value?.id ?? NaN; }
	/**
	 * Notes!
	 */
	notes: string = "";
	/**
	 * The codified names of labels
	 */
	labels: codified[] = [];
	/**
	 * The fill colour given to this place for easy visual identification on the map (given in 24bit hex; #RRGGBB)
	 */
	colour: colour = "";
	/**
	 * {@link Picture.id}s of this POI.
	 */
	pictureIds: ulong[] = [];
	/**
	 * {@link Picture}s of this POI.
	 */
	get pictures(): Picture[] { return MAP_FILTERED_BY_KEYS(PICTURES, this.pictureIds); }
	set pictures(values: Picture[]) { this.pictureIds = values?.map(ARRAY_TO_IDS) ?? []; }
	/**
	 * A custom field used to refer to an external system.
	 */
	reference: string = "";
	
	/**
	 * A central point of the shape.
	 * This is the exact centre of a {@link PlaceType.radial} and {@link PlaceType.point} shaped places, and the location of the pin on the map for all types.
	 * When routing, {@link PlaceType.polygon} and {@link PlaceType.rectangle} shapes use the anchor as the location within the place for deliveries.
	 */
	anchor: LatLng | null = null;
	/**
	 * This member is only present for {@link PlaceType.radial} shapes, and is the radius in meters from the centre anchor.
	 */
	radius: double = NaN;
	/**
	 * A list of points forming a non-self-intersecting polygon.
	 */
	points: LatLng[] | null = null;
	
	override toJSON() {
		return {
			"id": this.id || null,
			"v": [...this.v],
			"company": this.companyId,
			"icon": this.iconId,
			"name": this.name || "",
			"notes": this.notes || "",
			"address": this.address || "",
			"kind": PlaceType[this.kind] || PlaceType.point,
			"labels": [...this.labels],
			"colour": this.colour || "",
			"pictures": [...this.pictureIds],
			"reference": this.reference || "",
			"anchor": this.anchor?.toJSON() ?? null,
			"radius": this.radius || null,
			"shape": this.points?.length as number > 0
				? ROUTE_ENCODE(this.points || [])
				: null
		};
	}
	override fromJSON(json: JsonObject, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"] as int[]) || !!(force && json);
		if (update) {
			if (!IS_AN(this.id)) this.id = ID(json["id"]);
			this.companyId = ID(json["company"]);
			this.iconId = ID(json["icon"]);
			this.name = json["name"] as string || "";
			this.notes = json["notes"] as string || "";
			this.address = json["address"] as string || "";
			this.kind = PlaceType[json["kind"] as PlaceType] || PlaceType.point;
			this.labels = (json["labels"]as codified[] || []).map(CODIFY);
			this.colour = json["colour"] as string || "";
			this.pictureIds = (json["pictures"]as ulong[] || []).map(ID);
			this.reference = json["reference"] as string || "";
			this.anchor = json["anchor"]
				? LatLng.fromJSON(json["anchor"] as JsonObject)
				: null;
			this.radius = FLOAT(json["radius"] as any);
			this.points = (
				typeof json["shape"] === "string"
					? ROUTE_DECODE(json["shape"], 6)
					: json["shape"]
						? json["shape"] as JsonObject[]
						: null
			)?.map(LatLng.fromJSON) ?? null;
		}
		return update;
	}
	
	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey() { return this.id; }
}