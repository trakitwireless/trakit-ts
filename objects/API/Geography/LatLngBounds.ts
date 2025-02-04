import {
	ILatLng,
	ILatLng_instanceOf,
	ILatLngBounds_instanceOf,
	LatLngBoundsExpansion,
} from './Interfaces';
import { LatLng, } from './LatLng';
import { ISerializable } from '../Interfaces/ISerializable';
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
import {
	IS_AN,
	ROUND_TO,
} from '../Functions';
import { ABS, } from '../Constants';

/**
 * A boundary on the globe
 */
export interface ILatLngBounds {
	/**
	 * Northern latitude
	 */
	north: number;
	/**
	 * Eastern longitude
	 */
	east: number;
	/**
	 * Southern latitude
	 */
	south: number;
	/**
	 * Western longitude
	 */
	west: number;
}
/**
 * A boundary on the globe
 */
export class LatLngBounds implements ILatLngBounds, ISerializable {
	/**
	 * 
	 * @param object 
	 */
	static fromJSON(object: any): LatLngBounds {
		const bounds = new LatLngBounds();
		if (ILatLngBounds_instanceOf(object)) {
			bounds.east = object.east;
			bounds.north = object.north;
			bounds.west = object.west;
			bounds.south = object.south;
		}
		return bounds.validate();
	}

	/**
	 * Northern latitude
	 */
	north: number = NaN;
	/**
	 * Eastern longitude
	 */
	east: number = NaN;
	/**
	 * Southern latitude
	 */
	south: number = NaN;
	/**
	 * Western longitude
	 */
	west: number = NaN;

	constructor(...args: LatLngBoundsExpansion[]) {
		args.forEach(a => this.__expander(a));
	}

	/**
	 * Returns a string representation of this {@link LatLng}.
	 * @param delimiter	The boundary is delimited by a comma (,) by default, but you can override with your own value.
	 * @returns A string in the format of "lat,lng".
	 */
	toString(delimiter: string = ","): string {
		return [
			this.north,
			this.east,
			this.south,
			this.west,
		].join(delimiter ?? "");
	}
	/**
	 * Creates a literal of this {@link LatLngBounds}.
	 * Used internally by {@link JSON.stringify}.
	 */
	toJSON(): any {
		this.validate();
		return {
			"north": this.north,
			"east": this.east,
			"south": this.south,
			"west": this.west,
		};
	}
	/**
	 * Compares this LatLng to another to see if they are equivalent.
	 * @param other		The other LatLng to compare
	 * @param tolerance	Distance tolerance before considering two nearly identical coordinates to be equal.
	 */
	isEqual(other: ILatLngBounds, tolerance: number = MAX_SAME_DISTANCE) {
		return ILatLngBounds_instanceOf(other)
			&& LATLNG_DISTANCE(this.getNorthEast(), { lat: other.north, lng: other.east }) < tolerance
			&& LATLNG_DISTANCE(this.getSouthWest(), { lat: other.south, lng: other.west }) < tolerance;
	}
	/**
	 * 
	 */
	isValid(): boolean {
		return this.north >= this.south
			&& this.east >= this.west
			&& !(
				ABS(this.north) > 90
				|| ABS(this.south) > 90
				|| ABS(this.east) > 180
				&& ABS(this.east) > 180
			);
	}
	/**
	 * 
	 */
	isEmpty(): boolean {
		return this.isValid()
			&& (
				LATLNG_DISTANCE(this.getNorthEast(), this.getNorthWest()) < MAX_SAME_DISTANCE
				|| LATLNG_DISTANCE(this.getNorthEast(), this.getSouthEast()) < MAX_SAME_DISTANCE
			);
	}

