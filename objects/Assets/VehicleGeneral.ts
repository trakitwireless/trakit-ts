import { ID } from "../API/Functions";
import { MERGE } from "../API/Objects";
import { colour, ushort, JsonObject } from "../API/Types";
import { AssetGeneral } from "./AssetGeneral";

/**
 * Seldom changing details about a vehicle.
 */
export class VehicleGeneral
	extends AssetGeneral {
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

	override toJSON(): any {
		return this.suspended
			? super.toJSON()
			: MERGE(super.toJSON(), {
				"vin": this.vin || "",
				"plate": this.plate || "",
				"make": this.make || "",
				"model": this.model || "",
				"year": this.year || null,
				"colour": this.colour || "",
			});
	}
	override fromJSON(json: JsonObject, force?: boolean): boolean {
		const update = this.updateVersion(json?.["v"] as int[]) || !!(force && json);
		super.fromJSON(json, update);
		if (update) {
			this.plate = json["plate"] || "";
			this.vin = json["vin"] || "";
			this.make = json["make"] || "";
			this.model = json["model"] || "";
			this.year = ID(json["year"]) || 0;
			this.colour = json["colour"] || "";
		}
		return update;
	}
}