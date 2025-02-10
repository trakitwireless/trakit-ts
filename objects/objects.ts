// "use strict";

 import { Contact } from "./Accounts/Contact";
import { Machine } from "./Accounts/Machine";
import { NotificationMethod } from "./Accounts/NotificationMethod";
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
import { PermissionType } from "./Accounts/Permissions/PermissionType";
import { Session } from "./Accounts/Session";
import { SessionStatus } from "./Accounts/SessionStatus";
import { User } from "./Accounts/User";
import { UserAdvanced } from "./Accounts/UserAdvanced";
import { UserGeneral } from "./Accounts/UserGeneral";
import { UserGroup } from "./Accounts/UserGroup";
import { UserNotifications } from "./Accounts/UserNotifications";
import { ARRAY_EXCEPT } from "./API/Arrays";
import { CODIFY, } from "./API/Codifier";
import { FREEZE, KEYS } from "./API/Constants";
import { CONVERT, } from './API/Conversion';
import {
    FILESIZE_HELPER,
    NUMBER_GROUPS,
} from "./API/Files";
import {
    DOUGLASPEUCKER,
    IS_AN,
    IS_NOTHING,
    PASSWORD_DECODE,
    PASSWORD_ENCODE,
    PHONE_PARSE,
    PYTHAGORA,
    ROUND_TO,
} from "./API/Functions";
import {
    EARTH_RADIUS,
    GEOFENCE_AREA,
    GEOFENCE_CONTAINS,
    GEOFENCE_PEUCKER,
    GEOFENCE_WIDEST,
    LATITUDE_NORMALIZED,
    LATLNG_ANGLE,
    LATLNG_DISTANCE,
    LATLNG_DISTANCE_VINCENTY,
    LATLNG_GREAT_CIRCLE,
    LATLNG_MIDPOINT,
    LATLNG_TRANSLATE,
    LONGITUDE_NORMALIZED,
    ROUTE_DECODE,
    ROUTE_ENCODE,
    ROUTE_LENGTH,
    ROUTE_PEUCKER,
} from "./API/Geography/Functions";
import { LatLng, } from "./API/Geography/LatLng";
import { LatLngBounds, } from "./API/Geography/LatLngBounds";
import { Position, } from "./API/Geography/Position";
import { StreetAddress, } from "./API/Geography/StreetAddress";
import {
    PATH_LENGTH,
    //POINT_FARTHEST,
    PATH_ORTHOGONAL,
    PATH_PEUCKER,
    POINT_ANGLE,
    POINT_DISTANCE,
    POINT_VECTOR,
    POLY_AREA,
    POLY_CONTAINS,
    POLY_PEUCKER,
    POLY_WRAPPER,
    RADIAL_AREA,
    RADIAL_BADOIU_CLARKSON,
    RADIAL_CIRCUMFERENCE,
    RADIAL_OVERLAP_RECTANGLE,
} from "./API/Geometry/Functions";
import { Point, } from "./API/Geometry/Point";
import { Radial } from "./API/Geometry/Radial";
import { Rectangle, } from "./API/Geometry/Rectangle";
import { Size, } from "./API/Geometry/Size";
import { GUID, } from "./API/Guid";
import { MERGE, } from "./API/Objects";
import { SearchPattern, } from "./API/SearchPattern";
import {
    TIMESPACE_PARSE,
    TIMESPACE_STRINGIFY,
    TimeSpan,
} from "./API/TimeSpan";
import { Timezone, } from "./API/Timezone";
import { TIMEZONES, } from "./API/Timezones";
import { COMPANIES, CONTACTS } from "./Storage";

const version = (5.01);

export default {
    version,
    storage: {
        companies: COMPANIES,
        contacts: CONTACTS,
    },

    //#region Utility, conversion, and encoding functions
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
    timezones: TIMEZONES,

    convert: CONVERT,
    encoding: {
        toPassword: PASSWORD_ENCODE,
        fromPassword: PASSWORD_DECODE,
    },
    //#endregion Utility, conversion, and encoding functions

    //#region Drawing and trigonometry
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
    //#endregion Drawing and trigonometry

    //#region Coordinates and geography
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
    //#endregion Coordinates and geography

    //#region Accounts
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
    },
    Contact,
    Machine,
    Session,
    SessionStatus,
    User,
    UserGeneral,
    UserAdvanced,
    UserGroup,
    UserNotifications,
    NotificationMethod,
    //#endregion Accounts
};