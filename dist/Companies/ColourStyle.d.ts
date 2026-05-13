import { ISerializable } from "../API/Interfaces/ISerializable";
import { colour, JsonObject } from "../API/Types";
/**
 * Part of the White-labelling profile definitions.
 */
export declare class ColourStyle implements ISerializable {
    /**
     *
     * @param json
     */
    static fromJSON(json: JsonObject): ColourStyle;
    /**
     * The colour of the background.
     */
    fill: colour;
    /**
     * The colour of the text or outline.
     */
    stroke: colour;
    constructor(fill?: colour, stroke?: colour);
    toJSON(): {
        fill: string;
        stroke: string;
    };
}
//# sourceMappingURL=ColourStyle.d.ts.map