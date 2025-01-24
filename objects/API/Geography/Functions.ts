import {
	ABS,
	ATAN2,
	SIN,
	COS,
	PI,
	DEGREES_TO_RADIANS,
	RADIANS_TO_DEGREES,
	POW,
	SQRT,
	FLOAT,
	ATAN,
	TAN,
	ASIN,
} from '../Constants';
import {
	DOUGLASPEUCKER_INTERNAL,
	FILTER_BY_BOOLEAN_ARRAY,
	IS_AN,
	IS_NAN,
	IS_NUMBER,
	PYTHAGORA,
	ROUND_TO,
} from '../Functions';
import { ILatLng } from './Interfaces';

//#region Hiigara
/**
 * The radius of the Earth in meters taken from the GRS-80, NAD83, and WGS-84 standards.
 */
export const EARTH_RADIUS: number = 6378137;  
/**
 * The ellipsoid of the Earth taken from the WGS-84 standard.
 * @default ~298.2572
 */
export const EARTH_ELLIPSOID: number = 298.257223563;
/**
 * Inversion of the ellipsoid value for calculations.
 */
export const EARTH_FLATENING: number = 1 / EARTH_ELLIPSOID;
/**
 * The minor axis radius of an ellipsoid Earth as per WGS-84.
 * @default ~6356752.3142
 */
export const EARTH_RADIUS_MINOR: number = EARTH_RADIUS - (EARTH_RADIUS * EARTH_FLATENING);
/**
 * The surface area of the Earth in meters squared.
 * @default 511207893395811
 */
export const EARTH_SURFACE: number = 4 * PI * (EARTH_RADIUS * EARTH_RADIUS);
/**
 * 
 */
export const EARTH_RADIUS_RATIO: number = EARTH_RADIUS_MINOR / EARTH_RADIUS;
/**
 * 
 */
export const EARTH_RADIUS_ECCENT: number = SQRT(1 - (EARTH_RADIUS_RATIO * EARTH_RADIUS_RATIO));
/**
 * 
 */
export const EARTH_RADIUS_COM: number = EARTH_RADIUS_ECCENT / 2;
//#endregion Hiigara

//#region Map tiles (Mercator)
/**
 * 
 */
export const TILE_SIZE_PX: number = 256;
/**
 * 
 */
export const MAX_TILE_LAT: number = 85.05112878;
/**
 * 
 */
export const MAX_TILE_LNG: number = 180;
//#endregion Map tiles (Mercator)

/**
 * Checks to see if a given latitude is at one of the poles.
 * @param latitude
 */
export function LATITUDE_IS_POLE(latitude: number): boolean {
	return ROUND_TO(COS(latitude * DEGREES_TO_RADIANS), 9) === 0;
}
/**
 * Normalizes a latitude value between +/- 90.
 * Values of greater than 90 are returned as 90, and values less than -90 are returned as -90.
 * @param latitude
 * @param edge
 */
export function LATITUDE_NORMALIZED(latitude: number, edge: number = 90): number {
	return IS_NUMBER(latitude)
		? latitude > edge
			? edge
			: latitude < -edge
				? -edge
				: latitude
		: NaN;
}
/**
 * Normalizes a longitude value between +/- 180.
 * Values of greater than 180 are returned as a negative difference of 360, and values less than -180 are returned as a positive difference of 360.
 * @param longitude
 * @param latitude	When given, will check if the latitude is a pole, and converts the longitude to zero.
 */
export function LONGITUDE_NORMALIZED(longitude: number, latitude: number = NaN): number {
	longitude = IS_NUMBER(longitude)
		? ABS(longitude %= 360) > 180
			? longitude + (longitude < 0 ? 360 : -360)
			: longitude
		: NaN;
	if (IS_AN(latitude) && LATITUDE_IS_POLE(latitude)) {
		longitude = 0;
	}
	return longitude;
}

//#region LatLng helpers
/**
 * The distance in meters before considering to coordinates to have the same location.
 * @default 0.000000001
 */
export const MAX_SAME_DISTANCE = 1e-9;

