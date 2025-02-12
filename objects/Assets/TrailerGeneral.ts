﻿import { ID } from "../API/Functions";
import { MERGE } from "../API/Objects";
import { ushort } from "../API/Types";
import { AssetGeneral } from "./AssetGeneral";

/**
 * Seldom changing details about a trailer.
 */
export class TrailerGeneral
	extends AssetGeneral {
	/**
	 * The license plate.
	 *  <override max-length="50" />
	 */
	plate: string = "";
	/**
	 * Manufacturer's unique identification number for this trailer.
	 *  <override max-length="50" />
	 */
	serial: string = "";
	/**
	 * Manufacturer's name.
	 *  <override max-length="50" />
	 */
	make: string = "";
	/**
	 * Manufacturer's model name/number.
	 *  <override max-length="50" />
	 */
	model: string = "";
	/**
	 * Year of manufacturing.
	 */
	year: ushort = NaN;
	/**
	 * Primary colour of the trailer (given in 24bit hex; #RRGGBB)
	 *  <override max-length="22" format="colour" />
	 */
	colour: string = "";

	override toJSON(): any {
		return MERGE(super.toJSON(), {
			"serial": this.serial || "",
			"plate": this.plate || "",
			"make": this.make || "",
			"model": this.model || "",
			"year": this.year || null,
			"colour": this.colour || "",
		});
	}
	override fromJSON(json: any, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"]) || !!(force && json);
		super.fromJSON(json, update);
		if (update) {
			this.plate = json["plate"] || "";
			this.serial = json["serial"] || "";
			this.make = json["make"] || "";
			this.model = json["model"] || "";
			this.year = ID(json["year"]) || 0;
			this.colour = json["colour"] || "";
		}
		return update;
	}
}