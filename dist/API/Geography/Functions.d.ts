import { IPoint } from '../Geometry/Interfaces';
import { int } from '../Types';
import { ILatLng, ILatLngBounds } from './Interfaces';
/**
 * The default precision used to serialize latlngs.
 */
export declare const DEFAULT_PRECISION = 6;
/**
 * The radius of the Earth in meters taken from the GRS-80, NAD83, and WGS-84 standards.
 */
export declare const EARTH_RADIUS: number;
/**
 * The ellipsoid of the Earth taken from the WGS-84 standard.
 * @default ~298.2572
 */
export declare const EARTH_ELLIPSOID: number;
/**
 * Inversion of the ellipsoid value for calculations.
 */
export declare const EARTH_FLATENING: number;
/**
 * The minor axis radius of an ellipsoid Earth as per WGS-84.
 * @default ~6356752.3142
 */
export declare const EARTH_RADIUS_MINOR: number;
/**
 * The surface area of the Earth in meters squared.
 * @default 511207893395811
 */
export declare const EARTH_SURFACE: number;
/**
 *
 */
export declare const EARTH_RADIUS_RATIO: number;
/**
 *
 */
export declare const EARTH_RADIUS_ECCENT: number;
/**
 *
 */
export declare const EARTH_RADIUS_COM: number;
/**
 *
 */
export declare const TILE_SIZE_PX: number;
/**
 *
 */
export declare const MAX_TILE_LAT: number;
/**
 *
 */
export declare const MAX_TILE_LNG: number;
/**
 * Determines the map width and height (in pixels) at a specified level of detail.
 * @param zoom	Level of detail, from 1 (lowest detail) to 23 (highest detail).
 * @returns The map width and height in pixels.
 */
export declare function tileMapSize(zoom: int): int;
/**
 * Converts tile coordinates into pixel coordinates of the upper-left pixel of the specified tile.
 * @param tile
*/
export declare function tileToPixel(tile: IPoint): IPoint;
/**
 * Converts pixel coordinates into tile coordinates of the tile containing the specified pixel.
 * @param pixel
 */
export declare function pixelToTile(pixel: IPoint): IPoint;
/**
 * Converts a pixel coordinate into a LatLng at a specified level of detail.
 * @param pixel
 * @param zoom	Level of detail, from 1 (lowest detail) to 23 (highest detail).
 */
export declare function pixelToLatlng(pixel: IPoint, zoom: int): ILatLng;
/**
 * Converts a LatLng into a pixel coordinate at a specified level of detail.
 * @param latlng
 * @param zoom	Level of detail, from 1 (lowest detail) to 23 (highest detail).
 */
export declare function latlngToPixel(latlng: ILatLng, zoom: int): IPoint;
/**
 * Converts tile coordinates into a lat/lng boundary representing a complete tile.
 * @param tile
 * @param zoom	Level of detail, from 1 (lowest detail) to 23 (highest detail).
 * @param grow	Number of pixels to grow the tilesize (helps with detecting stroke/border overlaps).
 */
export declare function tileToBounds(tile: IPoint, zoom: int, grow?: number): ILatLngBounds;
/**
 * Converts pixel coordinates of a tile into a lat/lng boundary.
 * @param pixel
 * @param zoom	Level of detail, from 1 (lowest detail) to 23 (highest detail).
 * @param grow	Number of pixels to grow the tilesize (helps with detecting stroke/border overlaps).
 */
export declare function pixelToBounds(pixel: IPoint, zoom: int, grow?: number): ILatLngBounds;
/**
 * Returns the number of meters per pixel at the given latitude and zoom level.
 * @param lat
 * @param zoom
 */
export declare function metresPerPixel(lat: number, zoom: int): number;
/**
 * Checks to see if a given latitude is at one of the poles.
 * @param latitude
 */
export declare function LATITUDE_IS_POLE(latitude: number): boolean;
/**
 * Normalizes a latitude value between +/- 90.
 * Values of greater than 90 are returned as 90, and values less than -90 are returned as -90.
 * @param latitude
 * @param edge
 */
export declare function LATITUDE_NORMALIZED(latitude: number, edge?: number): number;
/**
 * Normalizes a longitude value between +/- 180.
 * Values of greater than 180 are returned as a negative difference of 360, and values less than -180 are returned as a positive difference of 360.
 * @param longitude
 * @param latitude	When given, will check if the latitude is a pole, and converts the longitude to zero.
 */
export declare function LONGITUDE_NORMALIZED(longitude: number, latitude?: number): number;
/**
 * The distance in meters before considering to coordinates to have the same location.
 * @default 0.000000001
 */
export declare const MAX_SAME_DISTANCE = 1e-9;
/**
 * Bearing from coordinate A to coordinate B in degrees from North.
 * @param first	The starting coordinate.
 * @param last	The ending coordinate.
 * @return		Degrees from North.
 */
export declare function LATLNG_ANGLE(first: ILatLng, last: ILatLng): number;
/**
 * Calculates the distance between two coordinates on a sphere.
 * @param first	The starting coordinate.
 * @param last	The ending coordinate.
 */
