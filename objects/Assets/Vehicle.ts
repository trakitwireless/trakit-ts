import { MERGE } from "../API/Objects";
import { colour, double, ushort } from "../API/Types";
import { Asset } from "./Asset";
import { VehicleGeneral } from "./VehicleGeneral";
import { VehicleAdvanced } from "./VehicleAdvanced";

/**
 * The full details of a Vehicle, containing all the properties from the {@link VehicleGeneral} and {@link VehicleAdvanced} objects.
 */
export class Vehicle
	extends Asset {
	/**
	 * General details about this vehicle.
	 */
	override get general(): VehicleGeneral { return super.general as VehicleGeneral; }
	/**
	 * Advanced details about this vehicle.
	 */
	override get advanced(): VehicleAdvanced { return super.advanced as VehicleAdvanced; }
	
	/**
	 * The license plate.
	 */
	get plate(): string { return this.general.plate; }
	/**
	 * Manufacturer's unique identification number (Vehicle Identification Number).
	 */
	get vin(): string { return this.general.vin; }
	set vin(value: string) { this.general.vin = value; }
	/**
	 * Manufacturer's name.
	 */
	get make(): string { return this.general.make; }
	set make(value: string) { this.general.make = value; }
	/**
	 * Manufacturer's model name/number.
	 */
	get model(): string { return this.general.model; }
	set model(value: string) { this.general.model = value; }
	/**
	 * Year of manufacturing.
	 */
	get year(): ushort { return this.general.year; }
	set year(value: ushort) { this.general.year = value; }
	/**
	 * Primary colour of the trailer (given in 24bit hex; #RRGGBB)
	 */
	get colour(): colour { return this.general.colour; }
	set colour(value: colour) { this.general.colour = value; }
	/**
	 * The cumulative duration that the vehicle's engine has been running (in decimal hours).
	 */
	get engineHours(): double { return this.advanced.engineHours; }
	set engineHours(value: double) { this.advanced.engineHours = value; }

	override toJSON() {
		return MERGE(
			super.toJSON(),
			{
				"plate": this.plate || "",
				"vin": this.vin || "",
				"make": this.make || "",
				"model": this.model || "",
				"year": this.year || 0,
				"colour": this.colour || "",
				"engineHours": this.engineHours || 0,
			}
		);
	}
}