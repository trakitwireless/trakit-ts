import { FLOAT, } from '../Constants';
import { ROUND_TO, } from '../Functions';
import {
	IPoint,
	IPoint_instanceOf,
} from './Interfaces';
import {
	POINT_DISTANCE,
	POINT_VECTOR,
	POINT_ANGLE,
} from './Functions';
import { Radial, } from './Radial';

/**
 * A coordinate on a flat surface.
 */
export class Point implements IPoint {
	/**
	 * Returns a new {@link Radial} from the given object.
	 * @param object	
	 * @returns 
	 */
	static fromObject(object: any): Point {
		return new Point(
			object.x,
			object.y
		);
	}

	/**
	 * Horizontal coordinate.
	 */
	x: number;
	/**
	 * Vertical coordinate.
	 */
	y: number;

	constructor(x: number, y: number) {
		this.x = FLOAT(x as any);
		this.y = FLOAT(y as any);
	}

	/**
	 * Returns a string representation of this {@link Point}.
	 * @param delimiter	The boundary is delimited by a comma (,) by default, but you can override with your own value.
	 * @returns A string in the format of "x,y".
	 */
	toString(delimiter: string = ","): string {
		return [this.x, this.y].join(delimiter ?? "");
	};
	/**
	 * Creates a literal of this {@link Point}.
	 * Used internally by {@link JSON.stringify}.
	 */
	toJSON(): IPoint {
		return {
			"x": this.x,
			"y": this.y
		};
	}
	/**
	 * Creates a duplicate of this {@link Point}.
	 */
	copy(): Point {
		return new Point(
			this.x,
			this.y
		);
	}

	/**
	 * Compares this {@link Point} to another to see if they are equal.
	 * @param point	The other {@link Point} to compare.
	 * @param precision	The degree of precision to use; default is full precision.
	 */
	isEquals(point: IPoint, precision: number = 18): point is IPoint {
		return IPoint_instanceOf(point)
			&& ROUND_TO(this.x, precision) == ROUND_TO(point.x, precision)
			&& ROUND_TO(this.y, precision) == ROUND_TO(point.y, precision);
	}
	/**
	 * Calculates the distance between two {@link Point}s.
	 * @param point	The other {@link Point} to compare
	 */
	distanceTo(point: IPoint): number {
		return POINT_DISTANCE(this, point);
	}
	/**
	 * Calculates the angle (in degrees) to the given {@link Point}.
	 * @param point
	 */
	angleTo(point: IPoint): number {
		return POINT_ANGLE(this, point);
	}
	/**
	 * Updates this {@link Point} with the given angle and distance.
	 * @param distance 
	 * @param degrees 
	 */
	translateTo(distance: number, degrees: number): this {
		return this.offsetTo(POINT_VECTOR(distance, degrees));
	}
	/**
	 * Updates this {@link Point} with the given offset.
	 * @param dot 
	 */
	offsetTo(dot: IPoint): this {
		const offset = this.toOffset(dot);
		this.x = offset.x;
		this.y = offset.y;
		return this;
	}

	/**
	 * Creates a new {@link Point} at the given angle and distance.
	 * @param distance
	 * @param degrees
	 */
	toTranslated(distance: number, degrees: number): Point {
		return this.toOffset(POINT_VECTOR(distance, degrees));
	}
	/**
	 * Creates a new {@link Point} based on the given offset.
	 * @param offset
	 */
	toOffset(offset: IPoint): Point {
		return new Point(this.x + offset.x, this.y + offset.y);
	}
	/**
	 * Creates a new {@link Radial} based on the given radius.
	 * @param radius
	 */
	toRadial(radius: number): Radial {
		return new Radial(
			this.x,
			this.y,
			radius
		);
	}
}