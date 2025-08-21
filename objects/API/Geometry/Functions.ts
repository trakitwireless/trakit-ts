import { FILTER_BY_BOOLEAN_ARRAY } from '../Arrays';
import {
	ABS,
	ATAN2,
	SIN,
	COS,
	PI,
	DEGREES_TO_RADIANS,
	RADIANS_TO_DEGREES,
} from '../Constants';
import {
	DOUGLASPEUCKER_INTERNAL,
	PYTHAGORA,
} from '../Functions';
import {
	IPoint,
	IRadial,
	IRectangle,
	IRectangle_clone,
} from './Interfaces';

//#region Point helpers
/**
 * Calculates the starting angle (in degrees) between two Points using the top as zero.  Does not return negative values.
 * @param starting	Starting coordinate
 * @param ending	Other coordinate
 * @returns A number between 0 and 360.
 */
export function POINT_ANGLE(
	starting: IPoint,
	ending: IPoint
): number {
	var angle = 0.0;
	if (starting.x !== ending.x || starting.y !== ending.y) {
		angle = ATAN2(ending.y - starting.y, ending.x - starting.x)
			* RADIANS_TO_DEGREES
			+ 90;	// top as zero
	}
	return (angle + 360) % 360;	// make sure no negative numbers
}
/**
 * Calculates the distance between two points using Pythagorean theorem.
 * @param starting	Starting coordinate
 * @param ending	Other coordinate
 */
export function POINT_DISTANCE(
	starting: IPoint,
	ending: IPoint
): number {
	return PYTHAGORA(
		ending.x - starting.x,
		ending.y - starting.y
	);
}
/**
 * Sorts points by left-most, then by top-most.
 */
export function POINT_SORT(a: IPoint, b: IPoint): number {
	return a.x < b.x
		? -1
		: a.x > b.x
			? 1
			: a.y < b.y
				? -1
				: a.y > b.y
					? 1
					: 0;
}
/**
 * Calculates the vector which can be used to find the point based on the given direction and distance
 * @param distance
 * @param degrees
 */
export function POINT_VECTOR(distance: number, degrees: number): IPoint {
	var radians = (degrees - 90) * DEGREES_TO_RADIANS;
	return {
		x: COS(radians) * distance,
		y: SIN(radians) * distance,
	};
}
//#endregion Point helpers

//#region Path helpers
/**
 * Calculates the total length of the given path
 * @param path	The array of points representing a path
 * */
export function PATH_LENGTH(path: IPoint[]): number {
	var value = 0.0,
		i = 0,
		l = path.length - 1,
		p1 = path[i],
		p2 = p1;
	for (; i < l; i++) {
		p1 = path[i];
		p2 = path[i + 1];
		value += PYTHAGORA(p2.x - p1.x, p2.y - p1.y);
	}
	return value;
}
/**
 * Calculates the orthogonal height of a triangle. The orthogonal height is
 * calculated by drawing a line between the firstPoint and lastPoint, then
 * getting the length of a line drawn up from the line to the midPoint at a 90
 * degree angle.
 * @param first		Left-most coordinate of the triangle
 * @param mid		Top-most coordinate of the triangle
 * @param last		Right-most coordinate of the triangle
 */
export function PATH_ORTHOGONAL(
	first: IPoint,
	mid: IPoint,
	last: IPoint
): number {
	var length = POINT_DISTANCE(first, last);
	return length > 0
		? POLY_AREA([first, mid, last]) / length * 2
		: POINT_DISTANCE(first, mid);
}
/**
 * Performs a Douglas-Peucker path reduction based on the given tolerance.
 * @param path	The array of points representing a path
 * @param tolerance		Orthogonal height threshold for candidate points.  Default is 0.
 * */
export function PATH_PEUCKER(path: IPoint[], tolerance: number = 0) {
	if (path.length < 3) {
		return path.slice();
	} else {
		if (!(tolerance > 0)) tolerance = 0;

		return path.filter(
			FILTER_BY_BOOLEAN_ARRAY,
			DOUGLASPEUCKER_INTERNAL(path, PATH_PEUCKER_FILTER, tolerance)
		);
	}
}
/**
 * 
 * @param firstPoint
 * @param midPoint
 * @param lastPoint
 * */
function PATH_PEUCKER_FILTER(
	firstPoint: IPoint,
	midPoint: IPoint,
	lastPoint: IPoint
): number {
	return PATH_ORTHOGONAL(
		firstPoint,
		midPoint,
		lastPoint
	);
}
//#endregion Path helpers

//#region Polygon helpers
/**
 * Calculates the total area occupied by the given path.  Treats non-closed paths as closed paths.
 * @param path	The array of points representing a path
 * */
