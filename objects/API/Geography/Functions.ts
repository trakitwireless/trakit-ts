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
	DOUGLASPEUCKER,
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
 * The distance in meters before considering to coordinates to have the same location.
 * @type {!number}
 * @default 0.000000001
 */
export const MAX_SAME_DISTANCE = 1e-9;

/**
 * Checks to see if a given latitude is at one of the poles
 * @param latitude
 **/
export function LATITUDE_IS_POLE(latitude: number): boolean {
	return ROUND_TO(COS(latitude * DEGREES_TO_RADIANS), 9) === 0;
}
/**
 * Normalizes a latitude value between +/- 90.
 * Values of greater than 90 are returned as 90, and values less than -90 are returned as -90.
 * @param {!number} latitude
 * @param {number=} edge
 * @return {!number}
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
 * @param {!number} longitude
 * @return {!number}
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
 * Bearing from coordinate A to coordinate B in degrees from North
 * @param {!number} aLat		The starting latitude
 * @param {!number} aLng		The starting longitude
 * @param {!number} bLat		The ending latitude
 * @param {!number} bLng		The ending longitude
 * @return {!number}		Degrees from North
 */
export function LATLNG_ANGLE(start: ILatLng, end: ILatLng): number {
	const aLat = LATITUDE_NORMALIZED(start.lat),
		bLat = LATITUDE_NORMALIZED(end.lat),
		aLng = LONGITUDE_NORMALIZED(start.lng, aLat),
		bLng = LONGITUDE_NORMALIZED(end.lng, bLat);
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
 * @param {!number} start	The starting coordinate
 * @param {!number} end		The ending coordinate
 * @param {number=} radius	The equatorial radius.  Default is {@link geography.earthRadius}.
 * @return {!number}
 */
export function LATLNG_DISTANCE(start: ILatLng, end: ILatLng, radius: number = EARTH_RADIUS) {
	const aLat = LATITUDE_NORMALIZED(start.lat),
		bLat = LATITUDE_NORMALIZED(end.lat),
		aLng = LONGITUDE_NORMALIZED(start.lng, aLat),
		bLng = LONGITUDE_NORMALIZED(end.lng, bLat),
		lat1 = aLat * DEGREES_TO_RADIANS,
		lat2 = bLat * DEGREES_TO_RADIANS,
		lng1 = aLng * DEGREES_TO_RADIANS,
		lng2 = bLng * DEGREES_TO_RADIANS,
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
export function LATLNG_GREAT_CIRCLE(start: ILatLng, mid: ILatLng, end: ILatLng, radius = EARTH_RADIUS): number {
	if (IS_NAN(radius)) radius = EARTH_RADIUS;
	// if coordinate a and b are practically the same, return distance from a to mid
	if (LATLNG_DISTANCE(start, end, radius) < MAX_SAME_DISTANCE) return LATLNG_DISTANCE(start, mid, radius);

	const aLat = LATITUDE_NORMALIZED(start.lat),
		mLat = LATITUDE_NORMALIZED(mid.lat),
		bLat = LATITUDE_NORMALIZED(end.lat),
		aLng = LONGITUDE_NORMALIZED(start.lng, aLat),
		mLng = LONGITUDE_NORMALIZED(mid.lng, mLat),
		bLng = LONGITUDE_NORMALIZED(end.lng, bLat),
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
export function LATLNG_TRANSLATE(pin: ILatLng, meters: number, bearing: number, radius: number = EARTH_RADIUS): ILatLng {
	let lat = LATITUDE_NORMALIZED(pin.lat),
		lng = LONGITUDE_NORMALIZED(pin.lng,lat);
	if (meters >= MAX_SAME_DISTANCE) {
		const distance = meters / radius,
			heading = bearing * DEGREES_TO_RADIANS,
			lat1 = lat * DEGREES_TO_RADIANS,
			lng1 = lng * DEGREES_TO_RADIANS,
			lat2 = ASIN(ROUND_TO(SIN(lat1) * COS(distance) + COS(lat1) * SIN(distance) * COS(heading), 15)),
			lng2 = lng1 + ATAN2(SIN(heading) * SIN(distance) * COS(lat1), COS(distance) - SIN(lat1) * SIN(lat2));
		lat = lat2 * RADIANS_TO_DEGREES;
		lng = lng2 * RADIANS_TO_DEGREES;
	}
	if (IS_NAN(lat) || IS_NAN(lng)) throw new Error("Either latitude or longitude is NaN");
	return {
		lat,
		lng
	};
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
export function LATLNG_MIDPOINT(start: ILatLng, end: ILatLng): ILatLng {
	const aLat = LATITUDE_NORMALIZED(start.lat),
		bLat = LATITUDE_NORMALIZED(end.lat),
		aLng = LONGITUDE_NORMALIZED(start.lng, aLat),
		bLng = LONGITUDE_NORMALIZED(end.lng, bLat),
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
 * @param {!Array.<LatLng>} route		
 * @param {number=} radius			The equatorial radius.  Default is {@link geography.earthRadius}.
 * @return {!number}
 */
export function ROUTE_LENGTH(route: ILatLng[], radius: number = EARTH_RADIUS): number {
	var coords = route.slice(),
		i = 0,
		l = coords.length - 1,
		length = 0.0;
	for (; i < l; i++) {
		length += LATLNG_DISTANCE(coords[i], coords[i + 1], radius);
	}
	return length;
}

//#endregion Polyline helpers
