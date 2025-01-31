import { DATE, IS_AN, IS_NAN } from '../Functions';
import { ILatLng, IPosition, IStreetAddress } from './Interfaces';
import { LatLng, } from './LatLng';
import { StreetAddress, } from './StreetAddress';

/**
 * GPS position information
 */
export class Position extends LatLng implements IPosition {
	/**
	Speed
	 */
	speed: number;
	/**
	Direction of travel
	 */
	bearing: number;
	/**
	Distance in meters from the sea level
	 */
	altitude: number;
	/**
	Threshold in meters for the accuracy of a position
	 */
	accuracy: number;
	/**
	The Date/Time of the GPS reading
	 */
	date: Date = DATE();
	get dts(): string { return this.date.toISOString(); }
	/**
	A better description of the current road-segment
	 */
	streetAddress: StreetAddress;
	/**
	The posted speed limit for the road segment
	 */
	speedLimit: number;
	/**
	Provider Identifier
	 */
	origin: string = "";
	/**
	The road segment description
	 */
	get address(): string { return this.streetAddress?.toString() ?? ""; }

	constructor(
		lat: number,
		lng: number,
		speed: number,
		bearing: number,
		accuracy: number,
		dts: Date | string | number,
		limit: number,
		altitude: number,
		street: IStreetAddress
	) {
		super(lat, lng);
		this.speed = speed;
		this.bearing = bearing;
		this.accuracy = accuracy;
		this.date = DATE(dts);
		this.speedLimit = limit;
		this.altitude = altitude;
		this.streetAddress = StreetAddress.fromJSON(street);
	}

	/**
	 * Returns a text representation of this position.
	 * Returned strings cannot be converted back into {@link Position}
	 * objects, so don't use this for deserialization.
	 * @param delimiter
	 */
	override toString(delimiter: string = ","): string {
		delimiter = delimiter ?? "";
		return "("
			+ super.toString(delimiter) + delimiter
			+ this.speed + delimiter
			+ this.bearing + delimiter
			+ this.accuracy + delimiter
			+ this.altitude + delimiter
			+ (IS_NAN(this.date.valueOf()) ? "" : this.date.toISOString()) + delimiter
			+ this.speedLimit
			+ ")"
			+ this.address;
	}
	/**
	 * Creates a literal of this {@link Position}.
	 * Used internally by {@link JSON.stringify}.
	 */
	override toJSON(): IPosition {
		return {
			"lat": this.lat,
			"lng": this.lng,
			"dts": this.dts,
			"speed": IS_AN(this.speed)
				? this.speed
				: null,
			"speedLimit": IS_AN(this.speedLimit)
				? this.speedLimit
				: null,
			"bearing": IS_AN(this.bearing)
				? this.bearing
				: null,
			"altitude": IS_AN(this.altitude)
				? this.altitude
				: null,
			"accuracy": IS_AN(this.accuracy)
				? this.accuracy
				: null,
			"streetAddress": this.streetAddress?.toJSON(),
		};
	}
}