export function POLY_AREA(path: IPoint[]): number {
	var points = path.slice(),
		value = 0.0,
		i = 0,
		l = points.length - 1,
		p1 = points[i],
		p2 = points[l];
	if (p1.x !== p2.x || p1.y !== p2.y) l = points.push(p1) - 1;	// poly must be closed
	for (; i < l; i++) {
		p1 = points[i];
		p2 = points[i + 1];
		value += (p1.x * p2.y) - (p1.y * p2.x);
	}
	return ABS(value / 2);
}
/**
 * A utility export function to determine if a given point is inside the given polygon path.
 * @param poly	The array of points represents the path of the polygon.
 * @param dot	The coordinate of the point to be checked.
 * */
export function POLY_CONTAINS(poly: IPoint[], dot:IPoint): boolean {
	var path = poly.slice(),
		i = 0,
		l = path.length,
		j = l - 1,
		inside = false;
	if (path[i].x === path[j].x && path[i].y === path[j].y) {
		path.pop();
		l = path.length;
		j = l - 1;
	}
	if (RECTANGLE_CONTAINS_POINT(RECTANGLE_FROM_POINTS(path), dot)) {
		for (; i < l; j = i++) {
			var pointA = path[i],
				pointB = path[j];
			if (
				(pointA.y > dot.y) != (pointB.y > dot.y)
				&& dot.x < (pointB.x - pointA.x) * (dot.y - pointA.y) / (pointB.y - pointA.y) + pointA.x
			) {
				inside = !inside;
			}
		}
	}
	return inside;
}
/**
 * Performs a Douglas-Peucker path reduction on a polygon for the given tolerance.
 * The start/end points are variable and the end point is trimmed from the result.
 * @param path	The array of points representing a path
 * @param tolerance		Orthogonal height threshold for candidate points.  Default is 0.
 * */
export function POLY_PEUCKER(path: IPoint[], tolerance: number = 0) {
	let points = [...path],
		length = path.length;
	if (length < 3) {
		return points;
	} else {
		var widest = 0.0,
			startIndex = 0,
			endIndex = 0;
		if (!(tolerance > 0)) tolerance = 0.0;

		// find the widest part of the polygon (starting point is the only necessary bit)
		for (var i = 0; i < length; i++) {
			var point = points[i];
			for (var j = i + 1; j < length; j++) {
				var candidate = points[j],
					distance = POINT_DISTANCE(point, candidate);
				if (distance > widest) {
					startIndex = i;
					endIndex = j;
					widest = distance;
				}
			}
		}

		// re-order the points with the new starting point (faster method)
		points = points.splice(startIndex, length).concat(points);

		// make sure start and end points are identical
		if (POINT_DISTANCE(points[0], points[length - 1]) > 0) length = points.push(points[0]);

		// reduce the polygon's points
		points = points.filter(
			FILTER_BY_BOOLEAN_ARRAY,
			DOUGLASPEUCKER_INTERNAL(points, PATH_PEUCKER_FILTER, tolerance)
		);

		// trim end point if the same as start point
		length = points.length;
		if (POINT_DISTANCE(points[0], points[length - 1]) <= 0) points.pop();

		return points;
	}
}
/**
 * Wraps the given points into a polygonal path.  The given points do not need to be a path.  The returned path is not closed.
 * @param points	The array of points on which to create the non-closed path
 * @returns Non-closed path.
 */
export function POLY_WRAPPER(points: IPoint[]): IPoint[] {
	var candidates = points.slice().sort(POINT_SORT),
		point = candidates[0],	// first point is the comparison point, but it is not removed from candidates array
		path = [point];		// first point is always added to path
	//	console.warn(candidates.join(" "));
	while (candidates.length > 1) {	// first point is always present, so length should be higher than 1 to continue
		var index = 0,		// index of the winning candidate
			farthestDistance = 0.0,
			smallestAngle = 360.0;
		for (var j = 0, c = candidates.length; j < c; j++) {
			var candidate = candidates[j],
				angle = POINT_ANGLE(point, candidate),
				distance = POINT_DISTANCE(point, candidate);
			if (candidate === point) continue;	// edge case; the candidate is the comparison point during the first loop.  This case does not happen after that.
			//	console.log("candidate " + j + ": " + candidate.toString() + " @ " + angle + "/" + distance);

			if (!distance) {	// identical points can be removed
				//	console.log("identical: " + point.toString() + ": " + candidate.toString());
				candidates.splice(j--, 1);
				c--;
			} else if (angle < smallestAngle || angle === smallestAngle && distance > farthestDistance) {
				if (angle === smallestAngle) {
					//	console.log("intersecting: " + point.toString() + ": " + candidates[index].toString());
					candidates.splice(index, 1);	// the previous intersecting point can be removed
					j--;
					c--;
				}
				smallestAngle = angle;
				farthestDistance = distance;
				index = j;
			}
		}
		//	console.log("winner " + index + ": " + candidates[index].toJSON());
		if (index === 0) break;	// if the calculated next point is the first point, it means we've come full circle and can exit
		path.push(point = candidates.splice(index, 1)[0]);
	}
	return path;
}
//#endregion Polygon helpers

