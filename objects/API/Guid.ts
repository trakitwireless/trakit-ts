import {
	INT,
	LOC,
	MATH,
	RANDOM,
} from "./Constants";

/**
 * Used as a template with which you construct a GUID-like string
 */
const GUID_TEMPLATE: string[] = (
    (
        LOC
            ? (
                LOC.protocol
                + LOC.host
                + LOC.pathname
            )
            : (new Date)
                .valueOf()
                .toString(16)
    ).match(/[a-z0-9]/gim) as string[])
    .reduce(function (total, number) {
        return total + INT(number, 36);
    }, 0)
    .toString(16)
    .split("")
    .reduce(function (array, number, index) {
        array[index] = number;
        return array;
    }, "        -    -4   -    -            ".split(""));

/**
 * Used to help construct GUIDs by inserting the last 3 milliseconds of "now" as hex
 * @param {!Array.<string>} array	GUID array
 * @param {!string} number		Hex value take from the "now" milliseconds
 * @param {!number} index		Current index of the array
 * @return {!Array.<string>} array
 */
function GUID_HELPER(array, number, index) {
	array[index + 26] = number;
	return array;
}

/**
 * Delivers a GUID-like string with a mixed in location/refresh unique seed
 * @return {!string}
 */
export function guid() {
    var i = 0,
        l = 36,
        random = i,
        guid = (new Date)
            .valueOf()
            .toString(16)
            .substring(1)
            .split("")
            .reduce(GUID_HELPER, [...GUID_TEMPLATE]);
    for (; i < l; i++) if (guid[i] === " ") {
        random = MATH.random() * 16 | 0;
        guid[i] = (i !== 19 ? random : random & 0x3 | 0x8).toString(16);
    }
    return guid.join("");
}