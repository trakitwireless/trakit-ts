import { INamed } from "../API/Interfaces/INamed";
import { ISerializable } from "../API/Interfaces/ISerializable";
import { IVisual } from "../API/Interfaces/IVisual";
import { codified, colour, JsonObject } from "../API/Types";
/**
 * Visual style identification helper.
 */
export declare class LabelStyle implements INamed, IVisual, ISerializable {
    /**
     *
     * @param json
     */
    static fromJSON(json: JsonObject): LabelStyle;
    /**
     * The name of this visual style.
     */
    name: string;
    /**
     * The background colour given to this style for easy visual identification.
     */
    fill: colour;
    /**
     * The text/graphic colour given to this style for easy visual identification.
     */
    stroke: colour;
    /**
     * The codified graphic name given to this script for easy visual identification.
     */
    graphic: codified;
    /**
     * Notes!
     */
    notes: string;
    /**
     * The codified name of this style
     */
    get code(): codified;
    constructor(name?: string, fill?: colour, stroke?: colour, graphic?: codified, notes?: string);
    toJSON(): {
        name: string;
        notes: string;
        fill: string;
        stroke: string;
        graphic: string;
    };
}
//# sourceMappingURL=LabelStyle.d.ts.map