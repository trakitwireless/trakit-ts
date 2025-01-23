import { FLOAT, } from '../Constants';
import { POINT_DISTANCE, POINT_VECTOR, } from './Functions';
import { IS_AN, ROUND_TO, } from '../Functions';
import {
	IPoint,
	IPoint_instanceOf,
	IRadial,
	IRadial_instanceOf,
	RadialExpansion,
} from './Interfaces';
import { Point, } from './Point';
import { Size, } from './Size';
import { Rectangle, } from './Rectangle';

/**
 * A boundary on a flat surface based on a centre point and a radius.
 */
export class Radial implements IRadial, IPoint {
	/**
	 * Returns a new {@link Radial} from the given object.
	 * @param object	
	 */
	static fromObject(object: any): Radial {
		return new Radial(
			object.x,
			object.y,
			object.r
		);
	}

	/**
	 * Left coordinate.
	 */
	x: number = NaN;
	/**
	 * Top coordinate.
	 */
	y: number = NaN;
	/**
	 * Radial distance.
	 */
	r: number = NaN;

	constructor(x: number, y: number, r: number)
	constructor(...args: (number | RadialExpansion)[]) {
		if (IS_AN(args[0]) && IS_AN(args[1]) && IS_AN(args[2])) {
			this.x = FLOAT(args[0] as any);
			this.y = FLOAT(args[1] as any);
			this.r = FLOAT(args[2] as any);
		} else {
			this.__expander(args as RadialExpansion[]);
		}
	}

	/**
	 * Returns a string representation of this {@link Radial}.
	 * @param delimiter	The boundary is delimited by a comma (,) by default, but you can override with your own value.
	 * @returns A string in the format of "x,y,r".
	 */
	toString(delimiter: string = ","): string {
		return [this.x, this.y, this.r].join(delimiter ?? "");
	}
	/**
	 * Creates a literal of this {@link Radial}.
	 * Used internally by {@link JSON.stringify}.
	 */
	toJSON(): IRadial {
		return {
			"x": this.x,
			"y": this.y,
			"r": this.r
		};
	}
	/**
	 * Creates a duplicate of this {@link Radial}.
	 */
	copy(): Radial {
		return new Radial(
			this.x,
			this.y,
			this.r
		);
	}

	/**
	 * Compares this Point to another to see if they are equal.
	 * @param circle	The other {@link IRadial} to compare
	 * @param precision	The degree of precision to use; default is full precision.
	 */
	equals(circle: IRadial, precision: number = 18): boolean {
		return IRadial_instanceOf(circle)
			&& ROUND_TO(this.x, precision) == ROUND_TO(circle.x, precision)
			&& ROUND_TO(this.y, precision) == ROUND_TO(circle.y, precision)
			&& ROUND_TO(this.r, precision) == ROUND_TO(circle.r, precision);
	}
	/**
	 * Determines if the given {@link IPoint} is contained by this Radial
	 * @param point
	 */
	contains(point: IPoint): boolean {
		return POINT_DISTANCE(this, point) <= this.r;
	}
	/**
	 * Determines if the given {@link IRadial} is overlaps this {@link Radial} in any way
	 * @param circle
	 */
	overlaps(circle: IRadial): boolean {
		return POINT_DISTANCE(this, circle) <= this.r + circle.r;
	}

	/**
	 * Returns the centre point representation.
	 */
	getCentre(): Point {
		return new Point(this.x, this.y);
	}
	/**
	 * Returns the {@link Size} of the diameter.
	 */
	getSize(): Size {
		return new Size(
			this.r * 2,
			this.r * 2
		);
	}

	/**
	 * Worker function that actually extends the boundary to envelop the given point(s)/boundary(s).
	 * @param object
	 */
	__expander(object: RadialExpansion) {
		if (object instanceof Array) {
			object.forEach(this.__expander, this);
		} else {
			const centre = this.getCentre();
			let distance;
			if (IRadial_instanceOf(object)) {
				if ((distance = POINT_DISTANCE(centre, object) + object.r) > this.r) this.r = distance;
			} else if (IPoint_instanceOf(object)) {
				if ((distance = POINT_DISTANCE(centre, object)) > this.r) this.r = distance;
			}
		}
	}
	/**
	 * Extends the boundary to envelop the given point(s).
	 * @param object	The objects used to extend the radius.
	 */
	extend(object: RadialExpansion): this {
		this.__expander(object);
		return this;
	}
	/**
	 * Increases the boundary radius.
	 * @param length
	 */
	grow(length: number): this {
		this.r += length;
		return this;
	}

	/**
	 * Creates a new {@link Radial} offset by the given amounts.
	 * @param point
	 */
	toOffset(point: IPoint): Radial {
		return new Radial(
			this.x + point.x,
			this.y + point.y,
			this.r
		)
	}
	/**
	 * Creates a new {@link Radial} at the given distance and direction.
	 * @param distance
	 * @param degrees
	 */
	toTranslated(distance: number, degrees: number): Radial {
		return this.toOffset(POINT_VECTOR(distance, degrees));
	}
	/**
	 * Converts this radial boundary into a {@link Rectangle}.
	 * @param clip	If true, [()], if false ([]).
	 */
	toRectangle(clip: boolean = false): Rectangle {
		const centre = !!clip
			? this.getCentre()
			: null,
			topleft = centre
				? centre.toOffset(POINT_VECTOR(this.r, -45))
				: new Point(this.x - this.r, this.y - this.r),
			bottomright = centre
				? centre.toOffset(POINT_VECTOR(this.r, 135))
				: new Point(this.x + this.r, this.y + this.r);
		return new Rectangle(topleft, bottomright);
	}
}