import { IPoint, ISize } from "../API/Geometry/Interfaces";
import { Point } from "../API/Geometry/Point";
import { Size } from "../API/Geometry/Size";
import { ISerializable } from "../API/Interfaces/ISerializable";
import { codified, ushort, JsonObject } from "../API/Types";
import { IconLayer } from "./IconLayer";
/**
 * The image source and defined status tags which need to be applied to an asset in order to show the image.
 */
export declare class IconGlyph implements ISerializable {
    /**
     *
     * @param json
     */
    static fromJSON(json: JsonObject): IconGlyph;
    /**
     * A list of codified status tag names.  Any of the tags must be applied to the asset for the image to appear.
     */
    tags: codified[];
    /**
     * Path to the image.
     */
    src: string;
    /**
     * Size of the glyph in pixels.
     */
    size: Size;
    /**
     * The offset from the lat/long in pixels.
     */
    anchor: Point;
    /**
     * The layer on which this glyph is displayed.
     */
    layer: IconLayer;
    /**
     * The z-order of this glyph compared to other glyphs on the same layer.
     */
    zIndex: ushort;
    /**
     * Indicates that this glyph rotate based on GPS bearing.
     */
    rotates: boolean;
    constructor(tags?: codified[], src?: string, size?: ISize | JsonObject, anchor?: IPoint | JsonObject, layer?: IconLayer, zIndex?: ushort, rotates?: boolean);
    toJSON(): JsonObject;
    isEqual(other: IconGlyph): boolean;
}
//# sourceMappingURL=IconGlyph.d.ts.map