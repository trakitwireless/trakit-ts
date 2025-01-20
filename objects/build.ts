import { ABS } from "./API/Constants";
import { codify } from "./API/Codifier";

const version = (5.0);

const namespaces = {
    version,
    utility: {
        codify,
    },
    encoding: {},
};
export default namespaces;