import { double, ushort, uint } from '../Types';
import { StreetAddress } from './StreetAddress';

/**
	
 * GPS position information
*/
export class Position {
	/**
	Latitude
	 */
	public lat: double = NaN;
	/**
	Longitude
	 */
	public lng: double = NaN;
	/**
	Speed
	 */
	public speed: double = NaN;
	/**
	Direction of travel
	 */
	public bearing: ushort = NaN;
	/**
	Distance in meters from the sea level
	 */
	public altitude: double = NaN;
	/**
	Threshold in meters for the accuracy of a position
	 */
	public accuracy: uint = NaN;
	/**
	The Date/Time of the GPS reading
	 */
	public dts: Date = DATE();
	/**
	A better description of the current road-segment
	 */
	public streetAddress: StreetAddress;
	/**
	The posted speed limit for the road segment
	 */
	public speedLimit: double = NaN;
	/**
	Provider Identifier
	 */
	public origin: string = "";
	/**
	The road segment description
	 */
	public get address(): string { return this.streetAddress?.toString() ?? ""; }
}