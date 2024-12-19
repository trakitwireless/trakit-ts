import { double } from '../Types';

/// <summary>
/// 
/// </summary>
export interface ILatLng {
	/// <summary>
	/// Latitude
	/// </summary>
	lat: double;
	/// <summary>
	/// Longitude
	/// </summary>
	lng: double;
}

/// <summary>
/// A coordinate on the Earth.
/// </summary>
export class LatLng implements ILatLng {
	/// <summary>
	/// Let's consider the zero-zero coordinates to be invalid.
	/// </summary>
	public static readonly INVALID: LatLng = new LatLng(0, 0);

	/// <summary>
	/// Latitude
	/// </summary>
	public readonly lat: double;
	/// <summary>
	/// Longitude
	/// </summary>
	public readonly lng: double;

	constructor(lat: double, lng: double) {
		this.lat = lat;
		this.lng = lng;
	}
}