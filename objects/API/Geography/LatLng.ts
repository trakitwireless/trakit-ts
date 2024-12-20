import { double } from '../Types';
import * as Planet from './Planet';

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
	
	/// <summary>
	/// Calculates the distance across the surface of the globe to another coordinate
	/// </summary>
	/// <param name="latlng"></param>
	/// <returns>Distance in meters</returns>
	public distanceTo(latlng: LatLng): double {
		let lat1 = this.lat * Planet.DEGREES_TO_RADIANS,
			lat2 = latlng.lat * Planet.DEGREES_TO_RADIANS,
			lng1 = this.lng * Planet.DEGREES_TO_RADIANS,
			lng2 = latlng.lng * Planet.DEGREES_TO_RADIANS,
			dLat = lat2 - lat1,
			dLng = lng2 - lng1,
			sin_dLat_half = Math.Pow(Math.Sin(dLat / 2), 2),  // minor optimization
			sin_dLng_half = Math.Pow(Math.Sin(dLng / 2), 2),  // minor optimization
			distance = sin_dLat_half + Math.Cos(lat1) * Math.Cos(lat2) * sin_dLng_half;
		return ((2 * Math.Atan2(Math.Sqrt(distance), Math.Sqrt(1 - distance))) * Planet.EARTH_RADIUS);
	}
	/// <summary>
	/// Calculates the starting bearing across the surface of the globe from the current coordinate to the given coordinate
	/// </summary>
	/// <param name="latlng"></param>
	/// <returns>Bearing in degrees (not radians)</returns>
	public bearingTo(latlng: LatLng): double {
		if (Planet.latitudeIsPole(this.lat)) {  // starting at one of the poles
			return this.lat > 0 ? 180 : 0;
		} else {
				double lat1 = Planet.normalizeLatitude(this.lat) * Planet.DEGREES_TO_RADIANS,
				lat2 = Planet.normalizeLatitude(latlng.lat) * Planet.DEGREES_TO_RADIANS,
				dLng = (latlng.lng - this.lng) * Planet.DEGREES_TO_RADIANS,
				cos_lat2 = Math.Cos(lat2),    // minor optimization
				bearing = Math.Atan2(Math.Sin(dLng) * cos_lat2, Math.Cos(lat1) * Math.Sin(lat2) - Math.Sin(lat1) * cos_lat2 * Math.Cos(dLng)) * Planet.RADIANS_TO_DEGREES;
			return (bearing + 360) % 360;
		}
	}
	/// <summary>
	/// Returns a new coordinate at the given distance and bearing from this coordinate
	/// </summary>
	/// <param name="meters">Distance</param>
	/// <param name="bearing">Bearing in degrees (not radians)</param>
	/// <returns></returns>
	public translateTo(double meters, double bearing): LatLng {
			double distance = meters / Planet.EARTH_RADIUS,
			heading = bearing * Planet.DEGREES_TO_RADIANS,
			lat1 = lat * Planet.DEGREES_TO_RADIANS,
			lng1 = lng * Planet.DEGREES_TO_RADIANS,
			lat2 = Math.Asin(Math.Sin(lat1) * Math.Cos(distance) + Math.Cos(lat1) * Math.Sin(distance) * Math.Cos(heading)),
			lng2 = lng1 + Math.Atan2(Math.Sin(heading) * Math.Sin(distance) * Math.Cos(lat1), Math.Cos(distance) - Math.Sin(lat1) * Math.Sin(lat2));
		return new LatLng(lat2 * Planet.RADIANS_TO_DEGREES, lng2 * Planet.RADIANS_TO_DEGREES);
	}
	/// <summary>
	/// Returns true if this coordinate is not NaN and not zero-zero.
	/// </summary>
	/// <returns></returns>
	public isValid(): boolean {
		return !isNaN(this.lat) && !isFinite(this.lat)
			&& !isNaN(this.lng) && !isFinite(this.lng)
			&& !this.isEqual(LatLng.INVALID);
	}
	/// <summary>
	/// Checks to see if the postions are considered to be the same location with an accuracy of 9 decimal places.
	/// </summary>
	/// <param name="other"></param>
	/// <returns></returns>
	public isEqual(other: LatLng): boolean {
		return other != null
			&& this.distanceTo(other) < 1e-9;
	}
}