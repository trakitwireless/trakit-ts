import { ID } from "../API/Functions";
import { JsonObject, colour, int, ushort } from "../API/Types";
import { AssetGeneral } from "./AssetGeneral";

/**
 * Seldom changing details about a trailer.
 */
export class TrailerGeneral
	extends AssetGeneral {
	/**
	 * The license plate.
	 */
	plate: string = "";
	/**
	 * Manufacturer's unique identification number for this trailer.
	 */
	serial: string = "";
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
	 * Primary colour of the trailer (given in 24bit hex; #RRGGBB)
	 */
	colour: colour = "";

	override toJSON() {
		return this.suspended
			? super.toJSON()
			: {
				...super.toJSON(),
				"serial": this.serial || "",
				"plate": this.plate || "",
				"make": this.make || "",
				"model": this.model || "",
				"year": this.year || null,
				"colour": this.colour || "",
			};
	}
	override fromJSON(json: JsonObject, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"] as int[]) || !!(force && json);
		super.fromJSON(json, update);
		if (update) {
			this.plate = json["plate"] as string || "";
			this.serial = json["serial"] as string || "";
			this.make = json["make"] as string || "";
			this.model = json["model"] as string || "";
			this.year = ID(json["year"]) || 0;
			this.colour = json["colour"] as string || "";
		}
		return update;
	}
}