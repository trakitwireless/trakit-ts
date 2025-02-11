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
}