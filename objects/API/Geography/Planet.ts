import { COS, DEGREES_TO_RADIANS } from '../Constants';
import { IS_NAN, IS_NUMBER, ROUND_TO } from '../Functions';
import { double, int } from '../Types';

// Hiigara
export const EARTH_RADIUS: double = 6378137;  // meters
export const EARTH_ELLIPSOID: double = 298.257223563;
export const EARTH_FLATENING: double = 1 / EARTH_ELLIPSOID;
export const EARTH_RADIUS_MINOR: double = EARTH_RADIUS - (EARTH_RADIUS * EARTH_FLATENING); // 6356752.3142 meters => wgs84

// for map tile calculations
export const TILE_SIZE_PX: int = 256;
export const MAX_TILE_LAT: double = 85.05112878;
export const MAX_TILE_LNG: double = 180;


//#region Geography methods
/**
 * Checks to see if a given latitude is at one of the poles
 * @param lat
 */
function LATITUDE_IS_POLE(lat: double): boolean {
    return ROUND_TO(COS(lat * DEGREES_TO_RADIANS), 9) === 0;
}
/**
 * Normalizes a latitude value between +/- 90.
 * Values of greater than 90 are returned as 90, and values less than -90 are returned as -90.
 * @param latitude
 * @param edge
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
 * @param longitude
 */
function LONGITUDE_NORMALIZED(longitude) {
	return IS_NUMBER(longitude)
		? ABS(longitude %= 360) > 180
			? longitude + (longitude < 0 ? 360 : -360)
			: longitude
		: NaN;
}

/**
 * Calculates the distance between two coordinates on a sphere.
 * @param aLat		The starting latitude
 * @param aLng		The starting longitude
 * @param bLat		The ending latitude
 * @param bLng		The ending longitude
 * @param radius	The equatorial radius.  Default is {@link geography.earthRadius}.
 */
function LATLNG_DISTANCE(aLat, aLng, bLat, bLng, radius) {
	if (IS_NAN(radius)) radius = EARTH_RADIUS;
	if (LATITUDE_IS_POLE(aLat = LATITUDE_NORMALIZED(aLat))) aLng = 0;
	if (LATITUDE_IS_POLE(bLat = LATITUDE_NORMALIZED(bLat))) bLng = 0;
	var lat1 = aLat * DEGREES_TO_RADIANS,
		lat2 = bLat * DEGREES_TO_RADIANS,
		lng1 = LONGITUDE_NORMALIZED(aLng) * DEGREES_TO_RADIANS,
		lng2 = LONGITUDE_NORMALIZED(bLng) * DEGREES_TO_RADIANS,
		dLat = lat2 - lat1,
		dLng = lng2 - lng1,
		sin_dLat_half = POW(SIN(dLat / 2), 2),	// minor optimization
		sin_dLng_half = POW(SIN(dLng / 2), 2),	// minor optimization
		distance = sin_dLat_half + COS(lat1) * COS(lat2) * sin_dLng_half;
	return (2 * ATAN2(SQRT(distance), SQRT(1 - distance))) * FLOAT(radius);
}
/**
 * Calculates the distance between two coordinates on a Bessel 1841 ellipsoid.
 * @param aLat		The starting latitude
 * @param aLng		The starting longitude
 * @param bLat		The ending latitude
 * @param bLng		The ending longitude
 */
