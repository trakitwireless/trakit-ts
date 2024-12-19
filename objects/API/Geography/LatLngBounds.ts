import { ILatLng, LatLng } from './LatLng';
import { double, JsonObject } from '../Types';
import { ISerializable } from '../Interfaces/ISerializable';

/// <summary>
/// A boundary on the globe
/// </summary>
export interface ILatLngBounds {
	/// <summary>
	/// Northern latitude
	/// </summary>
	north: double;
	/// <summary>
	/// Eastern longitude
	/// </summary>
	east: double;
	/// <summary>
	/// Southern latitude
	/// </summary>
	south: double;
	/// <summary>
	/// Western longitude
	/// </summary>
	west: double;
}
/// <summary>
/// A boundary on the globe
/// </summary>
export class LatLngBounds implements ILatLngBounds, ISerializable {
	/// <summary>
	/// Northern latitude
	/// </summary>
	public north: double = NaN;
	/// <summary>
	/// Eastern longitude
	/// </summary>
	public east: double = NaN;
	/// <summary>
	/// Southern latitude
	/// </summary>
	public south: double = NaN;
	/// <summary>
	/// Western longitude
	/// </summary>
	public west: double = NaN;

	constructor(...args: ILatLng[] | ILatLngBounds[] | ILatLng[][] | ILatLngBounds[][]) {
		args.forEach(a => this.__expander(a));
	}

	/**
	 * 
	 * @param object 
	 **/
	__expander(object: ILatLng | ILatLngBounds | ILatLng[] | ILatLngBounds[]): void {
		if (object instanceof Array || typeof object.forEach === "function") {
			object.forEach(this.__expander, this);
		} else if (object) {
			if (object instanceof LatLngBounds || IS_AN(object.north) && IS_AN(object.east) && IS_AN(object.south) && IS_AN(object.west)) {
				var north = LATITUDE_NORMALIZED(object.north),
					east = LONGITUDE_NORMALIZED(object.east),
					south = LATITUDE_NORMALIZED(object.south),
					west = LONGITUDE_NORMALIZED(object.west);
				if (east > this.east || IS_NAN(this.east)) this.east = east;
				if (west < this.west || IS_NAN(this.west)) this.west = west;
				//	if (north > this.north || IS_NAN(this.north)) this.north = north;
				if (IS_NAN(this.north) || (north > this.north && (this.east === east || this.west === west))) this.north = north;
				else if (IS_AN(north)) {
					var distance = LATLNG_GREAT_CIRCLE(this.north, this.west, north, east, this.north, this.east);
					if (distance > 0) this.north = LATLNG_TRANSLATE(north, east, distance, 0, EARTH_RADIUS).lat;
				}
				//	if (south < this.south || IS_NAN(this.south)) this.south = south;
				if (IS_NAN(this.south) || (south < this.south && (this.east === east || this.west === west))) this.south = south;
				else if (IS_AN(south)) {
					var distance = LATLNG_GREAT_CIRCLE(this.south, this.east, south, west, this.south, this.west);
					if (distance > 0) this.south = LATLNG_TRANSLATE(south, west, distance, 180, EARTH_RADIUS).lat;
				}
			} else if (object instanceof LatLng || IS_AN(object.lat) && IS_AN(object.lng)) {
				var lat = LATITUDE_NORMALIZED(object.lat),
					lng = LONGITUDE_NORMALIZED(object.lng);
				if (lng > this.east || IS_NAN(this.east)) this.east = lng;
				if (lng < this.west || IS_NAN(this.west)) this.west = lng;
				//	if (lat > this.north || IS_NAN(this.north)) this.north = lat;
				if (IS_NAN(this.north) || (lat > this.north && (this.east === lng || this.west === lng))) this.north = lat;
				else if (IS_AN(lat)) {
					var distance = LATLNG_GREAT_CIRCLE(this.north, this.west, lat, lng, this.north, this.east);
					if (distance > 0) this.north = LATLNG_TRANSLATE(lat, lng, distance, 0, EARTH_RADIUS).lat;
				}
				//	if (lat < this.south || IS_NAN(this.south)) this.south = lat;
				if (IS_NAN(this.south) || (lat < this.south && (this.east === lng || this.west === lng))) this.south = lat;
				else if (IS_AN(lat)) {
					var distance = LATLNG_GREAT_CIRCLE(this.south, this.east, lat, lng, this.south, this.west);
					if (distance > 0) this.south = LATLNG_TRANSLATE(lat, lng, distance, 180, EARTH_RADIUS).lat;
				}
			}
		}
	}
	