/**
 * Bearing from coordinate A to coordinate B in degrees from North.
 * @param first	The starting coordinate.
 * @param last	The ending coordinate.
 * @return		Degrees from North.
 */
export function LATLNG_ANGLE(first: ILatLng, last: ILatLng): number {
	const aLat = LATITUDE_NORMALIZED(first.lat),
		bLat = LATITUDE_NORMALIZED(last.lat),
		aLng = LONGITUDE_NORMALIZED(first.lng, aLat),
		bLng = LONGITUDE_NORMALIZED(last.lng, bLat);
	if (LATITUDE_IS_POLE(aLat)) {	// starting at one of the poles
		return aLat > 0 ? 180 : 0;
	} else {
		const lat1 = aLat * DEGREES_TO_RADIANS,
			lat2 = bLat * DEGREES_TO_RADIANS,
			dLng = (bLng - aLng) * DEGREES_TO_RADIANS,
			cos_lat2 = COS(lat2),	// minor optimization
			bearing = ATAN2(SIN(dLng) * cos_lat2, COS(lat1) * SIN(lat2) - SIN(lat1) * cos_lat2 * COS(dLng)) * RADIANS_TO_DEGREES;
		return (bearing + 360) % 360;
	}
}
/**
 * Calculates the distance between two coordinates on a sphere.
 * @param first	The starting coordinate.
 * @param last	The ending coordinate.
 */
export function LATLNG_DISTANCE(first: ILatLng, last: ILatLng): number {
	const aLat = LATITUDE_NORMALIZED(first.lat),
		bLat = LATITUDE_NORMALIZED(last.lat),
		aLng = LONGITUDE_NORMALIZED(first.lng, aLat),
		bLng = LONGITUDE_NORMALIZED(last.lng, bLat),
		lat1 = aLat * DEGREES_TO_RADIANS,
		lat2 = bLat * DEGREES_TO_RADIANS,
		lng1 = aLng * DEGREES_TO_RADIANS,
		lng2 = bLng * DEGREES_TO_RADIANS,
		dLat = lat2 - lat1,
		dLng = lng2 - lng1,
		sin_dLat_half = POW(SIN(dLat / 2), 2),	// minor optimization
		sin_dLng_half = POW(SIN(dLng / 2), 2),	// minor optimization
		distance = sin_dLat_half + COS(lat1) * COS(lat2) * sin_dLng_half;
	return (2 * ATAN2(SQRT(distance), SQRT(1 - distance))) * EARTH_RADIUS;
}
/**
 * Calculates the distance between two coordinates on a Bessel 1841 ellipsoid.
 * @param start	The starting coordinate.
 * @param end	The ending coordinate.
 */