export declare function LATLNG_DISTANCE(first: ILatLng, last: ILatLng): number;
/**
 * Calculates the distance between two coordinates on a Bessel 1841 ellipsoid.
 * @param start	The starting coordinate.
 * @param end	The ending coordinate.
 */
export declare function LATLNG_DISTANCE_VINCENTY(start: ILatLng, end: ILatLng): number;
/**
 * Calculates the orthogonal height of a triangle.  The orthogonal height is
 * calculated by drawing a line between the coordinate A and coordinate B,
 * then getting the length of a line drawn up from the line to the mid
 * coordinate at a 90 degree angle.
 * @param first		Left-most coordinate on the great circle.
 * @param middle	Top-most coordinate's latitude.
 * @param last		Right-most coordinate's longitude on the great circle.
 * @return			Value is negative when distance is to the right, and positive when distance to the left.
 */
export declare function LATLNG_GREAT_CIRCLE(first: ILatLng, middle: ILatLng, last: ILatLng): number;
/**
 * Calculates the final coordinate based on the given starting coordinate and vector.
 * @param pin		The staring coordinate.
 * @param meters	The distance away from this LatLng.
 * @param bearing	The direction in which to calculate the new position in degrees from North.
 * @throws {Error}	Either latitude or longitude is NaN.
 */
export declare function LATLNG_TRANSLATE(pin: ILatLng, meters: number, bearing: number): ILatLng;
/**
 * Calculates the mid-point between to given coordinate.
 * @param first		Left-most coordinate.
 * @param last		Right-most coordinate.
 * @throws {Error}	Either latitude or longitude is NaN.
 */
export declare function LATLNG_MIDPOINT(first: ILatLng, last: ILatLng): ILatLng;
/**
 * Calculates the spherical-cap area occupied by the given radial distance.
 * @param pin		The coordinate at which to calculate the area.
 * @param radius	The distance from the centre of the circle to any point along the edge.
 */
export declare function SPHERECAP_AREA(pin: ILatLng, radius: number): void;
/**
 * Calculates the length of the given route.
 * @param route
 */
export declare function ROUTE_LENGTH(route: ILatLng[]): number;
/**
 * Performs a Douglas-Peucker path reduction based on the given tolerance.
 * @param route		The array of coordinates representing a path.
 * @param tolerance	Distance (in meters) threshold for candidate coordinates.  Default is 0.
 */
export declare function ROUTE_PEUCKER(route: ILatLng[], tolerance: number): ILatLng[];
/**
 * An implementation of Google's Encoded Polyline Algorithm format.
 * https://developers.google.com/maps/documentation/utilities/polylinealgorithm
 * @param route		The array of coordinates representing a path.
 * @param precision			Optional number of decimal places to use to calculate the results.  Default is 5.
 */
export declare function ROUTE_ENCODE(route: ILatLng[], precision?: number): string;
/**
 * An implementation of Google's Decoded Polyline Algorithm format.
 * https://developers.google.com/maps/documentation/utilities/polylinealgorithm
 * @param route			The encoded string which represents the coordinates in a path.
 * @param precision			Optional number of decimal places used to recalculate the results.  Default is 5.
 */
export declare function ROUTE_DECODE(route: string, precision?: number): ILatLng[];
/**
 * Finds the widest section of the given route.
 * This is useful for path reduction and reorientation.
 * @param route		The array of coordinates representing a path
 * @return			An array of three items; the first is the widest distance, and the others are the start and end index within the given route.
 */
export declare function GEOFENCE_WIDEST(route: ILatLng[]): [number, number, number];
/**
 * Performs a Douglas-Peucker path reduction on a polygon for the given
 * tolerance. The start/end coordinates are variable and the end coordinate
 * is trimmed from the result.
 * @param route		The array of coordinates representing a path
 * @param tolerance	Distance (in meters) threshold for candidate coordinates.  Default is 0.
 */
export declare function GEOFENCE_PEUCKER(route: ILatLng[], tolerance?: number): ILatLng[];
/**
 * Calculates the total area occupied by the given geofence.
 * @param route		The array of coordinates representing a geofence.
 * @throws {Error}	Not enough coordinates.
 */
export declare function GEOFENCE_AREA(route: ILatLng[]): number;
/**
 * A utility export function to determine if a given coordinate is inside the given geofence.
 * @param route	The array of coordinates represents the path of the polygon.
 * @param pin	The coordinate to be checked.
 */
export declare function GEOFENCE_CONTAINS(route: ILatLng[], pin: ILatLng): boolean;
/**
 * Wraps the given coordinates into a polygonal path.
 * The given coordinates do not need to be a path.
 * The returned path is not closed.
 * @param coordinates	The array of coordinates on which to create the non-closed path
 */
export declare function GEOFENCE_WRAPPER(route: ILatLng[]): ILatLng[];
//# sourceMappingURL=Functions.d.ts.map