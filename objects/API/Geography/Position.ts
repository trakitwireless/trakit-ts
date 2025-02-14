import { FLOAT } from '../Constants';
import { DATE, JSON_DATE, JSON_NUMBER } from '../Functions';
import { IPosition, IStreetAddress } from './Interfaces';
import { LatLng, } from './LatLng';
import { StreetAddress, } from './StreetAddress';

/**
 * GPS position information
 */
export class Position
	extends LatLng
	implements IPosition {
	/**
	 * Speed
	 */
	speed: number;
	/**
	 * Direction of travel
	 */
	bearing: number;
	/**
	 * Distance in meters from the sea level
	 */
	altitude: number;
	/**
	 * Threshold in meters for the accuracy of a position
	 */
	accuracy: number;
	/**
	 * The Date/Time of the GPS reading
	 */
	date: Date = DATE();
	/**
	 * The Date/Time of the GPS reading
	 */
	get dts(): string { return this.date.toISOString(); }
	/**
	 * A better description of the current road-segment
	 */
	streetAddress: StreetAddress | null = null;
	/**
	 * The posted speed limit for the road segment
	 */
	speedLimit: number;
	/**
	 * Provider Identifier
	 */
	origin: string = "";
	/**
	 * The road segment description
	 */
	get address(): string { return this.streetAddress?.toString() ?? ""; }

	constructor(
		lat?: number,
		lng?: number,
		speed?: number,
		bearing?: number,
		accuracy?: number,
		dts?: Date | string | number,
		limit?: number,
		altitude?: number,
		street?: IStreetAddress
	) {
		super(lat || NaN, lng || NaN);
		this.speed = FLOAT(speed as any);
		this.bearing = FLOAT(bearing as any);
		this.accuracy = FLOAT(accuracy as any);
		this.date = DATE(dts);
		this.speedLimit = FLOAT(limit as any);
		this.altitude = FLOAT(altitude as any);
		if (street) this.streetAddress = StreetAddress.fromJSON(street);
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
			+ JSON_DATE(this.date) + delimiter
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
			"dts": this.date.toISOString(),
			"speed": JSON_NUMBER(this.speed),
			"speedLimit": JSON_NUMBER(this.speedLimit),
			"bearing": JSON_NUMBER(this.bearing),
			"altitude": JSON_NUMBER(this.altitude),
			"accuracy": JSON_NUMBER(this.accuracy),
			"streetAddress": this.streetAddress?.toJSON() || null,
		};
	}
}