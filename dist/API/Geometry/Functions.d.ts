import { IPoint, IRadial, IRectangle } from './Interfaces';
/**
 * Calculates the starting angle (in degrees) between two Points using the top as zero.  Does not return negative values.
 * @param starting	Starting coordinate
 * @param ending	Other coordinate
 * @returns A number between 0 and 360.
 */
export declare function POINT_ANGLE(starting: IPoint, ending: IPoint): number;
/**
 * Calculates the distance between two points using Pythagorean theorem.
 * @param starting	Starting coordinate
 * @param ending	Other coordinate
 */
export declare function POINT_DISTANCE(starting: IPoint, ending: IPoint): number;
/**
 * Sorts points by left-most, then by top-most.
 */
export declare function POINT_SORT(a: IPoint, b: IPoint): number;
/**
 * Calculates the vector which can be used to find the point based on the given direction and distance
 * @param distance
 * @param degrees
 */
export declare function POINT_VECTOR(distance: number, degrees: number): IPoint;
/**
 * Calculates the total length of the given path
 * @param path	The array of points representing a path
 * */
export declare function PATH_LENGTH(path: IPoint[]): number;
/**
 * Calculates the orthogonal height of a triangle. The orthogonal height is
 * calculated by drawing a line between the firstPoint and lastPoint, then
 * getting the length of a line drawn up from the line to the midPoint at a 90
 * degree angle.
 * @param first		Left-most coordinate of the triangle
 * @param mid		Top-most coordinate of the triangle
 * @param last		Right-most coordinate of the triangle
 */
export declare function PATH_ORTHOGONAL(first: IPoint, mid: IPoint, last: IPoint): number;
/**
 * Performs a Douglas-Peucker path reduction based on the given tolerance.
 * @param path	The array of points representing a path
 * @param tolerance		Orthogonal height threshold for candidate points.  Default is 0.
 * */
export declare function PATH_PEUCKER(path: IPoint[], tolerance?: number): IPoint[];
/**
 * Calculates the total area occupied by the given path.  Treats non-closed paths as closed paths.
 * @param path	The array of points representing a path
 * */
export declare function POLY_AREA(path: IPoint[]): number;
/**
 * A utility export function to determine if a given point is inside the given polygon path.
 * @param poly	The array of points represents the path of the polygon.
 * @param dot	The coordinate of the point to be checked.
 * */
export declare function POLY_CONTAINS(poly: IPoint[], dot: IPoint): boolean;
/**
 * Performs a Douglas-Peucker path reduction on a polygon for the given tolerance.
 * The start/end points are variable and the end point is trimmed from the result.
 * @param path	The array of points representing a path
 * @param tolerance		Orthogonal height threshold for candidate points.  Default is 0.
 * */
export declare function POLY_PEUCKER(path: IPoint[], tolerance?: number): IPoint[];
/**
 * Wraps the given points into a polygonal path.  The given points do not need to be a path.  The returned path is not closed.
 * @param points	The array of points on which to create the non-closed path
 * @returns Non-closed path.
 */
export declare function POLY_WRAPPER(points: IPoint[]): IPoint[];
/**
 * Calculates the area of a circle based on the given radius.
 * @param radius
 * */
export declare function RADIAL_AREA(radius: number): number;
/**
 * Solves the Minimum Enclosing Circle problem using Badoiu Clarkson's algorithm.
 * @param points	The array of points on which to create the Radial
 * @param iterations	The higher the iterations the slower and more accurate the Radial. Default is 10,000.
 * */
export declare function RADIAL_BADOIU_CLARKSON(points: IPoint[], iterations?: number): IRadial;
/**
 * Calculates the circumference of a circle based on the given radius.
 * @param radius
 * */
export declare function RADIAL_CIRCUMFERENCE(radius: number): number;
/**
 * Creates an {@link IRectangle} which contains the given list of {@link IPoint}s.
 * @param dots
 */
export declare function RECTANGLE_FROM_POINTS(dots: IPoint[]): IRectangle;
/**
 * Returns true if the given {@link Radial} overlaps the given {@link Rectangle}.
 * @param circle
 * @param rect
 * */
export declare function RADIAL_OVERLAP_RECTANGLE(circle: IRadial, rect: IRectangle): boolean;
/**
 *
 * @param rect
 */
export declare function RECTANGLE_CENTRE(rect: IRectangle): IPoint;
/**
 * Determines if the given {@link IPoint} is contained by the given {@link Rectangle}.
 * @param rect
 * @param dot
 * @returns
 */
export declare function RECTANGLE_CONTAINS_POINT(rect: IRectangle, dot: IPoint): boolean;
/**
 *
 * @param rect
 * @param clip
 */
export declare function RECTANGLE_TO_RADIAL(rect: IRectangle, clip: boolean): IRadial;
//# sourceMappingURL=Functions.d.ts.map