import { double, ushort, uint } from '../Types';
import { StreetAddress } from './StreetAddress';

/// <summary>
/// GPS position information
/// </summary>
export class Position {
	/// <summary>Latitude</summary>
	public lat: double = NaN;
	/// <summary>Longitude</summary>
	public lng: double = NaN;
	/// <summary>Speed</summary>
	public speed: double = NaN;
	/// <summary>Direction of travel</summary>
	public bearing: ushort = NaN;
	/// <summary>Distance in meters from the sea level</summary>
	public altitude: double = NaN;
	/// <summary>Threshold in meters for the accuracy of a position</summary>
	public accuracy: uint = NaN;
	/// <summary>The Date/Time of the GPS reading</summary>
	public dts: Date = DATE();
	/// <summary>A better description of the current road-segment</summary>
	public streetAddress: StreetAddress;
	/// <summary>The posted speed limit for the road segment</summary>
	public speedLimit: double = NaN;
	/// <summary>Provider Identifier</summary>
	public origin: string = "";
	/// <summary>The road segment description</summary>
	public get address(): string { return this.streetAddress?.toString() ?? ""; }
}