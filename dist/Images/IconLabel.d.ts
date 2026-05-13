import { IPoint } from "../API/Geometry/Interfaces";
import { Point } from "../API/Geometry/Point";
import { ISerializable } from "../API/Interfaces/ISerializable";
import { colour, JsonObject } from "../API/Types";
/**
 * Definition for the name bubble above the icon on a map.
 */
export declare class IconLabel implements ISerializable {
    /**
     *
     * @param json
     */
    static fromJSON(json: JsonObject): IconLabel;
    /**
     * The offset from the lat/long in pixels.
     */
    anchor: Point;
    /**
     * Determines which corner of the label is attached to the anchor.
     */
    align: string;
    /**
     * Background colour of the label.
     */
    colour: colour;
    constructor(anchor?: IPoint | JsonObject, align?: string, colour?: colour);
    toJSON(): JsonObject;
    isEqual(other: IconLabel): boolean;
}
//# sourceMappingURL=IconLabel.d.ts.map