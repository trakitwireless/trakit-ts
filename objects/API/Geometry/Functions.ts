import { ABS, ATAN2, COS, DEGREES_TO_RADIANS, PI, RADIANS_TO_DEGREES, SIN, } from '../Constants';
import { DOUGLASPEUCKER, FILTER_BY_BOOLEAN_ARRAY, PYTHAGORA, } from '../Functions';
import { IPoint, Point, } from './Point';
import { IRadial, Radial, } from './Radial';
import { IRectangle, Rectangle, } from './Rectangle';

/**
 * Calculates the orthogonal height of a triangle.
	The orthogonal height is calculated by drawing a line between the firstPoint and lastPoint, then getting the length
	of a line drawn up from the line to the midPoint at a 90 degree angle.
 * @param firstX	Left-most point's X coordinate of the triangle
 * @param firstY	Left-most point's Y coordinate of the triangle
 * @param midX		Top-most point's X coordinate of the triangle
 * @param midY		Top-most point's Y coordinate of the triangle
 * @param lastX		Right-most point's X coordinate of the triangle
 * @param lastY		Right-most point's Y coordinate of the triangle
 **/
export function POINT_ORTHOGONAL(firstX: number, firstY: number, midX: number, midY: number, lastX: number, lastY: number): number {
	var length = POINT_DISTANCE(firstX, firstY, lastX, lastY);
	return length > 0
		? POLY_AREA([
			{ x: firstX, y: firstY },
			{ x: midX, y: midY },
			{ x: lastX, y: lastY },
		]) / length * 2
		: POINT_DISTANCE(firstX, firstY, midX, midY);
}

/**
 * Sorts points by left-most, then by top-most.
 **/
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
 * Calculates the distance between two points using Pythagorean theorem.
 * @param startingX	Starting X coordinate
 * @param startingY	Starting Y coordinate
 * @param endingX	Other X coordinate
 * @param endingY	Other Y coordinate
 **/
export function POINT_DISTANCE(
	startingX: number,
	startingY: number,
	endingX: number,
	endingY: number
): number {
	return PYTHAGORA(
		endingX - startingX,
		endingY - startingY
	);
}

/**
 * Calculates the starting angle (in degrees) between two Points using the top as zero.  Does not return negative values.
 * @param startingX	Starting X coordinate
 * @param startingY	Starting Y coordinate
 * @param endingX	Other X coordinate
 * @param endingY	Other Y coordinate
 * @returns A number between 0 and 360.
 **/
export function POINT_ANGLE(
	startingX: number,
	startingY: number,
	endingX: number,
	endingY: number
): number {
	var angle = 0.0;
	if (startingX !== endingX || startingY !== endingY) {
		angle = ATAN2(endingY - startingY, endingX - startingX)
			* RADIANS_TO_DEGREES
			+ 90;	// top as zero
	}
	return (angle + 360) % 360;	// make sure no negative numbers
}

/**
 * Calculates the vector which can be used to find the point based on the given direction and distance
 * @param distance
 * @param degrees
 **/
export function POINT_VECTOR(distance: number, degrees: number): IPoint {
	var radians = (degrees - 90) * DEGREES_TO_RADIANS;
	return {
		x: COS(radians) * distance,
		y: SIN(radians) * distance,
	};
}

/**
 * Calculates the total area occupied by the given path.  Treats non-closed paths as closed paths.
 * @param path	The array of points representing a path
 * @return {!number}
 **/
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
 * Calculates the total length of the given path
 * @param path	The array of points representing a path
 * @return {!number}
 **/
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
 * Wraps the given points into a polygonal path.  The given points do not need to be a path.  The returned path is not closed.
 * @param points	The array of points on which to create the non-closed path
 * @return {!Array.<Point>}		Non-closed path.
 **/
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
				angle = POINT_ANGLE(point.x, point.y, candidate.x, candidate.y),
				distance = POINT_DISTANCE(point.x, point.y, candidate.x, candidate.y);
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

/**
 * A utility export function to determine if a given point is inside the given polygon path.
 * @param poly	The array of points represents the path of the polygon.
 * @param pointX		X coordinate of the point to be checked.
 * @param pointY		Y coordinate of the point to be checked.
 * @return {!boolean}
 **/
export function POLY_CONTAINS(poly: IPoint[], pointX: number, pointY: number): boolean {
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
	if ((new Rectangle(path)).contains(new Point(pointX, pointY))) {
		for (; i < l; j = i++) {
			var pointA = path[i],
				pointB = path[j];
			if (
				(pointA.y > pointY) != (pointB.y > pointY)
				&& pointX < (pointB.x - pointA.x) * (pointY - pointA.y) / (pointB.y - pointA.y) + pointA.x
			) {
				inside = !inside;
			}
		}
	}
	return inside;
}

