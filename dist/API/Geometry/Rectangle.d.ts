import { IPoint, IRectangle, RectangleExpansion } from './Interfaces';
import { Point } from './Point';
import { Radial } from './Radial';
import { Size } from './Size';
import { JsonObject } from '../Types';
/**
 * A four-sided box on a flat surface.
 */
export declare class Rectangle implements IRectangle {
    #private;
    /**
     * Returns a new {@link Radial} from the given object.
     */
    static fromJSON(rectangle: any): Rectangle;
    /**
     * Left-most horizontal coordinate
     */
    left: number;
    /**
     * Highest vertical coordinate.
     */
    top: number;
    /**
     * Right-most horizontal coordinate
     */
    right: number;
    /**
     * Lowest vertical coordinate
     */
    bottom: number;
    /**
     * The absolute width of this Rectangle.
     */
    get width(): number;
    /**
     * The absolute height of this Rectangle.
     */
    get height(): number;
    constructor(left?: number | RectangleExpansion, top?: number | RectangleExpansion, right?: number | RectangleExpansion, bottom?: number | RectangleExpansion);
    /**
     * Validates the boundary and returns a string representation
     * @param delimiter	The boundary is delimited by a comma (,) by default, but you can override with your own value (optional)
     * @returns A string in the format of "left,top,right,bottom".
     */
    toString(delimiter?: string): string;
    /**
     * Creates a literal of this {@link Rectangle}.
     * Used internally by {@link JSON.stringify}.
     */
    toJSON(): IRectangle & JsonObject;
    /**
     * Compares this Rectangle to another to see if they are equal.
     * @param rect	The other Rectangle to compare.
     * @param precision	The degree of precision to use; default is full precision.
     */
    isEqual(rect: IRectangle, precision?: number): rect is IRectangle;
    /**
     * Checks to see if the bounds are valid (not inside-out).
     */
    isValid(): boolean;
    /**
     * Checks to see if the bounds are valid, and that the corners are different coordinates.
     */
    isEmpty(): boolean;
    /**
     * Determines if the given {@link IPoint} is contained by this {@link Rectangle}.
     * @param dot
     */
    contains(dot: IPoint): boolean;
    /**
     * Determines if the given {@link IRectangle} is overlaps this {@link Rectangle} in any way
     * @param rect
     */
    overlaps(rect: IRectangle): boolean;
    /**
     * Validates the boundary and creates a duplicate of this {@link Rectangle}.
     */
    copy(): Rectangle;
    /**
     * Returns the {@link Point} at the centre.
     */
    getCentre(): Point;
    /**
     * Validates the boundary and creates a {@link Size} representation.
     */
    getSize(): Size;
    /**
     * Returns the {@link Point} at the top-most/left-most corner.
     */
    getTopLeft(): Point;
    /**
     * Returns the {@link Point} at the top-most/right-most corner.
     */
    getTopRight(): Point;
    /**
     * Returns the {@link Point} at the bottom-most/left-most corner.
     */
    getBottomLeft(): Point;
    /**
     * Returns the {@link Point} at the bottom-most/right-most corner.
     */
    getBottomRight(): Point;
    /**
     * Validates the boundary by ensuring the top value is less than the bottom value,
     * and the left value is less than the right value.
     * Also adjusts the width and height values.
     */
    validate(): this;
    /**
     * Extends the boundary to envelop the given point(s) but does not automatically validate.
     * This comes in efficient when doing many operations on a single {@link Rectangle}.
     * @param object	The objects used to extend the boundary
     */
    expand(object: RectangleExpansion): this;
    /**
     * Extends the boundary to envelop the given point(s) and automatically validates
     * @param object	The objects used to extend the boundary
     */
    extend(object: RectangleExpansion): this;
    /**
     * Increases the size of the boundary by the given width and height.
     * If the direction contains the word "top", the {@link Rectangle#top} decreases by the given height.
     * If the direction contains the word "bottom", the {@link Rectangle#bottom} increases by the given height.
     * If the direction does not contain either "top" or "bottom", the {@link Rectangle#top} decreases by half the given height, and the {@link Rectangle#bottom} increases by half the given height.
     * If the direction contains the word "left", the {@link Rectangle#left} decreases by the given width.
     * If the direction contains the word "right", the {@link Rectangle#right} increases by the given width.
     * If the direction does not contain either "left" or "right", the {@link Rectangle#left} decreases by half the given width, and the {@link Rectangle#right} increases by half the given height.
     * @param width
     * @param height
     * @param direction
     */
    grow(width?: number, height?: number, direction?: string): this;
    /**
     * Updates this {@link Rectangle} with the given angle and distance.
     * @param distance
     * @param degrees
     */
    translateTo(distance: number, degrees: number): this;
    /**
     * Updates this {@link Rectangle} with the given offset.
     * @param dot
     */
    offsetTo(dot: IPoint): this;
    /**
     * Creates a new {@link Rectangle} at the given angle and distance.
     * @param distance
     * @param degrees
     */
    toTranslated(distance: number, degrees: number): Rectangle;
    /**
     * Creates a new {@link Rectangle} offset by the given amounts.
     * @param dot
     */
    toOffset(dot: IPoint): Rectangle;
    /**
     * Validates the boundary and returns a {@link Radial}.
     * @param clip	If true, [()], if false ([]).
     */
    toRadial(clip?: boolean): Radial;
}
//# sourceMappingURL=Rectangle.d.ts.map