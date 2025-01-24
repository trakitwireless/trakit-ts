import { double, ushort, uint } from '../Types';
import { StreetAddress } from './StreetAddress';

/**
	
 * GPS position information
*/
export class Position {
	/**
	Latitude
	 */
	lat: double = NaN;
	/**
	Longitude
	 */
	lng: double = NaN;
	/**
	Speed
	 */
	speed: double = NaN;
	/**
	Direction of travel
	 */
	bearing: ushort = NaN;
	/**
	Distance in meters from the sea level
	 */
	altitude: double = NaN;
	/**
	Threshold in meters for the accuracy of a position
	 */
	accuracy: uint = NaN;
	/**
	The Date/Time of the GPS reading
	 */
	dts: Date = DATE();
	/**
	A better description of the current road-segment
	 */
	streetAddress: StreetAddress;
	/**
	The posted speed limit for the road segment
	 */
	speedLimit: double = NaN;
	/**
	Provider Identifier
	 */
	origin: string = "";
	/**
	The road segment description
	 */
	get address(): string { return this.streetAddress?.toString() ?? ""; }
}