export function LATLNG_DISTANCE_VINCENTY(start: ILatLng, end: ILatLng): number {
	const aLat = LATITUDE_NORMALIZED(start.lat),
		bLat = LATITUDE_NORMALIZED(end.lat),
		aLng = LONGITUDE_NORMALIZED(start.lng, aLat),
		bLng = LONGITUDE_NORMALIZED(end.lng, bLat),
		L = (bLng - aLng) * DEGREES_TO_RADIANS,
		U1 = ATAN((1 - EARTH_FLATENING) * TAN(aLat * DEGREES_TO_RADIANS)),
		U2 = ATAN((1 - EARTH_FLATENING) * TAN(aLat * DEGREES_TO_RADIANS)),
		sinU1 = SIN(U1),
		cosU1 = COS(U1),
		sinU2 = SIN(U2),
		cosU2 = COS(U2);
	let lambda = L,
		iterLimit = 100,
		lambdaP,
		sinLambda,
		cosLambda,
		sinSigma,
		cosSigma,
		sigma,
		sinAlpha,
		cosSqAlpha,
		cos2SigmaM,
		C;
	do {
		sinLambda = SIN(lambda);
		cosLambda = COS(lambda);
		sinSigma = SQRT((cosU2 * sinLambda) * (cosU2 * sinLambda) + (cosU1 * sinU2 - sinU1 * cosU2 * cosLambda) * (cosU1 * sinU2 - sinU1 * cosU2 * cosLambda));
		if (0 === sinSigma) {
			return 0; // co-incident points
		};
		cosSigma = sinU1 * sinU2 + cosU1 * cosU2 * cosLambda;
		sigma = ATAN2(sinSigma, cosSigma);
		sinAlpha = cosU1 * cosU2 * sinLambda / sinSigma;
		cosSqAlpha = 1 - sinAlpha * sinAlpha;
		cos2SigmaM = cosSigma - 2 * sinU1 * sinU2 / cosSqAlpha;
		C = EARTH_FLATENING / 16 * cosSqAlpha * (4 + EARTH_FLATENING * (4 - 3 * cosSqAlpha));
		if (IS_NAN(cos2SigmaM)) {
			cos2SigmaM = 0; // equatorial line: cosSqAlpha = 0 (§6)
		};
		lambdaP = lambda;
		lambda = L + (1 - C) * EARTH_FLATENING * sinAlpha * (sigma + C * sinSigma * (cos2SigmaM + C * cosSigma * (-1 + 2 * cos2SigmaM * cos2SigmaM)));
	} while (ABS(lambda - lambdaP) > 1e-12 && --iterLimit > 0);

	if (!iterLimit) {
		return 0;	// formula failed to converge
	}

	const uSq = cosSqAlpha * (EARTH_RADIUS * EARTH_RADIUS - EARTH_RADIUS_MINOR * EARTH_RADIUS_MINOR) / (EARTH_RADIUS_MINOR * EARTH_RADIUS_MINOR),
		A = 1 + uSq / 16384 * (4096 + uSq * (-768 + uSq * (320 - 175 * uSq))),
		B = uSq / 1024 * (256 + uSq * (-128 + uSq * (74 - 47 * uSq))),
		deltaSigma = B * sinSigma * (cos2SigmaM + B / 4 * (cosSigma * (-1 + 2 * cos2SigmaM * cos2SigmaM) - B / 6 * cos2SigmaM * (-3 + 4 * sinSigma * sinSigma) * (-3 + 4 * cos2SigmaM * cos2SigmaM))),
		s = EARTH_RADIUS_MINOR * A * (sigma - deltaSigma);
	return s;
}
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
export function LATLNG_GREAT_CIRCLE(
	first: ILatLng,
	middle: ILatLng,
	last: ILatLng
): number {
	// if coordinate a and b are practically the same, return distance from a to mid
	if (LATLNG_DISTANCE(first, last) < MAX_SAME_DISTANCE) {
		return LATLNG_DISTANCE(first, middle);
	}
	const aLat = LATITUDE_NORMALIZED(first.lat),
		mLat = LATITUDE_NORMALIZED(middle.lat),
		bLat = LATITUDE_NORMALIZED(last.lat),
		aLng = LONGITUDE_NORMALIZED(first.lng, aLat),
		mLng = LONGITUDE_NORMALIZED(middle.lng, mLat),
		bLng = LONGITUDE_NORMALIZED(last.lng, bLat),
		aLatRad = aLat * DEGREES_TO_RADIANS,
		aLngRad = aLng * DEGREES_TO_RADIANS,
		mLatRad = mLat * DEGREES_TO_RADIANS,
		mLngRad = mLng * DEGREES_TO_RADIANS,
		bLatRad = bLat * DEGREES_TO_RADIANS,
		bLngRad = bLng * DEGREES_TO_RADIANS,

		aLatSin = SIN(aLatRad),
		aLatCos = COS(aLatRad),
		aLngSin = SIN(aLngRad),
		aLngCos = COS(aLngRad),

		mLatSin = SIN(mLatRad),
		mLatCos = COS(mLatRad),
		mLngSin = SIN(mLngRad),
		mLngCos = COS(mLngRad),

		bLatSin = SIN(bLatRad),
		bLatCos = COS(bLatRad),
		bLngSin = SIN(bLngRad),
		bLngCos = COS(bLngRad),

		cosTheta = aLatSin * bLatSin + aLatCos * bLatCos * (aLngCos * bLngCos + aLngSin * bLngSin),
		inverseSinThetaSquared = 1 - cosTheta * cosTheta;

	return ASIN(ROUND_TO(
		(
			aLatSin * (bLatCos * mLatCos * bLngCos * mLngSin - bLatCos * mLatCos * bLngSin * mLngCos)
			+ aLatCos * aLngCos * (bLatCos * mLatSin * bLngSin - bLatSin * mLatCos * mLngSin)
			+ aLatCos * aLngSin * (bLatSin * mLatCos * mLngCos - bLatCos * mLatSin * bLngCos)
		) / SQRT(inverseSinThetaSquared)
		, 15)) * EARTH_RADIUS;
}
/**
 * Calculates the final coordinate based on the given starting coordinate and vector.
 * @param pin		The staring coordinate.
 * @param meters	The distance away from this LatLng.
 * @param bearing	The direction in which to calculate the new position in degrees from North.
 * @throws {Error}	Either latitude or longitude is NaN.
 */
