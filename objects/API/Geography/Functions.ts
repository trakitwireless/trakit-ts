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
} from '../Constants';
import {
	DOUGLASPEUCKER,
	FILTER_BY_BOOLEAN_ARRAY,
	IS_NAN,
	IS_NUMBER,
	PYTHAGORA,
	ROUND_TO,
} from '../Functions';
import { ILatLng } from './Interfaces';

// Hiigara
export const EARTH_RADIUS: number = 6378137;  // meters
export const EARTH_ELLIPSOID: number = 298.257223563;
export const EARTH_FLATENING: number = 1 / EARTH_ELLIPSOID;
export const EARTH_RADIUS_MINOR: number = EARTH_RADIUS - (EARTH_RADIUS * EARTH_FLATENING); // 6356752.3142 meters => wgs84

// for map tile calculations
export const TILE_SIZE_PX: number = 256;
export const MAX_TILE_LAT: number = 85.05112878;
export const MAX_TILE_LNG: number = 180;

/**
 * Checks to see if a given latitude is at one of the poles
 * @param lat
 **/
function LATITUDE_IS_POLE(lat: number): boolean {
	return ROUND_TO(COS(lat * DEGREES_TO_RADIANS), 9) === 0;
}
/**
 * Normalizes a latitude value between +/- 90.
 * Values of greater than 90 are returned as 90, and values less than -90 are returned as -90.
 * @param {!number} latitude
 * @param {number=} edge
 * @return {!number}
 */
