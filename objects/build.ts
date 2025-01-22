"use strict";

import { PYTHAGORA, } from "./API/Functions";
import { codify } from "./API/Codifier";
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

const version = (5.0);

const namespaces = {
    version,
    utility: {
        codify,
    },
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
    geometry: {
        Point,
        Radial,
        Rectangle,
        Size,
    },
    geography: {},
};
export default namespaces;