function LATLNG_DISTANCE_VINCENTY(aLat, aLng, bLat, bLng) {
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
 * @param aLat		The starting latitude
 * @param aLng		The starting longitude
 * @param bLat		The ending latitude
 * @param bLng		The ending longitude
 * @return Degrees from North
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
 * @param aLat		Left-most coordinate's latitude on the great circle
 * @param aLng		Left-most coordinate's longitude on the great circle
 * @param midLat	Top-most coordinate's latitude
 * @param midLng	Top-most coordinate's longitude
 * @param bLat		Right-most coordinate's latitude on the great circle
 * @param bLng		Right-most coordinate's longitude on the great circle
 * @param radius	The equatorial radius.  Default is {@link geography.earthRadius}.
 * @return Value is negative when distance is to the right, and positive when distance to the left.
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
 * @param lat		The staring latitude
 * @param lng		The staring longitude
 * @param meters	The distance away from this LatLng
 * @param bearing	The direction in which to calculate the new position in degrees from North
 * @param radius	The equatorial radius. Default is {@link geography.earthRadius}.
 * @throws {Error}			Either latitude or longitude is NaN
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
 * @param aLat		Left-most coordinate's latitude on the great circle
 * @param aLng		Left-most coordinate's longitude on the great circle
 * @param bLat		Right-most coordinate's latitude on the great circle
 * @param bLng		Right-most coordinate's longitude on the great circle
 * @throws {Error}			Either latitude or longitude is NaN
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

/**
 * Calculates the length of the given route.
 * @param route		
 * @param radius			The equatorial radius.  Default is {@link geography.earthRadius}.
 */
function ROUTE_LENGTH(route, radius) {
	var coords = route.slice(),
		i = 0,
		l = coords.length - 1,
		length = 0.0;
	for (; i < l; i++) {
		length += LATLNG_DISTANCE(coords[i].lat, coords[i].lng, coords[i + 1].lat, coords[i + 1].lng, radius);
	}
	return length;
}

/**
 * An internal function which populates an array of indexes to keep when filtering.
 * @deprecated
 * @param source		The array of coordinates representing a path
 * @param firstIndex		The index of the first LatLng in this pass to use for calculation
 * @param lastIndex			The index of the last LatLng in this pass to use for calculation
 * @param keepIndexes		The array of indexes representing coordinates from the source which are kept in this pass
 * @param tolerance			The distance in meters used as a filter for removing coordinates
 * @return keepIndexes
 */
function LATLNG_PEUCKER_INTERNAL(source, firstIndex, lastIndex, keepIndexes, tolerance) {
	// the first and last points are always kept; this is a result of either being at either end of the original path
	// or because those it was chosen during a previous pass as having the widest orthogonal distance
	keepIndexes[firstIndex] = keepIndexes[lastIndex] = 1;

	if (lastIndex - firstIndex > 1) {
		var i = firstIndex + 1,
			distance = 0.0,
			farthestDistance = distance,
			farthestIndex = firstIndex,
			firstPoint = source[firstIndex],
			lastPoint = source[lastIndex];

		// find the widest orthogonal distance
		for (; i < lastIndex; i++) {
			distance = ABS(LATLNG_GREAT_CIRCLE(firstPoint.lat, firstPoint.lng, source[i].lat, source[i].lng, lastPoint.lat, lastPoint.lng));
			if (distance > farthestDistance) {
				farthestDistance = distance;
				farthestIndex = i;
			}
		}
		// if that distance is farther than the tolerance, continue recursively into the path
		// if no point is farther than the tolerance, then no points in the segment are added
		if (farthestDistance > 0 && farthestDistance >= tolerance) {
			// we don't need to add the farthest point's index
			// it will be added during the next pass as firstIndex
			LATLNG_PEUCKER_INTERNAL(source, firstIndex, farthestIndex, keepIndexes, tolerance);
			LATLNG_PEUCKER_INTERNAL(source, farthestIndex, lastIndex, keepIndexes, tolerance);
		}
	}

	return keepIndexes;
}

/**
 * 
 * @param firstPoint
 * @param midPoint
 * @param lastPoint
 */
function ROUTE_PEUCKER_FILTER(firstPoint, midPoint, lastPoint) {
	return ABS(LATLNG_GREAT_CIRCLE(
		firstPoint.lat,
		firstPoint.lng,
		midPoint.lat,
		midPoint.lng,
		lastPoint.lat,
		lastPoint.lng,
		EARTH_RADIUS
	));
}
/**
 * Performs a Douglas-Peucker path reduction based on the given tolerance.
 * @param route		The array of coordinates representing a path
 * @param tolerance			Distance (in meters) threshold for candidate coordinates.  Default is 0.
 */
function ROUTE_PEUCKER(route, tolerance) {
	var length = route.length;
	if (length < 3) {
		return route.slice();
	} else {
		if (!(tolerance > 0)) tolerance = 0.0;
		return route.filter(
			FILTER_BY_UINT_ARRAY,
			DOUGLASPEUCKER(route, ROUTE_PEUCKER_FILTER, tolerance)
		);
		/*
		return route.filter(
			FILTER_BY_BOOL_ARRAY,
			DOUGLASPEUCKER(route, function(firstPoint, midPoint, lastPoint) {
				return LATLNG_GREAT_CIRCLE(
					firstPoint.lat,
					firstPoint.lng,
					midPoint.lat,
					midPoint.lng,
					lastPoint.lat,
					lastPoint.lng,
					EARTH_RADIUS
				);
			}, tolerance)
		);
		*/
	}
}

/**
 * @param value
 * @param factor			
 */
function ROUTE_ENCODE_CHAR(value, factor) {
	var chars = [],
		shifted = (value * factor) << 1;
	if (shifted < 0) shifted = ~shifted;
	while (shifted >= 0x20) {
		chars.push((0x20 | (shifted & 0x1f)) + 0x3f);
		shifted >>= 0x05;
	}
	chars.push(shifted + 0x3f);
	return chars.map(function(c) {
		return String.fromCharCode(c);
	}).join("");
}
/**
 * An implementation of Google's Encoded Polyline Algorithm format.
 * https://developers.google.com/maps/documentation/utilities/polylinealgorithm
 * @param route		The array of coordinates representing a path.
 * @param precision			Optional number of decimal places to use to calculate the results.  Default is 5.
 */
function ROUTE_ENCODE(route, precision) {
	var factor = POW(10, precision || 5),
		output = ROUTE_ENCODE_CHAR(route[0].lat, factor) + ROUTE_ENCODE_CHAR(route[0].lng, factor);

	for (var i = 1; i < route.length; i++) {
		var a = route[i], b = route[i - 1];
		output += ROUTE_ENCODE_CHAR(a.lat - b.lat, factor) + ROUTE_ENCODE_CHAR(a.lng - b.lng, factor);
	}

	return output;
}
/**
 * An implementation of Google's Decoded Polyline Algorithm format.
 * https://developers.google.com/maps/documentation/utilities/polylinealgorithm
 * @param route			The encoded string which represents the coordinates in a path.
 * @param precision			Optional number of decimal places used to recalculate the results.  Default is 5.
 */
function ROUTE_DECODE(route, precision) {
	var index = 0,
		length = route.length,
		lat = index,
		lng = index,
		path = [],
		factor = POW(10, precision || 5);
	function diff() {
		var shift = 0,
			result = 0;
		do {
			var byte = route.charCodeAt(index++) - 0x3f;
			result |= (byte & 0x1f) << shift;
			shift += 0x05;
		} while (byte >= 0x20);
		return result & 1
			? ~(result >> 1)
			: result >> 1;
	}
	while (index < length) {
		path.push(new LatLng(
			(lat += diff()) / factor,
			(lng += diff()) / factor
		));
	}
	return path;
}

/**
 * Finds the widest section of the given route.
 * This is useful for path reduction and reorientation.
 * @param route		The array of coordinates representing a path
 * @return An array of three items; the first is the widest distance, and the others are the start and end index within the given route.
 */
function GEOFENCE_WIDEST(route) {
	var widest = 0.0,
		startIndex = 0,
		endIndex = 0,
		coords = [].concat(route),
		length = route.length;
	if (length > 1) {
		// find the widest part of the polygon (starting point is the only necessary bit)
		for (var i = 0; i < length; i++) {
			var point = coords[i];
			for (var j = i + 1; j < length; j++) {
				var candidate = coords[j],
					distance = LATLNG_DISTANCE(point.lat, point.lng, candidate.lat, candidate.lng, EARTH_RADIUS);
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
 * Performs a Douglas-Peucker path reduction on a polygon for the given tolerance.
	The start/end coordinates are variable and the end coordinate is trimmed from the result.
 * @param route		The array of coordinates representing a path
 * @param tolerance			Distance (in meters) threshold for candidate coordinates.  Default is 0.
 */
function GEOFENCE_PEUCKER(route, tolerance) {
	var coords = [].concat(route),
		length = route.length;
	if (length < 3) {
		return coords;
	} else {
		var widest = GEOFENCE_WIDEST(coords),
			startIndex = widest[1],
			endIndex = widest[2];
		if (!(tolerance > 0)) tolerance = MAX_SAME_DISTANCE;

		// re-order the points with the new starting point (faster method)
		coords = coords.splice(startIndex, length).concat(coords);

		// make sure start and end points are identical
		if (LATLNG_DISTANCE(coords[0].lat, coords[0].lng, coords[length - 1].lat, coords[length - 1].lng, EARTH_RADIUS) > MAX_SAME_DISTANCE) length = coords.push(coords[0]);

		// reduce the polygon's points
		coords = coords.filter(
			FILTER_BY_UINT_ARRAY,
			DOUGLASPEUCKER(coords, ROUTE_PEUCKER_FILTER, tolerance)
			//LATLNG_PEUCKER_INTERNAL(coords, 0, length - 1, new Int8Array(coords.length), tolerance)
		);

		// trim end point if the same as start point
		length = coords.length;
		if (LATLNG_DISTANCE(coords[0].lat, coords[0].lng, coords[length - 1].lat, coords[length - 1].lng, EARTH_RADIUS) <= MAX_SAME_DISTANCE) coords.pop();

		return coords;
	}
}

/**
 * Calculates the total area occupied by the given geofence.
 * @param route		The array of coordinates representing a geofence.
 * @param radius			The equatorial radius.  Default is {@link geography.earthRadius}.
 * @throws {Error}					Not enough coordinates
 */
function GEOFENCE_AREA(route, radius) {
	if (IS_NAN(radius)) radius = EARTH_RADIUS;
	var geofence = route.map(function(latlng) { return new LatLng(latlng.lat, latlng.lng); }),
		latlngA = geofence[0],
		summed = 0.0,
		i = 1,
		l = geofence.length - 1;
	if (latlngA.equals(geofence[l])) {
		geofence.pop();
		l--;
	}
	if (l < 1) {
		throw new Error("Not enough coordinates");
	} else if (l < 2) {
		return 0.0;
	} else {
		for (; i < l; i++) {
			var latlngB = geofence[i],
				latlngC = geofence[i + 1];
			summed += TRIANGLE_AREA_RADIANS(
				latlngA.lat, latlngA.lng,
				latlngB.lat, latlngB.lng,
				latlngC.lat, latlngC.lng
			) * TRIANGLE_INSIDE_OUT(
				latlngA.lat, latlngA.lng,
				latlngB.lat, latlngB.lng,
				latlngC.lat, latlngC.lng
			);
		}
	}
	return ABS((radius * radius) * summed);
}

/**
 * Calculates the area of a triangle on a sphere. Always returns positive value, even if triangle is inside-out.
 * @param aLat
 * @param aLng
 * @param bLat
 * @param bLng
 * @param cLat
 * @param cLng
 */
function TRIANGLE_AREA_RADIANS(aLat, aLng, bLat, bLng, cLat, cLng) {
	var distanceAB = LATLNG_DISTANCE(aLat, aLng, bLat, bLng, 1),	// radius is 1 because I don't want the value in meters, I need it in radians
		distanceBC = LATLNG_DISTANCE(bLat, bLng, cLat, cLng, 1),
		distanceCA = LATLNG_DISTANCE(cLat, cLng, aLat, aLng, 1),
		distance = (distanceAB + distanceBC + distanceCA) / 2,
		area = TAN(distance / 2) * TAN((distance - distanceAB) / 2) * TAN((distance - distanceBC) / 2) * TAN((distance - distanceCA) / 2);
	/*
	area = TAN(distance / 2);
	area *= TAN((distance - distanceAB) / 2);
	area *= TAN((distance - distanceBC) / 2);
	area *= TAN((distance - distanceCA) / 2);
	*/
	return 4 * ATAN(SQRT(ABS(area)));
}
/**
 * Calculates whether a triangle is inside-out.  Returns 1 for valid triangles, and -1 for invalid (inside-out).
 * @param aLat
 * @param aLng
 * @param bLat
 * @param bLng
 * @param cLat
 * @param cLng
 */
function TRIANGLE_INSIDE_OUT(aLat, aLng, bLat, bLng, cLat, cLng) {
	var aLatRad = aLat * DEGREES_TO_RADIANS,
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
	/*
	var MOTHER_FUCKING_RESULT =
		  aLatCosLngCos * bLatCosLngSin * cLatSin +
		  bLatCosLngCos * cLatCosLngSin * aLatSin +
		  cLatCosLngCos * aLatCosLngSin * bLatSin -
		  aLatCosLngCos * cLatCosLngSin * bLatSin -
		  bLatCosLngCos * aLatCosLngSin * cLatSin -
		  cLatCosLngCos * bLatCosLngSin * aLatSin;

//	console.log("me:insideOut", MOTHER_FUCKING_RESULT);

	return MOTHER_FUCKING_RESULT > 0 ? 1 : -1;
	*/
}

/*
var Gj = {
	computeArea: function(route, radius) {
		return ABS(Gj.computeSignedArea(route, radius));
	},
	computeSignedArea: function(route, radius) {
		if (IS_NAN(radius)) radius = EARTH_RADIUS;
		for (var latlng = route[0], summed = 0, iter = 1, last = route.length - 1; iter < last; ++iter) {
			summed += Gj.Om(latlng, route[iter], route[iter + 1]);
		}
		return summed * radius * radius;
	},
	Om: function(latlngA, latlngB, latlngC) {
		return Gj.Gm(latlngA, latlngB, latlngC) * Gj.Hm(latlngA, latlngB, latlngC);
	},
	Gm: function(latlngA, latlngB, latlngC) {
		var closedTriangle = [latlngA, latlngB, latlngC, latlngA],
			distances = [],
			totalDistance = 0.0;
		for (var iter = 0; 3 > iter; ++iter) {
			distances[iter] = LATLNG_DISTANCE(closedTriangle[iter].lat, closedTriangle[iter].lng, closedTriangle[iter + 1].lat, closedTriangle[iter + 1].lng);
			totalDistance += distances[iter];
		}
		totalDistance /= 2;
		var quarterTanDistance = TAN(totalDistance / 2);
		for (var iter = 0; 3 > iter; ++iter) {
			quarterTanDistance *= TAN((totalDistance - distances[iter]) / 2);
		}
		return 4 * ATAN(SQRT(ABS(quarterTanDistance)));
	},
	Hm: function(latlngA, latlngB, latlngC) {
		var triangle = [latlngA, latlngB, latlngC],
			vectorMatrix = [];
		for (var iter = 0; 3 > iter; ++iter) {
			var latlng = triangle[iter],
				latRad = latlng.lat * DEGREES_TO_RADIANS,
				lngRad = latlng.lng * DEGREES_TO_RADIANS,
				vectors = vectorMatrix[iter] = [];
			vectors[0] = COS(latRad) * COS(lngRad);
			vectors[1] = COS(latRad) * SIN(lngRad);
			vectors[2] = SIN(latRad);
		}
		return 0 < b[0][0] * b[1][1] * b[2][2] + b[1][0] * b[2][1] * b[0][2] + b[2][0] * b[0][1] * b[1][2] -
			b[0][0] * b[2][1] * b[1][2] - b[1][0] * b[0][1] * b[2][2] - b[2][0] * b[1][1] * b[0][2] ? 1 : -1;
	}
};

var Gj = (function() {
	var l = Math;
	function Wd(a) {
		return a * (l.PI / 180);
	}
	function Xd(a) {
		return a / (l.PI / 180);
	}
	function Ud(a, b, c) {
		return ((a - b) % (c - b) + (c - b)) % (c - b) + b;
	}
	var Za = "appendChild", m = "trigger", p = "bindTo", $a = "shift", ab = "exec", bb = "clearTimeout", cb = "fromLatLngToPoint", q = "width", db = "replace", eb = "ceil", fb = "floor", gb = "MAUI_LARGE", hb = "offsetWidth", ib = "concat", jb = "extend", kb = "charAt", lb = "preventDefault", mb = "getNorthEast", nb = "minZoom", ob = "remove", pb = "createElement", qb = "firstChild", rb = "forEach", sb = "setZoom", tb = "setValues", ub = "tileSize", vb = "cloneNode", wb = "addListenerOnce", xb = "fromPointToLatLng",
	yb = "removeAt", zb = "getTileUrl", Ab = "clearInstanceListeners", s = "bind", Bb = "getTime", Cb = "getElementsByTagName", Db = "substr", Eb = "getTile", Fb = "notification", Gb = "setVisible", Hb = "setTimeout", Ib = "split", v = "forward", Jb = "getLength", Kb = "getSouthWest", Lb = "location", Mb = "message", Nb = "hasOwnProperty", w = "style", y = "addListener", Ob = "atan", Pb = "random", Qb = "returnValue", Rb = "getArray", Sb = "maxZoom", Tb = "console", Ub = "contains", Vb = "apply", Wb = "setAt",
	Xb = "tagName", Yb = "reset", Zb = "asin", $b = "label", z = "height", ac = "offsetHeight", A = "push", bc = "isEmpty", cc = "test", B = "round", dc = "slice", ec = "nodeType", fc = "getVisible", gc = "unbind", hc = "computeHeading", ic = "indexOf", jc = "getProjection", kc = "fromCharCode", lc = "radius", mc = "INSET", nc = "atan2", oc = "sqrt", pc = "toUrlValue", qc = "changed", rc = "type", sc = "name", C = "length", tc = "onRemove", E = "prototype", uc = "gm_bindings_", vc = "intersects", xc =
	"document", yc = "opacity", zc = "getAt", Ac = "removeChild", Bc = "insertAt", Cc = "target", Dc = "releaseTile", Ec = "call", Fc = "charCodeAt", Gc = "addDomListener", Hc = "parentNode", Ic = "span", Jc = "splice", Kc = "join", Lc = "toLowerCase", Mc = "zoom", Nc = "ERROR", Oc = "INVALID_LAYER", Pc = "INVALID_REQUEST", Qc = "MAX_DIMENSIONS_EXCEEDED", Rc = "MAX_ELEMENTS_EXCEEDED", Sc = "MAX_WAYPOINTS_EXCEEDED", Tc = "NOT_FOUND", Vc = "OK", Wc = "OVER_QUERY_LIMIT", Xc = "REQUEST_DENIED", Yc = "UNKNOWN_ERROR",
	Zc = "ZERO_RESULTS";
	function N(a, b, c) {
		a -= 0;
		b -= 0;
		//	c || (a = Td(a, -90, 90), 180 != b && (b = Ud(b, -180, 180)));
		this.mb = LATITUDE_NORMALIZED(a);
		this.nb = LONGITUDE_NORMALIZED(b);
	}
	N.prototype.lat = function() { return this.mb; };
	N.prototype.lng = function() { return this.nb; };
	return {
		GLatLng: N,
		computeHeading: function(a, b) {
			var c = Wd(a.mb), d = Wd(b.mb), e = Wd(b.nb) - Wd(a.nb);
			return Ud(Xd(l[nc](l.sin(e) * l.cos(d), l.cos(c) * l.sin(d) - l.sin(c) * l.cos(d) * l.cos(e))), -180, 180);
		}, computeOffset: function(a, b, c, d) {
			b /= d || 6378137;
			c = Wd(c);
			var e = Wd(a.mb);
			d = l.cos(b);
			b = l.sin(b);
			var f = l.sin(e), e = l.cos(e), g = d * f + b * e * l.cos(c);
			return new N(Xd(l[Zb](g)), Xd(Wd(a.nb) + l[nc](b * e * l.sin(c), d - f * g)));
		}, computeOffsetOrigin: function(a, b, c, d) {
			c = Wd(c);
			b /= d || 6378137;
			d = l.cos(b);
			var e = l.sin(b) * l.cos(c);
			b = l.sin(b) * l.sin(c);
			c = l.sin(Wd(a.mb));
			var f = e * e * d * d + d * d * d * d - d * d * c * c;
			if (0 > f) {
				return null;
			}
			var g = e * c + l[oc](f), g = g / (d * d + e * e), h = (c - e * g) / d, g = l[nc](h, g);
			if (g < -l.PI / 2 || g > l.PI / 2) {
				g = e * c - l[oc](f), g = l[nc](h, g / (d * d + e * e));
			}
			return g < -l.PI / 2 || g > l.PI / 2 ? null : new N(Xd(g), Xd(Wd(a.nb) - l[nc](b, d * l.cos(g) - e * l.sin(g))));
		}, interpolate: function(a, b, c) {
			var d = Wd(a.mb), e = Wd(a.nb), f = Wd(b.mb), g = Wd(b.nb), h = l.cos(d), n = l.cos(f);
			b = Gj.$f(a, b);
			var r = l.sin(b);
			if (1E-6 > r) {
				return new N(a.lat(), a.lng());
			}
			a = l.sin((1 - c) * b) / r;
			c = l.sin(c * b) / r;
			b = a * h * l.cos(e) + c * n * l.cos(g);
			e = a * h * l.sin(e) + c * n * l.sin(g);
			return new N(Xd(l[nc](a * l.sin(d) + c * l.sin(f), l[oc](b * b + e * e))), Xd(l[nc](e, b)));
		}, $f: function(a, b) {
			//	var c = Wd(a.mb), d = Wd(b.mb);
			var c = a.mb * DEGREES_TO_RADIANS, d = b.mb * DEGREES_TO_RADIANS;
			return 2 * ASIN(SQRT(POW(SIN((c - d) / 2), 2) + COS(c) * COS(d) * POW(SIN((Wd(a.nb) - Wd(b.nb)) / 2), 2)));
		}, computeDistanceBetween: function(a, b, c) {
			return Gj.$f(a, b) * (c || 6378137);
		}, computeLength: function(a, b) {
			var c = b || 6378137, d = 0;
			//	a instanceof og && (a = a[Rb]());
			for (var e = 0, f = a[C] - 1; e < f; ++e) {
				d += Gj.computeDistanceBetween(a[e], a[e + 1], c);
			}
			return d;
		}, computeArea: function(a, b) {
			return l.abs(Gj.computeSignedArea(a, b));
		}, computeSignedArea: function(a, b) {
			var c = b || 6378137;
			//	a instanceof og && (a = a[Rb]());
			for (var d = a[0], e = 0, f = 1, g = a[C] - 1; f < g; ++f) {
				e += Gj.Om(d, a[f], a[f + 1]);
			}
			return e * c * c;
		}, Om: function(a, b, c) {
			return Gj.Gm(a, b, c) * Gj.Hm(a, b, c);
		}, Gm: function(a, b, c) {
			var d = [a, b, c, a];
			a = [];
			for (c = b = 0; 3 > c; ++c) {
				a[c] = Gj.$f(d[c], d[c + 1]), b += a[c];
			//	console.log("google:triangleArea-dist", c, a[c]);
			}
			b /= 2;
			d = l.tan(b / 2);
			for (c = 0; 3 > c; ++c) {
				d *= l.tan((b - a[c]) / 2);
			}
			var MOTHER_FUCKING_RESULT = 4 * l[Ob](l[oc](l.abs(d)));

		//	console.log("google:triangleArea", MOTHER_FUCKING_RESULT);

			return MOTHER_FUCKING_RESULT;
		}, Hm: function(a, b, c) {
			a = [a, b, c];
			b = [];
			for (c = 0; 3 > c; ++c) {
				var d = a[c], e = Wd(d.mb), d = Wd(d.nb), f = b[c] = [];
				f[0] = l.cos(e) * l.cos(d);
				f[1] = l.cos(e) * l.sin(d);
				f[2] = l.sin(e);
			}
			var MOTHER_FUCKING_RESULT = b[0][0] * b[1][1] * b[2][2] + b[1][0] * b[2][1] * b[0][2] + b[2][0] * b[0][1] * b[1][2] - b[0][0] * b[2][1] * b[1][2] - b[1][0] * b[0][1] * b[2][2] - b[2][0] * b[1][1] * b[0][2];

		//	console.log("google:insideOut", MOTHER_FUCKING_RESULT);

			return 0 < MOTHER_FUCKING_RESULT ? 1 : -1;
		}
	};
})();

expose
ns.GLatLng = Gj.GLatLng;
expose
ns.testicles = Gj.computeArea;
expose
ns.googleDist = Gj.$f;
*/

/**
 * A utility function to determine if a given coordinate is inside the given geofence.
 * @param route	The array of coordinates represents the path of the polygon.
 * @param lat			Latitude of the coordinate to be checked.
 * @param lng			Longitude of the coordinate to be checked.
 */
function GEOFENCE_CONTAINS(route, lat, lng) {
	lat = LATITUDE_NORMALIZED(lat);
	lng = LONGITUDE_NORMALIZED(lng);

	throw "not implemented";
}
/**
 * Wraps the given coordinates into a polygonal path.
 * The given coordinates do not need to be a path.
 * The returned path is not closed.
 * @param coordinates		The array of coordinates on which to create the non-closed path
 * @return Non-closed path.
 */
function GEOFENCE_WRAPPER(coordinates) {
	throw "not implemented";
}

/**
 * Calculates the spherical-cap area occupied by the given radial distance.
 * @param radius	The distance from the centre of the circle to any point along the edge.
 */
function SPHERECAP_AREA(radius) {
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
//#endregion Geography methods