import { FLOAT } from '../Constants';
import { DATE, JSON_DATE, JSON_NUMBER } from '../Functions';
import { datetime, JsonObject, nothing } from '../Types';
import { IPosition, IStreetAddress } from './Interfaces';
import { LatLng, } from './LatLng';
import { StreetAddress, } from './StreetAddress';

/**
 * GPS position information
 */
export class Position
	implements IPosition {
	/**
	 * 
	 * @param json 
	 * @returns 
	 */
	static fromJSON(json: IPosition | JsonObject): Position {
		return new Position(
			json?.lat as number,
			json?.lng as number,
			json?.speed as number,
			json?.bearing as number,
			json?.accuracy as number,
			json?.dts as datetime,
			json?.speedLimit as number,
			json?.altitude as number,
			json?.streetAddress as IStreetAddress | JsonObject
		);
	}
	
	/**
	 * Latitude
	 */
	readonly lat: number;
	/**
	 * Longitude
	 */
	readonly lng: number;
	/**
	 * Speed
	 */
	readonly speed: number;
	/**
	 * Direction of travel
	 */
	readonly bearing: number;
	/**
	 * Distance in meters from the sea level
	 */
	readonly altitude: number;
	/**
	 * Threshold in meters for the accuracy of a position
	 */
	readonly accuracy: number;
	/**
	 * The Date/Time of the GPS reading
	 */
	readonly date: Date = DATE();
	/**
	 * The Date/Time of the GPS reading
	 */
	get dts(): string { return this.date.toISOString(); }
	/**
	 * A better description of the current road-segment
	 */
	readonly streetAddress: StreetAddress | null = null;
	/**
	 * The posted speed limit for the road segment
	 */
	readonly speedLimit: number | nothing;
	/**
	 * Provider Identifier
	 */
	readonly origin: string = "";
	/**
	 * The road segment description
	 */
	get address(): string { return this.streetAddress?.toString() ?? ""; }

	constructor(
		lat?: number | nothing,
		lng?: number | nothing,
		speed?: number | nothing,
		bearing?: number | nothing,
		accuracy?: number | nothing,
		dts?: Date | number | datetime | nothing,
		limit?: number | nothing,
		altitude?: number | nothing,
		street?: IStreetAddress | JsonObject | nothing
	) {
		this.lat = FLOAT(lat as any);
		this.lng = FLOAT(lng as any);
		this.speed = FLOAT(speed as any);
		this.bearing = FLOAT(bearing as any);
		this.accuracy = FLOAT(accuracy as any);
		this.date = DATE(dts as string);
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
	toString(delimiter: string = ","): string {
		delimiter = delimiter ?? "";
		return "("
			+ this.lat + delimiter
			+ this.lng + delimiter
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
	toJSON(): IPosition {
		return {
			"lat": this.lat,
			"lng": this.lng,
			"dts": this.date.toISOString(),
			"speed": JSON_NUMBER(this.speed),
			"speedLimit": JSON_NUMBER(this.speedLimit as number),
			"bearing": JSON_NUMBER(this.bearing),
			"altitude": JSON_NUMBER(this.altitude),
			"accuracy": JSON_NUMBER(this.accuracy),
			"streetAddress": this.streetAddress?.toJSON() || null,
		};
	}
}

// Copy all LatLng methods to Position prototype
// This is done because TypeScript does not support multiple inheritance
// and we want Position to have all the methods of LatLng without duplicating code.
for (const key of Object.keys(LatLng.prototype) as (keyof LatLng)[]) {
	if (!(key in Position.prototype)) {
		Object.defineProperty(
			Position.prototype,
			key,
			Object.getOwnPropertyDescriptor(LatLng.prototype, key) as PropertyDescriptor
		);
	}
}