	/**
	 * Extends the boundary to envelop the given point(s) but does not automatically
	 *		validate. This comes in efficient when doing many operations on a single
	 *		PointBounds
	 **/
	public expand(latlngs: ILatLng | ILatLngBounds | ILatLng[] | ILatLngBounds[]) {
		this.__expander(latlngs);
		return this;
	}
	/**
	 * Extends the boundary to envelop the given point(s) and automatically validates
	 **/
	public extend(latlngs: ILatLng | ILatLngBounds | ILatLng[] | ILatLngBounds[]) {
		this.__expander(latlngs);
		return this.validate();
	}

	/**
	 * Checks if a {@link LatLng} is contained within this boundary.
	 * @expose
	 * @this {LatLngBounds}
	 * @param {!LatLng} latlng	The point to check
	 * @return {!boolean}
	 */
	public contains(latlng: ILatLng) {
		return LONGITUDE_NORMALIZED(latlng.lng) + 360 <= LONGITUDE_NORMALIZED(this.east) + 360
			&& LONGITUDE_NORMALIZED(latlng.lng) + 360 >= LONGITUDE_NORMALIZED(this.west) + 360
			&& LATLNG_GREAT_CIRCLE(this.north, this.west, latlng.lat, latlng.lng, this.north, this.east) <= 0
			&& LATLNG_GREAT_CIRCLE(this.south, this.west, latlng.lat, latlng.lng, this.south, this.east) >= 0;
	}
	/**
	 * Checks if a {@link LatLngBounds} is contained within this boundary.
	 * @expose
	 * @this {LatLngBounds}
	 * @param {!LatLngBounds} bounds	The other boundary to check
	 * @return {!boolean}
	 */
	public encloses(bounds: ILatLngBounds) {
		return LONGITUDE_NORMALIZED(bounds.east) + 360 <= LONGITUDE_NORMALIZED(this.east) + 360
			&& LONGITUDE_NORMALIZED(bounds.west) + 360 >= LONGITUDE_NORMALIZED(this.west) + 360
			&& LATLNG_GREAT_CIRCLE(this.north, this.west, bounds.north, bounds.west, this.north, this.east) <= 0
			&& LATLNG_GREAT_CIRCLE(this.south, this.west, bounds.south, bounds.east, this.south, this.east) >= 0;
	};
	/**
	 * Checks if a {@link LatLngBounds} overlaps this boundary.
	 * Also returns true if either boundary's {@link LatLngBounds#encloses} returns true.
	 * @expose
	 * @this {LatLngBounds}
	 * @param {!LatLngBounds} other	The other boundary to check
	 * @return {!boolean}
	 */
	public overlaps(other: ILatLngBounds) {
		var bounds = new LatLngBounds(other);
		return this.isValid()
			&& bounds.isValid()
			&& (
				this.contains(bounds.getNorthEast())
				|| this.contains(bounds.getNorthWest())
				|| this.contains(bounds.getSouthWest())
				|| this.contains(bounds.getSouthEast())
				|| bounds.encloses(this)
			);
	}
	public getCentre(): LatLng {
		return LATLNG_TRANSLATE(
			this.north,
			this.east,
			LATLNG_DISTANCE(this.north, this.east, this.south, this.west) / 2,
			LATLNG_ANGLE(this.north, this.east, this.south, this.west),
			EARTH_RADIUS
		);
	}
	public getNorthEast(): LatLng { return new LatLng(this.north, this.east); }
	public getNorthWest(): LatLng { return new LatLng(this.north, this.west); }
	public getSouthEast(): LatLng { return new LatLng(this.south, this.east); }
	public getSouthWest(): LatLng { return new LatLng(this.south, this.west); }
	/**
	 * The mid-point coordinate between the north east and north west corners.
	 * @expose
	 * @this {LatLngBounds}
	 * @return {!LatLng}
	 */
	public getNorthMiddle() {
		return LATLNG_MIDPOINT(this.north, this.east, this.north, this.west);
	}
	/**
	 * The mid-point coordinate between the south east and south west corners.
	 * @expose
	 * @this {LatLngBounds}
	 * @return {!LatLng}
	 */
	public getSouthMiddle() {
		return LATLNG_MIDPOINT(this.south, this.east, this.south, this.west);
	}
	/**
	 * The mid-point coordinate between the north east and north west corners.
	 * @expose
	 * @this {LatLngBounds}
	 * @return {!LatLng}
	 */
	public getEastMiddle() {
		return LATLNG_MIDPOINT(this.north, this.east, this.south, this.east);
	}
	/**
	 * The mid-point coordinate between the south east and south west corners.
	 * @expose
	 * @this {LatLngBounds}
	 * @return {!LatLng}
	 */
	public getWestMiddle() {
		return LATLNG_MIDPOINT(this.north, this.west, this.south, this.west);
	}
	/**
	 * The distance in meters between the north-east corner and the south-west corner.
	 * @expose
	 * @this {LatLngBounds}
	 * @return {!number}
	 */
	public getDiagonalDistance() {
		return LATLNG_DISTANCE(this.north, this.east, this.south, this.west);
	}
	/**
	 * The distance in meters between the north-most border and the south-most border.
	 * @expose
	 * @this {LatLngBounds}
	 * @return {!number}
	 */
	public getLatitudinalDistance() {
		return LATLNG_DISTANCE(this.north, this.east, this.south, this.east);
	}
	/**
	 * The distance in meters between the east-most and the west-most points along the border closest to the equator.
	 * @expose
	 * @this {LatLngBounds}
	 * @return {!number}
	 */
	public getLongitudinalDistance() {
		return ABS(this.north) < ABS(this.south)
			? LATLNG_DISTANCE(this.north, this.east, this.north, this.west)
			: LATLNG_DISTANCE(this.south, this.east, this.south, this.west);
	}

