import { ISerializable } from '../Interfaces/ISerializable';
import { JsonObject } from '../Types';
import { IPoint } from './Interfaces';
import { Radial } from './Radial';
/**
 * A coordinate on a flat surface.
 */
export declare class Point implements IPoint, ISerializable {
    /**
     * Returns a new {@link Radial} from the given object.
     * @param json
     */
    static fromJSON(json: IPoint | JsonObject): Point;
    /**
     * Horizontal coordinate.
     */
    x: number;
    /**
     * Vertical coordinate.
     */
    y: number;
    constructor(x: number, y: number);
    /**
     * Returns a string representation of this {@link Point}.
     * @param delimiter	The boundary is delimited by a comma (,) by default, but you can override with your own value.
     * @returns A string in the format of "x,y".
     */
    toString(delimiter?: string): string;
    /**
     * Creates a literal of this {@link Point}.
     * Used internally by {@link JSON.stringify}.
     */
    toJSON(): IPoint & JsonObject;
    /**
     * Creates a duplicate of this {@link Point}.
     */
    copy(): Point;
    /**
     * Compares this {@link Point} to another to see if they are equal.
     * @param point	The other {@link Point} to compare.
     * @param precision	The degree of precision to use; default is full precision.
     */
    isEqual(point: IPoint, precision?: number): point is IPoint;
    /**
     * Calculates the distance between two {@link Point}s.
     * @param point	The other {@link Point} to compare
     */
    distanceTo(point: IPoint): number;
    /**
     * Calculates the angle (in degrees) to the given {@link Point}.
     * @param point
     */
    angleTo(point: IPoint): number;
    /**
     * Updates this {@link Point} with the given angle and distance.
     * @param distance
     * @param degrees
     */
    translateTo(distance: number, degrees: number): this;
    /**
     * Updates this {@link Point} with the given offset.
     * @param dot
     */
    offsetTo(dot: IPoint): this;
    /**
     * Creates a new {@link Point} at the given angle and distance.
     * @param distance
     * @param degrees
     */
    toTranslated(distance: number, degrees: number): Point;
    /**
     * Creates a new {@link Point} based on the given offset.
     * @param offset
     */
    toOffset(offset: IPoint): Point;
    /**
     * Creates a new {@link Radial} based on the given radius.
     * @param radius
     */
    toRadial(radius: number): Radial;
}
//# sourceMappingURL=Point.d.ts.map