export function LATLNG_TRANSLATE(pin: ILatLng, meters: number, bearing: number): ILatLng {
	let lat = LATITUDE_NORMALIZED(pin.lat),
		lng = LONGITUDE_NORMALIZED(pin.lng,lat);
	if (meters >= MAX_SAME_DISTANCE) {
		const distance = meters / EARTH_RADIUS,
			heading = bearing * DEGREES_TO_RADIANS,
			lat1 = lat * DEGREES_TO_RADIANS,
			lng1 = lng * DEGREES_TO_RADIANS,
			lat2 = ASIN(ROUND_TO(SIN(lat1) * COS(distance) + COS(lat1) * SIN(distance) * COS(heading), 15)),
			lng2 = lng1 + ATAN2(SIN(heading) * SIN(distance) * COS(lat1), COS(distance) - SIN(lat1) * SIN(lat2));
		lat = lat2 * RADIANS_TO_DEGREES;
		lng = lng2 * RADIANS_TO_DEGREES;
	}
	if (IS_NAN(lat) || IS_NAN(lng)) {
		throw new Error("Either latitude or longitude is NaN");
	}
	return {
		lat,
		lng
	};
}
/**
 * Calculates the mid-point between to given coordinate.
 * @param first		Left-most coordinate.
 * @param last		Right-most coordinate.
 * @throws {Error}	Either latitude or longitude is NaN.
 */
export function LATLNG_MIDPOINT(first: ILatLng, last: ILatLng): ILatLng {
	const aLat = LATITUDE_NORMALIZED(first.lat),
		bLat = LATITUDE_NORMALIZED(last.lat),
		aLng = LONGITUDE_NORMALIZED(first.lng, aLat),
		bLng = LONGITUDE_NORMALIZED(last.lng, bLat),
		lat1 = aLat * DEGREES_TO_RADIANS,
		lng1 = aLng * DEGREES_TO_RADIANS,
		lat2 = bLat * DEGREES_TO_RADIANS,
		dLng = (bLng - aLng) * DEGREES_TO_RADIANS,
		Bx = COS(lat2) * COS(dLng),
		By = COS(lat2) * SIN(dLng),
		lat3 = ATAN2(SIN(lat1) + SIN(lat2), SQRT((COS(lat1) + Bx) * (COS(lat1) + Bx) + By * By)),
		lng3 = lng1 + ATAN2(By, COS(lat1) + Bx);
	if (IS_NAN(lat3) || IS_NAN(lng3)) throw new Error("latitude or longitude is NaN");
	return {
		lat: lat3 * RADIANS_TO_DEGREES,
		lng: lng3 * RADIANS_TO_DEGREES,
	};
}
//#endregion LatLng helpers

//#region Polyline helpers
/**
 * Calculates the length of the given route.
 * @param route		
 */
export function ROUTE_LENGTH(route: ILatLng[]): number {
	const coords = [...route],
		l = coords.length - 1;
	for (let i = 0, length = 0; i < l; i++) {
		length += LATLNG_DISTANCE(coords[i], coords[i + 1]);
	}
	return length;
}
/**
 * Performs a Douglas-Peucker path reduction based on the given tolerance.
 * @param route		The array of coordinates representing a path.
 * @param tolerance	Distance (in meters) threshold for candidate coordinates.  Default is 0.
 */
