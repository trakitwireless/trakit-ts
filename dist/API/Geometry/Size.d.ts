import { JsonObject } from '../Types';
import { ISize } from './Interfaces';
/**
 * Dimensions on a flat surface.
 */
export declare class Size implements ISize {
    /**
     *
     * @param json
     * @returns
     */
    static fromJSON(json: ISize | JsonObject): Size;
    /**
     * Width.
     */
    width: number;
    /**
     * Height.
     */
    height: number;
    constructor(width: number, height: number);
    /**
     * Returns a string representation.
     * @param delimiter The boundary is delimited by a comma (,) by default, but you can override with your own value.
     * @returns A string in the format of "width,height".
     */
    toString(delimiter?: string): string;
    /**
     * Creates a literal of this {@link Size}.
     * Used internally by {@link JSON.stringify}.
     */
    toJSON(): ISize & JsonObject;
    /**
     * Compares this Size to another to see if they are equal
     * @param size		The other Size to compare
     * @param precision	The degree of precision to use; default is full precision
     */
    isEqual(size: ISize, precision?: number): size is ISize;
    /**
     * Returns a new instance of a {@link Size} where the width and height are adjusted to the given ratios.
     * If the second ratio is not given, then the first value is used for both.
     * The ratios are given as a percentage between 0 and 1.
     * To double the size of the Size, give a ratio of 2, and to shrink it to half size use 0.5.
     * @param ratioX
     * @param ratioY
     */
    resize(ratioX?: number, ratioY?: number): Size;
    /**
     * Returns a new {@link Size} where the width is the same as the given value, and the height is resized to preserve aspect ratio.
     * @param width
     */
    resizeToWidth(width: number): Size;
    /**
     * Returns a new {@link Size} where the height is the same as the given value, and the width is resized to preserve aspect ratio.
     * @param height
     */
    resizeToHeight(height: number): Size;
}
//# sourceMappingURL=Size.d.ts.map