import {
	ATAN2,
	COS,
	DEGREES_TO_RADIANS,
	LOG,
	PI,
	POW,
	SIN,
	SQRT
} from '../Constants';
import { IS_NAN, IS_NUMBER, PYTHAGORA, ROUND_TO } from '../Functions';
import { Point } from '../Geometry/Point';
import {
	LATITUDE_NORMALIZED,
	LATLNG_ANGLE,
	LATLNG_DISTANCE,
	LATLNG_GREAT_CIRCLE,
	LATLNG_MIDPOINT,
	LATLNG_TRANSLATE,
	LONGITUDE_NORMALIZED,
	MAX_SAME_DISTANCE
} from './Functions';
import { ILatLng, ILatLng_instanceOf } from './Interfaces';
import { LatLngBounds } from './LatLngBounds';


/**
 * A coordinate on the Earth.
 */
export class LatLng implements ILatLng {
	/**
	 * Let's consider the zero-zero coordinates to be invalid.
	 */
	static readonly INVALID: LatLng = new LatLng(0, 0);

	/**
	 * Latitude
	 */
	readonly lat: number;
	/**
	 * Longitude
	 */
	readonly lng: number;

	constructor(lat: number, lng: number) {
		this.lat = lat;
		this.lng = lng;
	}
	
	/**
	 * Calculates the distance across the surface of the globe to another coordinate
	 * @param pin	
	 */
	distanceTo(pin: ILatLng): number {
		return LATLNG_DISTANCE(this, pin);
	}
	/**
	 * Calculates the starting bearing across the surface of the globe from the current coordinate to the given coordinate
	 * @param pin	
	 */
	bearingTo(pin: ILatLng): number {
		return LATLNG_ANGLE(this, pin);
	}
	/**
	 * Returns a new coordinate at the given distance and bearing from this coordinate
	 * @param meters	
	 * @param bearing	
	 */
	toTranslated(meters: number, bearing: number): LatLng {
		const latlng = LATLNG_TRANSLATE(this, meters, bearing);
		return new LatLng(latlng.lat, latlng.lng);
	}
	/**
	 * Returns a new LatLng at the half-way point between this and the given LatLng.
	 * @param pin	The other coordinate.
	 * @throws {Error}	Either latitude or longitude is NaN
	 */
	toBetween(pin: ILatLng): LatLng {
		const latlng = LATLNG_MIDPOINT(this, pin);
		return new LatLng(latlng.lat, latlng.lng);
	}
	/**
	 * Returns true if this coordinate is not NaN and not zero-zero.
	 */
	isValid(): boolean {
		return !isNaN(this.lat) && !isFinite(this.lat)
			&& !isNaN(this.lng) && !isFinite(this.lng)
			&& !this.isEqual(LatLng.INVALID);
	}
	/**
	 * Checks to see if the postions are considered to be the same location with an accuracy of 9 decimal places.
	 * @param other	
	 */
	isEqual(other: LatLng): boolean {
		return other != null
			&& this.distanceTo(other) < 1e-9;
	}

	/**
	 * Returns a string representation of this {@link LatLng}.
	 * @param delimiter	The boundary is delimited by a comma (,) by default, but you can override with your own value.
	 * @returns A string in the format of "lat,lng".
	 */
	toString(delimiter: string = ","): string {
		return [ROUND_TO(this.lat, 8), ROUND_TO(this.lng, 8)].join(delimiter ?? "");
	}
	/**
	 * Creates a literal of this {@link LatLng}.
	 * Used internally by {@link JSON.stringify}.
	 */
	toJSON() {
		return IS_NAN(this.lat)
			|| IS_NAN(this.lng)
			? null : {
				"lat": this.lat,
				"lng": this.lng,
			};
	}
	/**
	 * Creates a Point based on the given magnifier.
	 */
	toRadians(magnifier: number = 1): Point {
		var sin = SIN(this.lat * DEGREES_TO_RADIANS);
		return new Point(
			(1 + (this.lng / 180)) * magnifier,
			(1 - 0.5 / PI * LOG((1 + sin) / (1 - sin))) * magnifier
		);
	}
	/**
	 * Creates a square LatLngBounds centred around this LatLng.
	 * @param radius	The closest distance (in meters) from this coordinate to the edges of the new LatLngBounds.
	 */
	toBounds(radius: number): LatLngBounds {
		var distance = PYTHAGORA(radius, radius);
		return new LatLngBounds(
			LATLNG_TRANSLATE(this, distance, 45),
			LATLNG_TRANSLATE(this, distance, -135)
		);
	}
	/**
	 * Compares this LatLng to another to see if they are equivalent.
	 * @param other		The other LatLng to compare
	 * @param tolerance	Distance tolerance before considering two nearly identical coordinates to be equal.
	 */
	equals(other: ILatLng, tolerance: number = MAX_SAME_DISTANCE) {
		return ILatLng_instanceOf(other)
			&& LATLNG_DISTANCE(this, other) < tolerance;
	}
}