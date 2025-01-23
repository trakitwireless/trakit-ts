﻿"use strict";

import { codify, } from "./API/Codifier";
import { numberGroups, } from "./API/Files";
import {
    IS_NAN,
    IS_NOTHING,
    fromPassword,
    toPassword,
    PYTHAGORA,
    ROUND_TO,
} from "./API/Functions";
import { Point, } from "./API/Geometry/Point";
import { Radial } from "./API/Geometry/Radial";
import { Size, } from "./API/Geometry/Size";
import { Rectangle, } from "./API/Geometry/Rectangle";
import {
    PATH_LENGTH,
    PATH_PEUCKER,
    POINT_ANGLE,
    POINT_DISTANCE,
    //POINT_FARTHEST,
    PATH_ORTHOGONAL,
    POINT_VECTOR,
    POLY_AREA,
    POLY_CONTAINS,
    POLY_PEUCKER,
    POLY_WRAPPER,
    RADIAL_CIRCUMFERENCE,
    RADIAL_AREA,
    RADIAL_BADOIU_CLARKSON,
    RADIAL_OVERLAP_RECTANGLE,
 } from "./API/Geometry/Functions";
import {
    EARTH_RADIUS,
    LATITUDE_NORMALIZED,
    LONGITUDE_NORMALIZED,
    ROUTE_LENGTH,
    ROUTE_PEUCKER,
    ROUTE_ENCODE,
    ROUTE_DECODE,
    LATLNG_ANGLE,
    LATLNG_DISTANCE,
    LATLNG_MIDPOINT,
    LATLNG_GREAT_CIRCLE,
    LATLNG_TRANSLATE,
    LATLNG_DISTANCE_VINCENTY,
    GEOFENCE_AREA,
    GEOFENCE_CONTAINS,
    GEOFENCE_PEUCKER,
    GEOFENCE_WIDEST,
//  SPHERECAP_AREA,
 } from "./API/Geography/Functions";
import { LatLng, } from "./API/Geography/LatLng";
import { LatLngBounds, } from "./API/Geography/LatLngBounds";
import { guid, } from "./API/Guid";
import { Timezone, } from "./API/Timezone";
import { merge, } from "./API/Types";

const version = (5.01);

const namespaces = {
    version,

    utility: {
        codify,
        guid,
        "isNothing": IS_NOTHING,
        "isNaN": IS_NAN,
        "roundTo": ROUND_TO,
        "merge": merge,
        "arrayOfType": ARRAY_OF_TYPE,
        "parseTime": TIMESPAN_SECONDS,
        "stringifyTime": TIMESPAN_STRING,
        "parseSearch": SEARCH_PARSE,
        "douglasPeucker": DOUGLASPEUCKER_T,
        numberGroups,
        toPassword,
        fromPassword,
        "fileSize": FILESIZE_HELPER,
        "timezones": TIMEZONES,
        "phoneNumber": PHONE_PARSE,
    },
    Timezone,

    encoding: {},

    /**
     * A utility library exposing algorithms for a flat plane.
     **/
    drawing: {
        "pathLength": PATH_LENGTH,
        "pathOrthogonal": PATH_ORTHOGONAL,
        "pathReduce": PATH_PEUCKER,
        "pointAngle": POINT_ANGLE,
        "pointDistance": POINT_DISTANCE,
        //	"pointFarthest": POINT_FARTHEST,
        "pointPythagora": PYTHAGORA,
        "pointVector": POINT_VECTOR,
        "polyArea": POLY_AREA,
        "polyContains": POLY_CONTAINS,
        "polyReduce": POLY_PEUCKER,
        "polyWrapper": POLY_WRAPPER,
        "radialCircumference": RADIAL_CIRCUMFERENCE,
        "radialArea": RADIAL_AREA,
        "radialSmallest": RADIAL_BADOIU_CLARKSON,
        "radialOverlapsRectangle": RADIAL_OVERLAP_RECTANGLE,
    },
    Point,
    Radial,
    Rectangle,
    Size,

    geometry: {
    },
    geography: {
        "earthRadius": EARTH_RADIUS,

        "clampLat": LATITUDE_NORMALIZED,
        "clampLng": LONGITUDE_NORMALIZED,

        "pathLength": ROUTE_LENGTH,
        "pathReduce": ROUTE_PEUCKER,
        "pathEncode": ROUTE_ENCODE,
        "pathDecode": ROUTE_DECODE,

        "pointAngle": LATLNG_ANGLE,
        "pointDistance": LATLNG_DISTANCE,
        "pointMiddle": LATLNG_MIDPOINT,
        "pointOrthogonal": LATLNG_GREAT_CIRCLE,
        "pointTranslate": LATLNG_TRANSLATE,
        "pointVincenty": LATLNG_DISTANCE_VINCENTY,

        "polyArea": GEOFENCE_AREA,
        "polyContains": GEOFENCE_CONTAINS,
        "polyReduce": GEOFENCE_PEUCKER,
        "polyWidest": GEOFENCE_WIDEST,
        //	"polyWrapper": GEOFENCE_WRAPPER,

        //	"radialArea": SPHERECAP_AREA,
    },
    LatLng,
    LatLngBounds
};
export default namespaces;