import { codify } from "./API/Codifier";
import { Point, } from "./API/Geometry/Point";
import { Size, } from "./API/Geometry/Size";
import { Square, } from "./API/Geometry/Square";

const version = (5.0);

const namespaces = {
    version,
    utility: {
        codify,
    },
    encoding: {},
    geometry: {
        Point,
        Size,
        Square,
    },
    geography: {},
};
export default namespaces;