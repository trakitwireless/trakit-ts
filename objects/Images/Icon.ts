import { BaseComponent } from "../API/BaseComponent";
import { ulong } from "../API/Types";
import { IconLabel } from "./IconLabel";
import { IconGlyph } from "./IconGlyph";
import { IGlobal } from "../API/Interfaces/IGlobal";
import { IIdUlong } from "../API/Interfaces/IIdUlong";
import { INamed } from "../API/Interfaces/INamed";
import { IBelongCompany } from "../API/Interfaces/IBelongCompany";
import { Company } from "../Companies/Company";
import { DATE, ID } from "../API/Functions";
import { COMPANIES } from "../Storage";
import { ARRAY_TO_JSON } from "../API/Arrays";
import { CODIFY } from "../API/Codifier";

/**
 * A visual representation of a thing on a map or in a list.
 */
export class Icon
	extends BaseComponent
	implements IIdUlong, INamed, IBelongCompany, IGlobal {
	/**
	 * Unique identifier of this icon.
	 */
	id: ulong = NaN;
	/**
	 * The company to which this icon belongs.
	 * {@link Company.id}
	 */
	companyId: ulong = NaN;
	/**
	 * The company to which this icon belongs.
	 * {@link Company.id}
	 */
	get company(): Company { return COMPANIES.get(this.companyId) as Company; }

	/**
	 * A noun to describe the type of thing represented.  Like Truck, Car, Trailer, Hot-Air Balloon, etc...
	 *  <override max-length="100" />
	 */
	category: string = "";
	/**
	 * A specific adjective to describe the thing.  Like Blue, Red, Empty, Full, etc...
	 *  <override max-length="100" />
	 */
	name: string = "";
	/**
	 * Notes.
	 */
	notes: string = "";
	/**
	 * Indicates whether this icon is available to child companies.
	 */
	global: boolean = false;
	/**
	 * A list of things that this icon can be used to represent.  Like asset, place, user, etc...
	 */
	usage: string[] = [];
	/**
	 * Definition for the name bubble above the icon on a map.
	 */
	label: IconLabel = new IconLabel;
	/**
	 * Where the notification will appear for a mapped icon.
	 * Such as the number of dispatches an asset is working on, or the number of dispatches at a place.
	 */
	badge: IconLabel = new IconLabel;
	/**
	 * The images used to show the detail of this icon.
	 */
	glyphs: IconGlyph[] = [];

	override toJSON() {
		return {
			"id": this.id || null,
			"v": this.v,
			"company": this.companyId,
			"category": this.category || "",
			"name": this.name || "",
			"notes": this.notes || "",
			"global": !!this.global,
			"usage": [...this.usage],
			"label": this.label.toJSON(),
			"badge": this.badge.toJSON(),
			"glyphs": this.glyphs.map(ARRAY_TO_JSON),
		};
	}
	override fromJSON(json: any, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"]) || !!(force && json);
		if (update) {
			this.id = ID(json["id"]);
			this.companyId = ID(json["company"]);
			this.category = json["category"] || "";
			this.name = json["name"] || "";
			this.notes = json["notes"] || "";
			this.global = !!json["global"];
			this.usage = (json["usage"] || []).map(CODIFY);
			this.label = new IconLabel(json["label"]);
			this.badge = new IconLabel(json["badge"]);
			this.glyphs = ((json["glyphs"] || []) as any[]).map(g => new IconGlyph(g));
		}
		return update;
	}

	// IRequestable
	/**
	 * The {@link id} is the key.
	 */
	getKey(): string { return this.id.toString(); }
}