//#region Radial helpers
/**
 * Calculates the area of a circle based on the given radius.
 * @param radius		
 * */
export function RADIAL_AREA(radius: number): number {
	return PI * (radius * radius);
}
/**
 * Solves the Minimum Enclosing Circle problem using Badoiu Clarkson's algorithm.
 * @param points	The array of points on which to create the Radial
 * @param iterations	The higher the iterations the slower and more accurate the Radial. Default is 10,000.
 * */
export function RADIAL_BADOIU_CLARKSON(points: IPoint[], iterations: number): IRadial {
	let centre = points[0],
		radius = 0;
	// short-circuit for special cases
	switch (points.length) {
		case 1:
			return {
				x: centre.x,
				y: centre.y,
				r: radius,
			};
		case 2:
			return RECTANGLE_TO_RADIAL(
				RECTANGLE_FROM_POINTS(points),
				false
			);
	}
	// long-circuit
	if (!iterations) iterations = 10000;

	for (let iter = 0; iter < iterations; iter++) {
		var winner = points[0],
			max = 0.0;
		for (let i = 0; i < points.length; i++) {
			var point = points[i],
				distance = POINT_DISTANCE(centre, point);
			if (distance > max) {
				winner = point;
				max = distance;
			}
		}
		centre = {
			x: centre.x + (1 / (iter + 1)) * (winner.x - centre.x),
			y: centre.y + (1 / (iter + 1)) * (winner.y - centre.y),
		};
		radius = max;
	}

	return {
		x: centre.x,
		y: centre.y,
		r: radius,
	};
}
/**
 * Calculates the circumference of a circle based on the given radius.
 * @param radius		
 * */
export function RADIAL_CIRCUMFERENCE(radius: number): number {
	return 2 * PI * radius;
}
/**
 * Creates an {@link IRectangle} which contains the given list of {@link IPoint}s.
 * @param dots 
 */
export function RECTANGLE_FROM_POINTS(dots: IPoint[]):IRectangle {
	let left = NaN,
		top = NaN,
		right = NaN,
		bottom = NaN;
	for (let i = 0; i < dots.length; i++) {
		const x = dots[i].x,
			y = dots[i].y;
		if (!(x > left)) left = x;
		if (!(x < right)) right = x;
		if (!(y > top)) top = y;
		if (!(y < bottom)) bottom = y;
	}
	return {
		left,
		top,
		right,
		bottom,
	};
}
/**
 * Returns true if the given {@link Radial} overlaps the given {@link Rectangle}.
 * @param circle
 * @param rect
 * */
export function RADIAL_OVERLAP_RECTANGLE(circle: IRadial, rect: IRectangle): boolean {
	var tall = IRectangle_clone(rect),
		wide = IRectangle_clone(rect);
	tall.top -= circle.r;
	tall.bottom += circle.r;
	wide.left -= circle.r;
	wide.right += circle.r;
	return RECTANGLE_CONTAINS_POINT(tall, circle)
		|| RECTANGLE_CONTAINS_POINT(wide, circle)
		|| POINT_DISTANCE(circle, { x: rect.left, y: rect.top }) <= circle.r
		|| POINT_DISTANCE(circle, { x: rect.right, y: rect.top }) <= circle.r
		|| POINT_DISTANCE(circle, { x: rect.left, y: rect.bottom }) <= circle.r
		|| POINT_DISTANCE(circle, { x: rect.right, y: rect.bottom }) <= circle.r
}
//#endregion Radial helpers

//#region Rectangle helpers
/**
 * 
 * @param rect 
 */
export function RECTANGLE_CENTRE(rect: IRectangle): IPoint {
	return {
		x: rect.left + ((rect.right - rect.left) / 2),
		y: rect.top + ((rect.bottom - rect.top) / 2),
	}
}
/**
 * Determines if the given {@link IPoint} is contained by the given {@link Rectangle}.
 * @param rect 
 * @param dot 
 * @returns 
 */
export function RECTANGLE_CONTAINS_POINT(rect: IRectangle, dot: IPoint): boolean {
	return !(
		dot.y < rect.top
		|| dot.x < rect.left
		|| dot.x > rect.right
		|| dot.y > rect.bottom
	);
}
/**
 * 
 * @param rect 
 * @param clip 
 */
export function RECTANGLE_TO_RADIAL(rect: IRectangle, clip: boolean): IRadial {
	const centre = RECTANGLE_CENTRE(rect),
		width = rect.right - rect.left,
		height = rect.bottom - rect.top;
	return {
		x: centre.x,
		y: centre.y,
		r: !clip ?
			POINT_DISTANCE(
				centre,
				{
					x: rect.left,
					y: rect.top,
				}
			)
			: width > height
				? POINT_DISTANCE(
					centre,
					{
						x: rect.left,
						y: rect.top + (height / 2),
					}
				)
				: POINT_DISTANCE(
					centre,
					{
						x: rect.left + (width / 2),
						y: rect.top,
					}
				)
	}
}
//#endregion Rectangle helpers