	/**
	 * Checks if a {@link LatLng} is contained within this boundary.
	 * @param pin	The point to check
	 */
	contains(pin: ILatLng) :boolean{
		this.validate();
		const lat = LATITUDE_NORMALIZED(pin.lat),
			lng = LONGITUDE_NORMALIZED(pin.lng, lat) + 360;
		return lng <= LONGITUDE_NORMALIZED(this.east) + 360
			&& lng >= LONGITUDE_NORMALIZED(this.west) + 360
			&& LATLNG_GREAT_CIRCLE(
				this.getNorthWest(),
				{ lat, lng },
				this.getNorthEast()
			) <= 0
			&& LATLNG_GREAT_CIRCLE(
				this.getSouthWest(),
				{ lat, lng },
				this.getSouthEast()
			) >= 0;
	}
	/**
	 * Checks if a {@link LatLngBounds} is contained within this boundary.
	 * @expose
	 * @this {LatLngBounds}
	 * @param bounds	The other boundary to check
	 */
	encloses(bounds: ILatLngBounds):boolean {
		this.validate();
		const north = LATITUDE_NORMALIZED(bounds.north),
			east = LONGITUDE_NORMALIZED(bounds.east, north) + 360,
			south = LATITUDE_NORMALIZED(bounds.south),
			west = LONGITUDE_NORMALIZED(bounds.west, south) + 360;
		return east <= LONGITUDE_NORMALIZED(this.east) + 360
			&& west >= LONGITUDE_NORMALIZED(this.west) + 360
			&& LATLNG_GREAT_CIRCLE(
				this.getNorthWest(),
				{ lat: bounds.north, lng: bounds.west },
				this.getNorthEast()
			) <= 0
			&& LATLNG_GREAT_CIRCLE(
				this.getSouthWest(),
				{ lat: bounds.south, lng: bounds.east },
				this.getSouthEast()
			) >= 0;
	}
	/**
	 * Checks if a {@link LatLngBounds} overlaps this boundary.
	 * Also returns true if either boundary's {@link LatLngBounds#encloses} returns true.
	 * @param other	The other boundary to check
	 */
	overlaps(other: ILatLngBounds) :boolean{
		this.validate();
		const bounds = new LatLngBounds(other);
		return (
			this.contains(bounds.getNorthEast())
			|| this.contains(bounds.getNorthWest())
			|| this.contains(bounds.getSouthWest())
			|| this.contains(bounds.getSouthEast())
			|| bounds.encloses(this)
		);
	}

	/**
	 * 
	 * @param object 
	 */
	private __expander(object: LatLngBoundsExpansion): void {
		if (object instanceof Array) {
			object.forEach(this.__expander, this);
		} else if (ILatLngBounds_instanceOf(object)) {
			const north = LATITUDE_NORMALIZED(object.north),
				east = LONGITUDE_NORMALIZED(object.east, north),
				south = LATITUDE_NORMALIZED(object.south),
				west = LONGITUDE_NORMALIZED(object.west, south);
			if (east > this.east || !IS_AN(this.east)) this.east = east;
			if (west < this.west || !IS_AN(this.west)) this.west = west;
			//	if (north > this.north || !IS_AN(this.north)) this.north = north;
			if (!IS_AN(this.north) || (north > this.north && (this.east === east || this.west === west))) {
				this.north = north;
			} else if (IS_AN(north)) {
				const pin = { lat: north, lng: east },
					distance = LATLNG_GREAT_CIRCLE(
						this.getNorthWest(),
						pin,
						this.getNorthEast()
					);
				if (distance > 0) {
					this.north = LATLNG_TRANSLATE(pin, distance, 0).lat;
				}
			}
			if (!IS_AN(this.south) || (south < this.south && (this.east === east || this.west === west))) {
				this.south = south;
			} else if (IS_AN(south)) {
				const pin = { lat: south, lng: west },
					distance = LATLNG_GREAT_CIRCLE(
						this.getSouthEast(),
						pin,
						this.getSouthWest()
					);
				if (distance > 0) {
					this.south = LATLNG_TRANSLATE(pin, distance, 180).lat;
				}
			}
		} else if (ILatLng_instanceOf(object)) {
			const lat = LATITUDE_NORMALIZED(object.lat),
				lng = LONGITUDE_NORMALIZED(object.lng, lat);
			if (lng > this.east || !IS_AN(this.east)) this.east = lng;
			if (lng < this.west || !IS_AN(this.west)) this.west = lng;
			if (!IS_AN(this.north) || (lat > this.north && (this.east === lng || this.west === lng))) {
				this.north = lat;
			} else if (IS_AN(lat)) {
				const pin = { lat, lng },
					distance = LATLNG_GREAT_CIRCLE(
						this.getNorthWest(),
						pin,
						this.getNorthEast()
					);
				if (distance > 0) {
					this.north = LATLNG_TRANSLATE(pin, distance, 0).lat;
				}
			}
			//	if (lat < this.south || !IS_AN(this.south)) this.south = lat;
			if (!IS_AN(this.south) || (lat < this.south && (this.east === lng || this.west === lng))) {
				this.south = lat;
			} else if (IS_AN(lat)) {
				const pin = { lat, lng },
					distance = LATLNG_GREAT_CIRCLE(
						this.getSouthEast(),
						pin,
						this.getSouthWest()
					);
				if (distance > 0) {
					this.south = LATLNG_TRANSLATE(pin, distance, 180).lat;
				}
			}
		}
	}
	/**
	 * Extends the boundary to envelop the given point(s) but does not automatically
	 *		validate. This comes in efficient when doing many operations on a single
	 *		PointBounds
	 */
	expand(latlngs: LatLngBoundsExpansion) {
		this.__expander(latlngs);
		return this;
	}
	/**
	 * Extends the boundary to envelop the given point(s) and automatically validates
	 */
	extend(latlngs: LatLngBoundsExpansion):this {
		this.__expander(latlngs);
		return this.validate();
	}

