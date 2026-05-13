import { ISerializable } from '../Interfaces/ISerializable';
import { JsonObject } from '../Types';
import { ILatLng, ILatLngBounds, LatLngBoundsExpansion } from './Interfaces';
import { LatLng } from './LatLng';
/**
 * A boundary on the globe
 */
export declare class LatLngBounds implements ILatLngBounds, ISerializable {
    /**
     *
     * @param json
     */
    static fromJSON(json: ILatLngBounds | JsonObject): LatLngBounds;
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
    constructor(...args: LatLngBoundsExpansion[]);
    /**
     * Returns a string representation of this {@link LatLng}.
     * @param delimiter	The boundary is delimited by a comma (,) by default, but you can override with your own value.
     * @returns A string in the format of "lat,lng".
     */
    toString(delimiter?: string): string;
    /**
     * Creates a literal of this {@link LatLngBounds}.
     * Used internally by {@link JSON.stringify}.
     */
    toJSON(): ILatLngBounds & JsonObject;
    /**
     * Compares this LatLng to another to see if they are equivalent.
     * @param other		The other LatLng to compare
     * @param tolerance	Distance tolerance before considering two nearly identical coordinates to be equal.
     */
    isEqual(other: ILatLngBounds, tolerance?: number): boolean;
    /**
     *
     */
    isValid(): boolean;
    /**
     *
     */
    isEmpty(): boolean;
    /**
     * Checks if a {@link LatLng} is contained within this boundary.
     * @param pin	The point to check
     */
    contains(pin: ILatLng): boolean;
    /**
     * Checks if a {@link LatLngBounds} is contained within this boundary.
     * @expose
     * @this {LatLngBounds}
     * @param bounds	The other boundary to check
     */
    encloses(bounds: ILatLngBounds): boolean;
    /**
     * Checks if a {@link LatLngBounds} overlaps this boundary.
     * Also returns true if either boundary's {@link LatLngBounds#encloses} returns true.
     * @param other	The other boundary to check
     */
    overlaps(other: ILatLngBounds): boolean;
    /**
     *
     * @param object
     */
    private __expander;
    /**
     * Extends the boundary to envelop the given point(s) but does not automatically
     *		validate. This comes in efficient when doing many operations on a single
     *		PointBounds
     */
    expand(latlngs: LatLngBoundsExpansion): this;
    /**
     * Extends the boundary to envelop the given point(s) and automatically validates
     */
    extend(latlngs: LatLngBoundsExpansion): this;
    /**
     *
     */
    getCentre(): LatLng;
    /**
     *
     */
    getNorthEast(): LatLng;
    /**
     *
     */
    getNorthWest(): LatLng;
    /**
     *
     */
    getSouthEast(): LatLng;
    /**
     *
     */
    getSouthWest(): LatLng;
    /**
     * The mid-point coordinate between the north east and north west corners.
     */
    getNorthMiddle(): LatLng;
    /**
     * The mid-point coordinate between the south east and south west corners.
     */
    getSouthMiddle(): LatLng;
    /**
     * The mid-point coordinate between the north east and north west corners.
     */
    getEastMiddle(): LatLng;
    /**
     * The mid-point coordinate between the south east and south west corners.
     */
    getWestMiddle(): LatLng;
    /**
     * The distance in meters between the north-east corner and the south-west corner.
     */
    getDiagonalDistance(): number;
    /**
     * The distance in meters between the north-most border and the south-most border.
     */
    getLatitudinalDistance(): number;
    /**
     * The distance in meters between the east-most and the west-most points along the border closest to the equator.
     */
    getLongitudinalDistance(): number;
    /**
     *
     */
    validate(): this;
}
//# sourceMappingURL=LatLngBounds.d.ts.map