export function ROUTE_PEUCKER(route: ILatLng[], tolerance: number): ILatLng[] {
	const length = route.length;
	if (length < 3) {
		return [...route];
	} else {
		if (!(tolerance > 0)) tolerance = 0;
		return route.filter(
			FILTER_BY_BOOLEAN_ARRAY,
			DOUGLASPEUCKER_INTERNAL(route, ROUTE_PEUCKER_FILTER, tolerance)
		);
	}
}
/**
 * Used internally by {@link ROUTE_PEUCKER}, and passed to {@link DOUGLASPEUCKER_INTERNAL}.
 * @param first
 * @param middle
 * @param last
 */
function ROUTE_PEUCKER_FILTER(
	first: ILatLng,
	middle: ILatLng,
	last: ILatLng
): number {
	return ABS(LATLNG_GREAT_CIRCLE(
		first,
		middle,
		last
	));
}

/**
 * Used internally by {@link ROUTE_ENCODE} to encode the lat/lng values.
 * @param value
 * @param factor			
 */
function ROUTE_ENCODE_CHAR(value: number, factor: number): string {
	const chars: number[] = [];
	let shifted: number = (value * factor) << 1;
	if (shifted < 0) shifted = ~shifted;
	while (shifted >= 0x20) {
		chars.push((0x20 | (shifted & 0x1f)) + 0x3f);
		shifted >>= 0x05;
	}
	chars.push(shifted + 0x3f);
	return String.fromCharCode.apply(chars, chars);
}
/**
 * An implementation of Google's Encoded Polyline Algorithm format.
 * https://developers.google.com/maps/documentation/utilities/polylinealgorithm
 * @param route		The array of coordinates representing a path.
 * @param precision			Optional number of decimal places to use to calculate the results.  Default is 5.
 */
export function ROUTE_ENCODE(route: ILatLng[], precision: number = 5): string {
	const factor = POW(10, precision);
	let output = ROUTE_ENCODE_CHAR(route[0].lat, factor)
				+ ROUTE_ENCODE_CHAR(route[0].lng, factor);
	for (let i = 1; i < route.length; i++) {
		const next = route[i],
			prev = route[i - 1];
		output += ROUTE_ENCODE_CHAR(next.lat - prev.lat, factor)
				+ ROUTE_ENCODE_CHAR(next.lng - prev.lng, factor);
	}
	return output;
}
/**
 * An implementation of Google's Decoded Polyline Algorithm format.
 * https://developers.google.com/maps/documentation/utilities/polylinealgorithm
 * @param route			The encoded string which represents the coordinates in a path.
 * @param precision			Optional number of decimal places used to recalculate the results.  Default is 5.
 */
export function ROUTE_DECODE(route: string, precision: number = 5): ILatLng[] {
	const length = route.length,
		path: ILatLng[] = [],
		factor = POW(10, precision || 5);
	let index = 0,
		lat = index,
		lng = index;
	function diff() {
		let byte = 0,
			shift = 0,
			result = 0;
		do {
			byte = route.charCodeAt(index++) - 0x3f;
			result |= (byte & 0x1f) << shift;
			shift += 0x05;
		} while (byte >= 0x20);
		return result & 1
			? ~(result >> 1)
			: result >> 1;
	}
	while (index < length) {
		path.push({
			lat: (lat += diff()) / factor,
			lng: (lng += diff()) / factor
		});
	}
	return path;
}
//#endregion Polyline helpers

//#region Polygon helpers
/**
 * Finds the widest section of the given route.
 * This is useful for path reduction and reorientation.
 * @param route		The array of coordinates representing a path
 * @return			An array of three items; the first is the widest distance, and the others are the start and end index within the given route.
 */
