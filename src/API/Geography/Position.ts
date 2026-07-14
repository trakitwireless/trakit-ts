import { CODIFY } from '../Codifier';
import { FLOAT } from '../Constants';
import { DATE, JSON_NUMBER, IS_NUMBER } from '../Functions';
import { datetime, JsonObject, nothing } from '../Types';
import { LONGITUDE_NORMALIZED } from './Functions';
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
	 * 
	 * @param json 
	 * @returns 
	 */
	static override fromJSON(json: IPosition | JsonObject): Position {
		return new Position(
			json?.lat as number,
			json?.lng as number,
			json?.speed as number,
			json?.bearing as number,
			json?.accuracy as number,
			json?.dts as datetime,
			json?.address as string,
			json?.speedLimit as number,
			json?.altitude as number,
			json?.streetAddress as IStreetAddress | JsonObject
		);
	}

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
	get dts(): string { return this.date.toJSON() ?? ""; }
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
	readonly address: string;

	constructor(
		lat?: number | nothing,
		lng?: number | nothing,
		speed?: number | nothing,
		bearing?: number | nothing,
		accuracy?: number | nothing,
		dts?: Date | number | datetime | nothing,
		address?: string | nothing,
		limit?: number | nothing,
		altitude?: number | nothing,
		street?: IStreetAddress | JsonObject | nothing
	) {
		super(lat as any, lng as any);
		this.speed = !speed || (speed = FLOAT(speed as any)) < 0 ? 0 : speed;
		this.bearing = LONGITUDE_NORMALIZED(FLOAT(bearing as any));
		this.accuracy = FLOAT(accuracy as any);
		this.date = DATE(dts as string);
		this.address = String(address ?? "");
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
			+ this.date.toJSON() + delimiter
			+ this.speedLimit
			+ ")"
			+ (this.streetAddress?.toString() ?? this.address);
	}
	/**
	 * Creates a literal of this {@link Position}.
	 * Used internally by {@link JSON.stringify}.
	 */
	override toJSON(): IPosition & JsonObject {
		return {
			...super.toJSON(),
			"dts": this.date.toJSON(),
			"speed": JSON_NUMBER(this.speed),
			"speedLimit": JSON_NUMBER(this.speedLimit as number),
			"bearing": JSON_NUMBER(this.bearing),
			"altitude": JSON_NUMBER(this.altitude),
			"accuracy": JSON_NUMBER(this.accuracy),
			"address": this.address,
			"streetAddress": this.streetAddress?.toJSON() || null,
		} as IPosition & JsonObject;
	}

	/**
	 * 
	 * @param position 
	 * @returns 
	 */
	override isEqual(position: Position | IPosition): boolean {
		return !!(
			super.isEqual(position)
			&& IS_NUMBER(position.speed)
			&& (position.speed === this.speed || isNaN(position.speed) && isNaN(this.speed))
			&& IS_NUMBER(position.bearing)
			&& (position.bearing === this.bearing || isNaN(position.bearing) && isNaN(this.bearing))
			&& IS_NUMBER(position.accuracy)
			&& (position.accuracy === this.accuracy || isNaN(position.accuracy) && isNaN(this.accuracy))
			&& (!!position.dts || (position as Position).date instanceof Date)
			&& (position.dts === this.dts || (position as Position).date?.valueOf() === this.date.valueOf() || (isNaN((position as Position).date?.valueOf()) && isNaN(this.date.valueOf())))
			&& IS_NUMBER(position.speedLimit)
			&& (position.speedLimit === this.speedLimit || isNaN(position.speedLimit) && isNaN(this.speedLimit as number))
			&& IS_NUMBER(position.altitude)
			&& (position.altitude === this.altitude || isNaN(position.altitude) && isNaN(this.altitude))
			&& CODIFY((position as Position).address) === CODIFY(this.address)
		);
	}
}