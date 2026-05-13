import { Point } from '../Geometry/Point';
import { JsonObject } from '../Types';
import { ILatLng } from './Interfaces';
import { LatLngBounds } from './LatLngBounds';
/**
 * A coordinate on the Earth.
 */
export declare class LatLng implements ILatLng {
    /**
     * Let's consider the zero-zero coordinates to be invalid.
     */
    static readonly INVALID: LatLng;
    /**
     *
     * @param json
     */
    static fromJSON(json: ILatLng | JsonObject): LatLng;
    /**
     *
     * @param latlng
     * @param delimiter
     * @returns
     */
    static fromString(latlng: string, delimiter?: string): LatLng;
    /**
     * Latitude
     */
    readonly lat: number;
    /**
     * Longitude
     */
    readonly lng: number;
    constructor(lat: number, lng: number);
    /**
     * Returns a string representation of this {@link LatLng}.
     * @param delimiter	The boundary is delimited by a comma (,) by default, but you can override with your own value.
     * @returns A string in the format of "lat,lng".
     */
    toString(delimiter?: string): string;
    /**
     * Creates a literal of this {@link LatLng}.
     * Used internally by {@link JSON.stringify}.
     */
    toJSON(): ILatLng & JsonObject;
    /**
     * Compares this LatLng to another to see if they are equivalent.
     * @param other		The other LatLng to compare
     * @param tolerance	Distance tolerance before considering two nearly identical coordinates to be equal.
     */
    isEqual(other: ILatLng, tolerance?: number): boolean;
    /**
     * Returns true if this coordinate is not NaN and not zero-zero.
     */
    isValid(): boolean;
    /**
     * Calculates the distance across the surface of the globe to another coordinate
     * @param pin
     */
    distanceTo(pin: ILatLng): number;
    /**
     * Calculates the starting bearing across the surface of the globe from the current coordinate to the given coordinate
     * @param pin
     */
    bearingTo(pin: ILatLng): number;
    /**
     * Returns a new coordinate at the given distance and bearing from this coordinate
     * @param meters
     * @param bearing
     */
    toTranslated(meters: number, bearing: number): LatLng;
    /**
     * Returns a new LatLng at the half-way point between this and the given LatLng.
     * @param pin	The other coordinate.
     * @throws {Error}	Either latitude or longitude is NaN
     */
    toBetween(pin: ILatLng): LatLng;
    /**
     * Creates a Point based on the given magnifier.
     */
    toRadians(magnifier?: number): Point;
    /**
     * Creates a square LatLngBounds centred around this LatLng.
     * @param radius	The closest distance (in meters) from this coordinate to the edges of the new LatLngBounds.
     */
    toBounds(radius: number): LatLngBounds;
}
//# sourceMappingURL=LatLng.d.ts.map