export function GEOFENCE_WIDEST(route: ILatLng[]): number[] {
	const coords = [...route],
		length = route.length;
	let widest = 0,
		startIndex = 0,
		endIndex = length - 1;
	if (length > 1) {
		// find the widest part of the polygon (starting point is the only necessary bit)
		for (let i = 0; i < length; i++) {
			const point = coords[i];
			for (let j = i + 1; j < length; j++) {
				const candidate = coords[j],
					distance = LATLNG_DISTANCE(point, candidate);
				if (distance > widest) {
					startIndex = i;
					endIndex = j;
					widest = distance;
				}
			}
		}
	}
	return [
		widest,
		startIndex,
		endIndex,
	];
}
/**
 * Performs a Douglas-Peucker path reduction on a polygon for the given
 * tolerance. The start/end coordinates are variable and the end coordinate
 * is trimmed from the result.
 * @param route		The array of coordinates representing a path
 * @param tolerance	Distance (in meters) threshold for candidate coordinates.  Default is 0.
 */
export function GEOFENCE_PEUCKER(route: ILatLng[], tolerance: number = MAX_SAME_DISTANCE): ILatLng[] {
	let coords = [...route],
		length = route.length;
	if (length > 2) {
		const widest = GEOFENCE_WIDEST(coords),
			startIndex = widest[1],
			endIndex = widest[2];
		if (!(tolerance > 0)) tolerance = MAX_SAME_DISTANCE;

		// re-order the points with the new starting point (faster method)
		coords = coords.splice(startIndex, length).concat(coords);

		// make sure start and end points are identical
		if (LATLNG_DISTANCE(coords[0], coords[length - 1]) > tolerance) {
			length = coords.push(coords[0]);
		}

		// reduce the polygon's points
		coords = coords.filter(
			FILTER_BY_BOOLEAN_ARRAY,
			DOUGLASPEUCKER_INTERNAL(coords, ROUTE_PEUCKER_FILTER, tolerance)
			//LATLNG_PEUCKER_INTERNAL(coords, 0, length - 1, new Int8Array(coords.length), tolerance)
		);

		// trim end point if the same as start point
		length = coords.length;
		if (LATLNG_DISTANCE(coords[0], coords[length - 1]) <= tolerance) {
			coords.pop();
		}
	}
	return coords;
}
/**
 * Calculates the total area occupied by the given geofence.
 * @param route		The array of coordinates representing a geofence.
 * @throws {Error}	Not enough coordinates.
 */
export function GEOFENCE_AREA(route: ILatLng[]) {
	const coords = [...route];
	let summed = 0.0,
		index = 0,
		lastIndex = coords.length - 1,
		latlngA = coords[index],
		latlngB = coords[index],
		latlngC = coords[lastIndex];
	if (LATLNG_DISTANCE(latlngA, latlngB) <= MAX_SAME_DISTANCE) {
		coords.pop();
		lastIndex--;
	}
	if (lastIndex < 1) {
		throw new Error("Not enough coordinates");
	} else if (lastIndex > 1) {
		for (index = 1; index < lastIndex; index++) {
			latlngB = coords[index];
			latlngC = coords[index + 1];
			summed += TRIANGLE_AREA_RADIANS(latlngA, latlngB, latlngC)
				* TRIANGLE_INSIDE_OUT(latlngA, latlngB, latlngC);
		}
	}
	return ABS((EARTH_RADIUS * EARTH_RADIUS) * summed);
}
/**
 * Calculates the area of a triangle on a sphere. Always returns positive
 * value, even if triangle is inside-out.
 * Used internally by {@link GEOFENCE_AREA}.
 * @param first
 * @param middle
 * @param last
 */
function TRIANGLE_AREA_RADIANS(first: ILatLng, middle: ILatLng, last: ILatLng): number {
	const distanceAB = LATLNG_DISTANCE(first, middle) / EARTH_RADIUS,	// because I don't want the value in meters, I need it in radians
		distanceBC = LATLNG_DISTANCE(middle, last) / EARTH_RADIUS,
		distanceCA = LATLNG_DISTANCE(last, first) / EARTH_RADIUS,
		distance = (distanceAB + distanceBC + distanceCA) / 2,
		area = TAN(distance / 2)
			* TAN((distance - distanceAB) / 2)
			* TAN((distance - distanceBC) / 2)
			* TAN((distance - distanceCA) / 2);
	return 4 * ATAN(SQRT(ABS(area)));
}
/**
 * Calculates whether a triangle is inside-out.
 * Returns 1 for valid triangles, and -1 for invalid (inside-out).
 * Used internally by {@link GEOFENCE_AREA}.
 * @param first
 * @param middle
 * @param last
 */
