import { ISerializable } from '../Interfaces/ISerializable';
import { JsonObject } from '../Types';
import { IPoint, IRadial, RadialExpansion } from './Interfaces';
import { Point } from './Point';
import { Rectangle } from './Rectangle';
import { Size } from './Size';
/**
 * A boundary on a flat surface based on a centre point and a radius.
 */
export declare class Radial implements IRadial, IPoint, ISerializable {
    /**
     * Returns a new {@link Radial} from the given object.
     * @param object
     */
    static fromJSON(json: IRadial | JsonObject): Radial;
    /**
     * Left coordinate.
     */
    x: number;
    /**
     * Top coordinate.
     */
    y: number;
    /**
     * Radial distance.
     */
    r: number;
    constructor(x?: number, y?: number, r?: number);
    /**
     * Returns a string representation of this {@link Radial}.
     * @param delimiter	The boundary is delimited by a comma (,) by default, but you can override with your own value.
     * @returns A string in the format of "x,y,r".
     */
    toString(delimiter?: string): string;
    /**
     * Creates a literal of this {@link Radial}.
     * Used internally by {@link JSON.stringify}.
     */
    toJSON(): IRadial & JsonObject;
    /**
     * Creates a duplicate of this {@link Radial}.
     */
    copy(): Radial;
    /**
     * Compares this Point to another to see if they are equal.
     * @param circle	The other {@link IRadial} to compare
     * @param precision	The degree of precision to use; default is full precision.
     */
    isEqual(circle: IRadial, precision?: number): boolean;
    /**
     * Determines if the given {@link IPoint} is contained by this Radial
     * @param point
     */
    contains(point: IPoint): boolean;
    /**
     * Determines if the given {@link IRadial} is overlaps this {@link Radial} in any way
     * @param circle
     */
    overlaps(circle: IRadial): boolean;
    /**
     * Returns the centre point representation.
     */
    getCentre(): Point;
    /**
     * Returns the {@link Size} of the diameter.
     */
    getSize(): Size;
    /**
     * Worker function that actually extends the boundary to envelop the given point(s)/boundary(s).
     * @param object
     */
    __expander(object: RadialExpansion): void;
    /**
     * Extends the boundary to envelop the given point(s).
     * @param object	The objects used to extend the radius.
     */
    extend(object: RadialExpansion): this;
    /**
     * Increases the boundary radius.
     * @param length
     */
    grow(length: number): this;
    /**
     * Updates this {@link Radial} with the given angle and distance.
     * @param distance
     * @param degrees
     */
    translateTo(distance: number, degrees: number): this;
    /**
     * Updates this {@link Radial} with the given offset.
     * @param dot
     */
    offsetTo(dot: IPoint): this;
    /**
     * Creates a new {@link Radial} at the given distance and direction.
     * @param distance
     * @param degrees
     */
    toTranslated(distance: number, degrees: number): Radial;
    /**
     * Creates a new {@link Radial} offset by the given amounts.
     * @param point
     */
    toOffset(point: IPoint): Radial;
    /**
     * Converts this radial boundary into a {@link Rectangle}.
     * @param clip	If true, [()], if false ([]).
     */
    toRectangle(clip?: boolean): Rectangle;
}
//# sourceMappingURL=Radial.d.ts.map