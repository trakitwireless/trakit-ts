import { ATAN2, COS, DEGREES_TO_RADIANS, POW, SIN, SQRT } from '../Constants';
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
		let lat1 = this.lat * DEGREES_TO_RADIANS,
			lat2 = latlng.lat * DEGREES_TO_RADIANS,
			lng1 = this.lng * DEGREES_TO_RADIANS,
			lng2 = latlng.lng * DEGREES_TO_RADIANS,
			dLat = lat2 - lat1,
			dLng = lng2 - lng1,
			sin_dLat_half = POW(SIN(dLat / 2), 2),  // minor optimization
			sin_dLng_half = POW(SIN(dLng / 2), 2),  // minor optimization
			distance = sin_dLat_half + COS(lat1) * COS(lat2) * sin_dLng_half;
		return ((2 * ATAN2(SQRT(distance), SQRT(1 - distance))) * Planet.EARTH_RADIUS);
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
				const lat1 = Planet.normalizeLatitude(this.lat) * DEGREES_TO_RADIANS,
					lat2 = Planet.normalizeLatitude(latlng.lat) * DEGREES_TO_RADIANS,
					dLng = (latlng.lng - this.lng) * DEGREES_TO_RADIANS,
					cos_lat2 = COS(lat2),    // minor optimization
					bearing = ATAN2(SIN(dLng) * cos_lat2, COS(lat1) * SIN(lat2) - SIN(lat1) * cos_lat2 * COS(dLng)) * RADIANS_TO_DEGREES;
			return (bearing + 360) % 360;
		}
	}
	/// <summary>
	/// Returns a new coordinate at the given distance and bearing from this coordinate
	/// </summary>
	/// <param name="meters">Distance</param>
	/// <param name="bearing">Bearing in degrees (not radians)</param>
	/// <returns></returns>
	public translateTo(meters: double, bearing: double): LatLng {
			const distance = meters / Planet.EARTH_RADIUS,
			heading = bearing * DEGREES_TO_RADIANS,
			lat1 = lat * DEGREES_TO_RADIANS,
			lng1 = lng * DEGREES_TO_RADIANS,
			lat2 = ASIN(SIN(lat1) * COS(distance) + COS(lat1) * SIN(distance) * COS(heading)),
			lng2 = lng1 + ATAN2(SIN(heading) * SIN(distance) * COS(lat1), COS(distance) - SIN(lat1) * SIN(lat2));
		return new LatLng(lat2 * RADIANS_TO_DEGREES, lng2 * RADIANS_TO_DEGREES);
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