function TRIANGLE_INSIDE_OUT(first: ILatLng, middle: ILatLng, last: ILatLng): number {
	const aLat = LATITUDE_NORMALIZED(first.lat),
		aLng = LONGITUDE_NORMALIZED(first.lng, aLat),
		bLat = LATITUDE_NORMALIZED(middle.lat),
		bLng = LONGITUDE_NORMALIZED(middle.lng, bLat),
		cLat = LATITUDE_NORMALIZED(last.lat),
		cLng = LONGITUDE_NORMALIZED(last.lng, cLat),
		aLatRad = aLat * DEGREES_TO_RADIANS,
		aLngRad = aLng * DEGREES_TO_RADIANS,
		bLatRad = bLat * DEGREES_TO_RADIANS,
		bLngRad = bLng * DEGREES_TO_RADIANS,
		cLatRad = cLat * DEGREES_TO_RADIANS,
		cLngRad = cLng * DEGREES_TO_RADIANS,
		aLatCosLngCos = COS(aLatRad) * COS(aLngRad),
		aLatCosLngSin = COS(aLatRad) * SIN(aLngRad),
		aLatSin = SIN(aLatRad),
		bLatCosLngCos = COS(bLatRad) * COS(bLngRad),
		bLatCosLngSin = COS(bLatRad) * SIN(bLngRad),
		bLatSin = SIN(bLatRad),
		cLatCosLngCos = COS(cLatRad) * COS(cLngRad),
		cLatCosLngSin = COS(cLatRad) * SIN(cLngRad),
		cLatSin = SIN(cLatRad);
	return aLatCosLngCos * bLatCosLngSin * cLatSin
		+ bLatCosLngCos * cLatCosLngSin * aLatSin
		+ cLatCosLngCos * aLatCosLngSin * bLatSin
		- aLatCosLngCos * cLatCosLngSin * bLatSin
		- bLatCosLngCos * aLatCosLngSin * cLatSin
		- cLatCosLngCos * bLatCosLngSin * aLatSin < 0
		? -1
		: 1;
}
/**
 * A utility export function to determine if a given coordinate is inside the given geofence.
 * @param route	The array of coordinates represents the path of the polygon.
 * @param pin	The coordinate to be checked.
 */
export function GEOFENCE_CONTAINS(route: ILatLng[], pin: ILatLng): boolean {
	throw "not implemented";
	/*
	const aLat = LATITUDE_NORMALIZED(pin.lat),
		aLng = LONGITUDE_NORMALIZED(pin.lng, aLat);
	*/
}
/**
 * Wraps the given coordinates into a polygonal path.
 * The given coordinates do not need to be a path.
 * The returned path is not closed.
 * @param coordinates	The array of coordinates on which to create the non-closed path
 */
export function GEOFENCE_WRAPPER(route: ILatLng[]): ILatLng[] {
	throw "not implemented";
}

/**
 * Calculates the spherical-cap area occupied by the given radial distance.
 * @param pin		The coordinate at which to calculate the area.
 * @param radius	The distance from the centre of the circle to any point along the edge.
 */
export function SPHERECAP_AREA(pin: ILatLng, radius: number) {
	throw "not implemented";
	/*var b = EARTH_RADIUS,
		a = EARTH_RADIUS,
		d = radius,
		D = (d / EARTH_RADIUS),
		c = SQRT((EARTH_RADIUS * EARTH_RADIUS) + (EARTH_RADIUS * EARTH_RADIUS) - 2 * EARTH_RADIUS * EARTH_RADIUS * COS(D));
	
	var angle = d / EARTH_RADIUS,
		area = EARTH_RADIUS * EARTH_RADIUS * (SIN(angle) / 2),
		height = 2 * (area / EARTH_RADIUS),
		centreToHeight = (SIN(90 - angle) * height) / SIN(angle);
		*/
}
//#endregion Polygon helpers