/**
 * 
 * @param firstPoint
 * @param midPoint
 * @param lastPoint
 * @return {number}
 **/
export function POINT_PEUCKER_FILTER(
	firstPoint: IPoint,
	midPoint: IPoint,
	lastPoint: IPoint
): number {
	return POINT_ORTHOGONAL(
		firstPoint.x,
		firstPoint.y,
		midPoint.x,
		midPoint.y,
		lastPoint.x,
		lastPoint.y
	);
}

/**
 * Performs a Douglas-Peucker path reduction based on the given tolerance.
 * @param path	The array of points representing a path
 * @param tolerance		Orthogonal height threshold for candidate points.  Default is 0.
 * @return {!Array.<Point>}
 **/
export function PATH_PEUCKER(path: IPoint[], tolerance: number = 0) {
	if (path.length < 3) {
		return path.slice();
	} else {
		if (!(tolerance > 0)) tolerance = 0;

		return path.filter(
			FILTER_BY_BOOLEAN_ARRAY,
			DOUGLASPEUCKER(path, POINT_PEUCKER_FILTER, tolerance)
		);
	}
}

/**
 * Performs a Douglas-Peucker path reduction on a polygon for the given tolerance.
 * The start/end points are variable and the end point is trimmed from the result.
 * @param path	The array of points representing a path
 * @param tolerance		Orthogonal height threshold for candidate points.  Default is 0.
 * @return {!Array.<Point>}
 **/
export function POLY_PEUCKER(path: IPoint[], tolerance:number=0) {
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
					distance = POINT_DISTANCE(point.x, point.y, candidate.x, candidate.y);
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
		if (POINT_DISTANCE(points[0].x, points[0].y, points[length - 1].x, points[length - 1].y) > 0) length = points.push(points[0]);

		// reduce the polygon's points
		points = points.filter(
			FILTER_BY_BOOLEAN_ARRAY,
			DOUGLASPEUCKER(points, POINT_PEUCKER_FILTER, tolerance)
		);

		// trim end point if the same as start point
		length = points.length;
		if (POINT_DISTANCE(points[0].x, points[0].y, points[length - 1].x, points[length - 1].y) <= 0) points.pop();

		return points;
	}
}
/**
 * Calculates the circumference of a circle based on the given radius.
 * @param radius		
 * @return {!number}
 **/
export function RADIAL_CIRCUMFERENCE(radius:number):number {
	return 2 * PI * radius;
}
/**
 * Calculates the area of a circle based on the given radius.
 * @param radius		
 * @return {!number}
 **/
export function RADIAL_AREA(radius:number):number {
	return PI * (radius * radius);
}
/**
 * Solves the Minimum Enclosing Circle problem using Badoiu Clarkson's algorithm.
 * @param points	The array of points on which to create the Radial
 * @param iterations	The higher the iterations the slower and more accurate the Radial. Default is 10,000.
 * @return {!Radial}
 **/
export function RADIAL_BADOIU_CLARKSON(points: IPoint[], iterations: number): IRadial {
	var centre = points[0],
		radius = 0.0,
		l = points.length;
	// short-circuit for special cases
	if (l === 1) {
		return {
			x: centre.x,
			y: centre.y,
			r: radius,
		};
	} else if (l === 2) {
		return new Rectangle(centre, points[1]).toRadial(false);
	}
	// long-circuit
	if (!iterations) iterations = 10000;

	for (var iter = 0; iter < iterations; iter++) {
		var winner = points[0],
			max = 0.0;
		for (var i = 0; i < l; i++) {
			var point = points[i],
				distance = POINT_DISTANCE(centre.x, centre.y, point.x, point.y);
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
 * Returns true if the given {@link Radial} overlaps the given {@link Rectangle}.
 * @param }	radial
 * @param }	rectangle
 * @return {!boolean}
 **/
export function RADIAL_OVERLAP_RECTANGLE(radial: IRadial, rectangle: IRectangle): boolean {
	var tall = new Rectangle(rectangle),
		wide = new Rectangle(rectangle);
	tall.top -= radial.r;
	tall.bottom += radial.r;
	wide.left -= radial.r;
	wide.right += radial.r;
	return tall.contains(radial)
		|| wide.contains(radial)
		|| POINT_DISTANCE(radial.x, radial.y, rectangle.left, rectangle.top) <= radial.r
		|| POINT_DISTANCE(radial.x, radial.y, rectangle.right, rectangle.top) <= radial.r
		|| POINT_DISTANCE(radial.x, radial.y, rectangle.left, rectangle.bottom) <= radial.r
		|| POINT_DISTANCE(radial.x, radial.y, rectangle.right, rectangle.bottom) <= radial.r
}