function LATITUDE_NORMALIZED(latitude: number, edge: number = 90): number {
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
 * @param {!number} longitude
 * @return {!number}
 */
function LONGITUDE_NORMALIZED(longitude) {
	return IS_NUMBER(longitude)
		? ABS(longitude %= 360) > 180
			? longitude + (longitude < 0 ? 360 : -360)
			: longitude
		: NaN;
}

//#region LatLng helpers
/**
 * Calculates the distance between two coordinates on a sphere.
 * @param {!number} start	The starting coordinate
 * @param {!number} end		The ending coordinate
 * @param {number=} radius	The equatorial radius.  Default is {@link geography.earthRadius}.
 * @return {!number}
 */
function LATLNG_DISTANCE(start: ILatLng, end: ILatLng, radius: number = EARTH_RADIUS) {
	const aLat = LATITUDE_NORMALIZED(start.lat),
		bLat = LATITUDE_NORMALIZED(end.lat),
		lat1 = LATITUDE_IS_POLE(aLat)
			? 0
			: aLat * DEGREES_TO_RADIANS,
		lat2 = LATITUDE_IS_POLE(bLat)
			? 0
			: bLat * DEGREES_TO_RADIANS,
		lng1 = LONGITUDE_NORMALIZED(start.lng) * DEGREES_TO_RADIANS,
		lng2 = LONGITUDE_NORMALIZED(end.lng) * DEGREES_TO_RADIANS,
		dLat = lat2 - lat1,
		dLng = lng2 - lng1,
		sin_dLat_half = POW(SIN(dLat / 2), 2),	// minor optimization
		sin_dLng_half = POW(SIN(dLng / 2), 2),	// minor optimization
		distance = sin_dLat_half + COS(lat1) * COS(lat2) * sin_dLng_half;
	return (2 * ATAN2(SQRT(distance), SQRT(1 - distance))) * radius;
}
/**
 * Calculates the distance between two coordinates on a Bessel 1841 ellipsoid.
 * @param {!number} start	The starting coordinate
 * @param {!number} end		The ending coordinate
 * @return {!number}
 */
function LATLNG_DISTANCE_VINCENTY(start: ILatLng, end: ILatLng): number {
	var L = (bLng - aLng) * DEGREES_TO_RADIANS,
			U1 = ATAN((1 - EARTH_FLATENING) * TAN(aLat * DEGREES_TO_RADIANS)),
			U2 = ATAN((1 - EARTH_FLATENING) * TAN(aLat * DEGREES_TO_RADIANS)),
			sinU1 = SIN(U1),
			cosU1 = COS(U1),
			sinU2 = SIN(U2),
			cosU2 = COS(U2),
			lambda = L,
			lambdaP,
			iterLimit = 100,
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

	var uSq = cosSqAlpha * (EARTH_RADIUS * EARTH_RADIUS - EARTH_RADIUS_MINOR * EARTH_RADIUS_MINOR) / (EARTH_RADIUS_MINOR * EARTH_RADIUS_MINOR),
		A = 1 + uSq / 16384 * (4096 + uSq * (-768 + uSq * (320 - 175 * uSq))),
		B = uSq / 1024 * (256 + uSq * (-128 + uSq * (74 - 47 * uSq))),
		deltaSigma = B * sinSigma * (cos2SigmaM + B / 4 * (cosSigma * (-1 + 2 * cos2SigmaM * cos2SigmaM) - B / 6 * cos2SigmaM * (-3 + 4 * sinSigma * sinSigma) * (-3 + 4 * cos2SigmaM * cos2SigmaM))),
		s = EARTH_RADIUS_MINOR * A * (sigma - deltaSigma);
	return s;
}
/**
 * Bearing from coordinate A to coordinate B in degrees from North
 * @param {!number} aLat		The starting latitude
 * @param {!number} aLng		The starting longitude
 * @param {!number} bLat		The ending latitude
 * @param {!number} bLng		The ending longitude
 * @return {!number}		Degrees from North
 */
function LATLNG_ANGLE(aLat, aLng, bLat, bLng) {
	//	if (aLat >= 90 || bLat <= -90) return 180;	// shortcut of PI * RADIANS_TO_DEGREES; RADIANS_TO_DEGREES = 180 / PI; so this is "PI * 180 / PI" = 180;
	//	else if (aLat <= -90 || bLat >= 90) return 0;// shortcut of (PI * 2) * RADIANS_TO_DEGREES; RADIANS_TO_DEGREES = 180 / PI; so this is "(PI * 2) * 180 / PI" = 360 aka 0;
	//	console.log(ROUND_TO(COS(aLat * DEGREES_TO_RADIANS), 15));
	if (LATITUDE_IS_POLE(aLat)) {	// starting at one of the poles
		return aLat > 0 ? 180 : 0;
	} else {
		var lat1 = LATITUDE_NORMALIZED(aLat) * DEGREES_TO_RADIANS,
			lat2 = LATITUDE_NORMALIZED(bLat) * DEGREES_TO_RADIANS,
			dLng = (bLng - aLng) * DEGREES_TO_RADIANS,
			cos_lat2 = COS(lat2),	// minor optimization
			bearing = ATAN2(SIN(dLng) * cos_lat2, COS(lat1) * SIN(lat2) - SIN(lat1) * cos_lat2 * COS(dLng)) * RADIANS_TO_DEGREES;
		return (bearing + 360) % 360;
	}
}
/**
 * Calculates the orthogonal height of a triangle.
	The orthogonal height is calculated by drawing a line between the coordinate A and coordinate B, then getting the length
	of a line drawn up from the line to the mid coordinate at a 90 degree angle.
 * @param {!number} aLat		Left-most coordinate's latitude on the great circle
 * @param {!number} aLng		Left-most coordinate's longitude on the great circle
 * @param {!number} midLat	Top-most coordinate's latitude
 * @param {!number} midLng	Top-most coordinate's longitude
 * @param {!number} bLat		Right-most coordinate's latitude on the great circle
 * @param {!number} bLng		Right-most coordinate's longitude on the great circle
 * @param {number=} radius	The equatorial radius.  Default is {@link geography.earthRadius}.
 * @return {!number}		Value is negative when distance is to the right, and positive when distance to the left.
 */
function LATLNG_GREAT_CIRCLE(aLat, aLng, midLat, midLng, bLat, bLng, radius) {
	if (IS_NAN(radius)) radius = EARTH_RADIUS;
	// if coordinate a and b are practically the same, return distance from a to mid
	if (LATLNG_DISTANCE(aLat, aLng, bLat, bLng, radius) < MAX_SAME_DISTANCE) return LATLNG_DISTANCE(aLat, aLng, midLat, midLng, radius);

	var aLatRad = aLat * DEGREES_TO_RADIANS,
		aLngRad = aLng * DEGREES_TO_RADIANS,
		midLatRad = midLat * DEGREES_TO_RADIANS,
		midLngRad = midLng * DEGREES_TO_RADIANS,
		bLatRad = bLat * DEGREES_TO_RADIANS,
		bLngRad = bLng * DEGREES_TO_RADIANS,

		aLatSin = SIN(aLatRad),
		aLatCos = COS(aLatRad),
		aLngSin = SIN(aLngRad),
		aLngCos = COS(aLngRad),

		midLatSin = SIN(midLatRad),
		midLatCos = COS(midLatRad),
		midLngSin = SIN(midLngRad),
		midLngCos = COS(midLngRad),

		bLatSin = SIN(bLatRad),
		bLatCos = COS(bLatRad),
		bLngSin = SIN(bLngRad),
		bLngCos = COS(bLngRad),

		cosTheta = aLatSin * bLatSin + aLatCos * bLatCos * (aLngCos * bLngCos + aLngSin * bLngSin),
		inverseSinThetaSquared = 1 - cosTheta * cosTheta;

	return ASIN(ROUND_TO(
		(
			aLatSin * (bLatCos * midLatCos * bLngCos * midLngSin - bLatCos * midLatCos * bLngSin * midLngCos)
			+ aLatCos * aLngCos * (bLatCos * midLatSin * bLngSin - bLatSin * midLatCos * midLngSin)
			+ aLatCos * aLngSin * (bLatSin * midLatCos * midLngCos - bLatCos * midLatSin * bLngCos)
		) / SQRT(inverseSinThetaSquared)
	, 15)) * radius;
}
/**
 * Calculates the final coordinate based on the given starting coordinate and vector
 * @param {!number} lat		The staring latitude
 * @param {!number} lng		The staring longitude
 * @param {!number} meters	The distance away from this LatLng
 * @param {!number} bearing	The direction in which to calculate the new position in degrees from North
 * @param {number=} radius	The equatorial radius. Default is {@link geography.earthRadius}.
 * @throws {Error}			Either latitude or longitude is NaN
 * @return {!LatLng}
 */
function LATLNG_TRANSLATE(lat, lng, meters, bearing, radius) {
	//console.info(lat, lng, meters, bearing, radius);
	if (meters >= MAX_SAME_DISTANCE) {
		if (IS_NAN(radius)) radius = EARTH_RADIUS;
		var distance = meters / radius,
			heading = bearing * DEGREES_TO_RADIANS,
			lat1 = lat * DEGREES_TO_RADIANS,
			lng1 = lng * DEGREES_TO_RADIANS,
//console.log(distance, heading, lat1, lng1);		var	
			lat2 = ASIN(ROUND_TO(SIN(lat1) * COS(distance) + COS(lat1) * SIN(distance) * COS(heading), 15)),
			lng2 = lng1 + ATAN2(SIN(heading) * SIN(distance) * COS(lat1), COS(distance) - SIN(lat1) * SIN(lat2));
		//console.log([lat2, lng2], [lat2 * RADIANS_TO_DEGREES, lng2 * RADIANS_TO_DEGREES]);
		lat = lat2 * RADIANS_TO_DEGREES;
		lng = lng2 * RADIANS_TO_DEGREES;
	}
	if (IS_NAN(lat) || IS_NAN(lng)) throw new Error("Either latitude or longitude is NaN");
	return new LatLng(lat, lng);
}
/**
 * Calculates the mid-point between to given coordinate
 * @param {!number} aLat		Left-most coordinate's latitude on the great circle
 * @param {!number} aLng		Left-most coordinate's longitude on the great circle
 * @param {!number} bLat		Right-most coordinate's latitude on the great circle
 * @param {!number} bLng		Right-most coordinate's longitude on the great circle
 * @throws {Error}			Either latitude or longitude is NaN
 * @return {!LatLng}
 */
function LATLNG_MIDPOINT(aLat, aLng, bLat, bLng) {
	var lat1 = aLat * DEGREES_TO_RADIANS,
		lng1 = aLng * DEGREES_TO_RADIANS,
		lat2 = bLat * DEGREES_TO_RADIANS,
		dLng = (bLng - aLng) * DEGREES_TO_RADIANS,
		Bx = COS(lat2) * COS(dLng),
		By = COS(lat2) * SIN(dLng),
		lat3 = ATAN2(SIN(lat1) + SIN(lat2), SQRT((COS(lat1) + Bx) * (COS(lat1) + Bx) + By * By)),
		lng3 = lng1 + ATAN2(By, COS(lat1) + Bx);
	if (IS_NAN(lat3) || IS_NAN(lng3)) throw new Error("latitude or longitude is NaN");
	return new LatLng(lat3 * RADIANS_TO_DEGREES, lng3 * RADIANS_TO_DEGREES);
}
//#endregion LatLng helpers