	public validate(): this {
		var north = LATITUDE_NORMALIZED(this.north),
			east = LONGITUDE_NORMALIZED(this.east),
			south = LATITUDE_NORMALIZED(this.south),
			west = LONGITUDE_NORMALIZED(this.west);
		this.north = north > south ? north : south;
		this.south = south < north ? south : north;
		this.east = east > west ? east : west;
		this.west = west < east ? west : east;
		return this;
	}

	public isValid(): bool {
		return this.north >= this.south
			&& this.east >= this.west
			&& !(
				ABS(this.north) > 90
				|| ABS(this.south) > 90
				|| ABS(this.east) > 180
				&& ABS(this.east) > 180
			);
	}
	public isEmpty(): bool {
		return this.isValid()
			&& (
				LATLNG_DISTANCE(this.north, this.east, this.north, this.west) < MAX_SAME_DISTANCE
				|| LATLNG_DISTANCE(this.north, this.east, this.south, this.east) < MAX_SAME_DISTANCE
			);
	}


	/**
	 * Creates a literal of this object.  Used internally by {@link JSON.stringify}.
	 * @expose
	 * @this {LatLngBounds}
	 * @return {{north:number,east:number,south:number,west:number}|null}
	 */
	public toJSON() {
		this.validate();
		return IS_NAN(this.north)
			|| IS_NAN(this.east)
			|| IS_NAN(this.south)
			|| IS_NAN(this.west)
			? null
			: {
				"north": ROUND_TO(this.north, 8),
				"east": ROUND_TO(this.east, 8),
				"south": ROUND_TO(this.south, 8),
				"west": ROUND_TO(this.west, 8),
			};
	}
	public fromJSON(object: JsonObject) {
		
	}
}