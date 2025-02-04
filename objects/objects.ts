"use strict";

import { CODIFY, } from "./API/Codifier";
import { CONVERT, } from './API/Conversion';
import {
    FILESIZE_HELPER,
    NUMBER_GROUPS,
} from "./API/Files";
import {
    DOUGLASPEUCKER,
    PASSWORD_DECODE,
    IS_AN,
    IS_NOTHING,
    PHONE_PARSE,
    PYTHAGORA,
    ROUND_TO,
    PASSWORD_ENCODE,
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
import { Position, } from "./API/Geography/Position";
import { StreetAddress, } from "./API/Geography/StreetAddress";
import { GUID, } from "./API/Guid";
import { SearchPattern, } from "./API/SearchPattern";
import {
    TIMESPACE_PARSE,
    TIMESPACE_STRINGIFY,
    TimeSpan,
} from "./API/TimeSpan";
import { Timezone, } from "./API/Timezone";
import { TIMEZONES, } from "./API/Timezones";
import { MERGE, } from "./API/Objects";
import {
    compute,
    computeAll,
    computeAllComplex,
    computeAllSimple,
    computeComplex,
    computeSimple,
    computeSimpleLevels,
    findAllEscalations,
    findAllLabelEscalations,
    findAnyComplex,
    findComplex,
    findComplexLevel,
    findEscalations,
    findLabelEscalation,
    findSimple,
    findSimpleLevel,
    getComplexLevel,
    getSimpleLevel,
    hasAnyComplex,
    hasComplex,
    hasSimple,
    IMPLIED_PERMS,
    LABEL_BASED_PERMS,
} from './Accounts/Permissions/Authorizer';
import { FREEZE, KEYS } from "./API/Constants";
import { PermissionType } from "./Accounts/Permissions/PermissionType";
import { ARRAY_EXCEPT } from "./API/Arrays";

const version = (5.01);

export default {
    version,

    utility: {
        codify: CODIFY,
        guid: GUID,
        isNothing: IS_NOTHING,
        isntNaN: IS_AN,
        roundTo: ROUND_TO,
        merge: MERGE,
        parseTime: TIMESPACE_PARSE,
        stringifyTime: TIMESPACE_STRINGIFY,
        douglasPeucker: DOUGLASPEUCKER,
        numberGroups: NUMBER_GROUPS,
        fileSize: FILESIZE_HELPER,
        timezones: TIMEZONES,
        phoneNumber: PHONE_PARSE,
    },
    SearchPattern,
    TimeSpan,
    Timezone,

    convert: CONVERT,
    encoding: {
        toPassword: PASSWORD_ENCODE,
        fromPassword: PASSWORD_DECODE,
    },

    /**
     * A utility library exposing algorithms for a flat plane.
     */
    geometry: {
        pathLength: PATH_LENGTH,
        pathOrthogonal: PATH_ORTHOGONAL,
        pathReduce: PATH_PEUCKER,
        pointAngle: POINT_ANGLE,
        pointDistance: POINT_DISTANCE,
        //	pointFarthest: POINT_FARTHEST,
        pointPythagora: PYTHAGORA,
        pointVector: POINT_VECTOR,
        polyArea: POLY_AREA,
        polyContains: POLY_CONTAINS,
        polyReduce: POLY_PEUCKER,
        polyWrapper: POLY_WRAPPER,
        radialCircumference: RADIAL_CIRCUMFERENCE,
        radialArea: RADIAL_AREA,
        radialSmallest: RADIAL_BADOIU_CLARKSON,
        radialOverlapsRectangle: RADIAL_OVERLAP_RECTANGLE,
    },
    Point,
    Radial,
    Rectangle,
    Size,

    geography: {
        earthRadius: EARTH_RADIUS,

        clampLat: LATITUDE_NORMALIZED,
        clampLng: LONGITUDE_NORMALIZED,

        pathLength: ROUTE_LENGTH,
        pathReduce: ROUTE_PEUCKER,
        pathEncode: ROUTE_ENCODE,
        pathDecode: ROUTE_DECODE,

        pointAngle: LATLNG_ANGLE,
        pointDistance: LATLNG_DISTANCE,
        pointMiddle: LATLNG_MIDPOINT,
        pointOrthogonal: LATLNG_GREAT_CIRCLE,
        pointTranslate: LATLNG_TRANSLATE,
        pointVincenty: LATLNG_DISTANCE_VINCENTY,

        polyArea: GEOFENCE_AREA,
        polyContains: GEOFENCE_CONTAINS,
        polyReduce: GEOFENCE_PEUCKER,
        polyWidest: GEOFENCE_WIDEST,
        //	polyWrapper: GEOFENCE_WRAPPER,

        //	radialArea: SPHERECAP_AREA,
    },
    LatLng,
    LatLngBounds,
    Position,
    StreetAddress,

    // users
    authorizer: {
        // Generic / global compute
        computeAll,
        compute,
    
        // Simple Permissions
        computeAllSimple,
        computeSimple,
        computeSimpleLevels,
        getSimpleLevel,
        hasSimple,
        findSimple,
        findSimpleLevel,
    
        // Complex Permissions
        computeAllComplex,
        computeComplex,
        getComplexLevel,
        findComplexLevel,
        hasComplex,
        findComplex,
        hasAnyComplex,
        findAnyComplex,
        
        // Escalations
        findAllEscalations,
        findEscalations,
        findAllLabelEscalations,
        findLabelEscalation,
        
        // exposed properties
        /**
         * A list of {@link PermissionType}s which are implied for each user's own company.
         */
        implied: FREEZE(IMPLIED_PERMS),
        /**
         * The {@link PermissionType}s which are calculated using labels.
         */
        simple: FREEZE(ARRAY_EXCEPT(KEYS(PermissionType) as PermissionType[], LABEL_BASED_PERMS)),
        /**
         * {@link PermissionType}s which do not use labels to calculate access.
         */
        complex: FREEZE(LABEL_BASED_PERMS),
    }
};