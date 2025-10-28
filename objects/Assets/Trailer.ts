import { ushort } from '../API/Types';
import { Asset } from './Asset';
import { TrailerGeneral } from './TrailerGeneral';

/**
 * The full details of a Trailer, containing all the properties from the {@link TrailerGeneral} and {@link AssetAdvanced} objects.
 */
export class Trailer
	extends Asset {
	/**
	 * General details about this vehicle.
	 */
	override get general(): TrailerGeneral { return super.general as TrailerGeneral; }
	
	/**
	 * Manufacturer's unique identification number for this trailer.
	 */
	get serial(): string { return this.general.serial; }
	set serial(value: string) { this.general.serial = value; }
	/**
	 * The license plate.
	 */
	get plate(): string { return this.general.plate; }
	set plate(value: string) { this.general.plate = value; }
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
	 * Primary colour of the vehicle (given in 24bit hex; #RRGGBB)
	 */
	get colour(): string { return this.general.colour; }
	set colour(value: string) { this.general.colour = value; }
}