	/**
	 * 
	 */
	getCentre(): LatLng {
		const ne = this.getNorthEast(),
			sw = this.getSouthWest(),
			centre = LATLNG_TRANSLATE(
				ne,
				LATLNG_DISTANCE(ne, sw) / 2,
				LATLNG_ANGLE(ne, sw)
			);
		return new LatLng(centre.lat, centre.lng);
	}
	/**
	 * 
	 */
	getNorthEast(): LatLng { return new LatLng(this.north, this.east); }
	/**
	 * 
	 */
	getNorthWest(): LatLng { return new LatLng(this.north, this.west); }
	/**
	 * 
	 */
	getSouthEast(): LatLng { return new LatLng(this.south, this.east); }
	/**
	 * 
	 */
	getSouthWest(): LatLng { return new LatLng(this.south, this.west); }
	/**
	 * The mid-point coordinate between the north east and north west corners.
	 */
	getNorthMiddle(): LatLng {
		const latlng = LATLNG_MIDPOINT(this.getNorthEast(), this.getNorthWest());
		return new LatLng(latlng.lat, latlng.lng);
	}
	/**
	 * The mid-point coordinate between the south east and south west corners.
	 */
	getSouthMiddle():LatLng {
		const latlng = LATLNG_MIDPOINT(this.getSouthEast(), this.getSouthWest());
		return new LatLng(latlng.lat, latlng.lng);
	}
	/**
	 * The mid-point coordinate between the north east and north west corners.
	 */
	getEastMiddle() :LatLng{
		const latlng = LATLNG_MIDPOINT(this.getNorthEast(), this.getSouthEast());
		return new LatLng(latlng.lat, latlng.lng);
	}
	/**
	 * The mid-point coordinate between the south east and south west corners.
	 */
	getWestMiddle():LatLng {
		const latlng = LATLNG_MIDPOINT(this.getNorthWest(), this.getSouthWest());
		return new LatLng(latlng.lat, latlng.lng);
	}
	/**
	 * The distance in meters between the north-east corner and the south-west corner.
	 */
	getDiagonalDistance() :number{
		return LATLNG_DISTANCE(this.getNorthEast(), this.getSouthWest());
	}
	/**
	 * The distance in meters between the north-most border and the south-most border.
	 */
	getLatitudinalDistance() :number{
		return LATLNG_DISTANCE(this.getNorthEast(), this.getSouthEast());
	}
	/**
	 * The distance in meters between the east-most and the west-most points along the border closest to the equator.
	 */
	getLongitudinalDistance():number {
		return ABS(this.north) < ABS(this.south)
			? LATLNG_DISTANCE(this.getNorthEast(), this.getNorthWest())
			: LATLNG_DISTANCE(this.getSouthEast(), this.getSouthWest());
	}

	/**
	 * 
	 */
	validate(): this {
		const north = LATITUDE_NORMALIZED(this.north),
			east = LONGITUDE_NORMALIZED(this.east, north),
			south = LATITUDE_NORMALIZED(this.south),
			west = LONGITUDE_NORMALIZED(this.west, south);
		this.north = north > south ? north : south;
		this.south = south < north ? south : north;
		this.east = east > west ? east : west;
		this.west = west < east ? west : east;
		return this;
	}
}