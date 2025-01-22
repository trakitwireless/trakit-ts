
import { ABS, } from '../Constants';
import {
	IS_AN,
	IS_NAN,
	IS_NUMBER,
	IS_STRING,
	ROUND_TO,
} from '../Functions';
import {
	IPoint,
	IPoint_instanceOf,
	IRectangle,
	IRectangle_instanceOf,
	RectangleExpansion,
} from './Interfaces';
import {
	POINT_DISTANCE,
	POINT_VECTOR,
	RECTANGLE_CONTAINS_POINT,
} from './Functions';
import { Point, } from './Point';
import { Radial, } from './Radial';
import { Size, } from './Size';

/**
 * A four-sided box on a flat surface.
 **/
export class Rectangle implements IRectangle {
	/**
	 * Returns a new {@link Radial} from the given object.
	 **/
	static fromObject(rectangle: any): IRectangle {
		rectangle = rectangle || {};
		const hasLeft = IS_AN(rectangle.left),
			hasTop = IS_AN(rectangle.top),
			hasRight = IS_AN(rectangle.right),
			hasBottom = IS_AN(rectangle.bottom),
			hasWidth = IS_AN(rectangle.width),
			hasHeight = IS_AN(rectangle.height);
		return new Rectangle({
			"left": hasLeft
				? rectangle.left
				: hasRight && hasWidth
					? rectangle.right - rectangle.width
					: NaN,
			"top": hasTop
				? rectangle.top
				: hasBottom && hasHeight
					? rectangle.bottom - rectangle.height
					: NaN,
			"right": hasRight
				? rectangle.right
				: hasLeft && hasWidth
					? rectangle.left + rectangle.width
					: NaN,
			"bottom": hasBottom
				? rectangle.bottom
				: hasTop && hasHeight
					? rectangle.top + rectangle.height
					: NaN,
		});
	}

	/**
	 * Left-most horizontal coordinate
	 **/
	left: number = NaN;
	/**
	 * Highest vertical coordinate.
	 **/
	top: number = NaN;
	/**
	 * Right-most horizontal coordinate
	 **/
	right: number = NaN;
	/**
	 * Lowest vertical coordinate
	 **/
	bottom: number = NaN;
	/**
	 * The absolute width of this Rectangle.
	 **/
	public get width(): number { return this.right - this.left; }
	/**
	 * The absolute height of this Rectangle.
	 **/
	public get height(): number { return this.bottom - this.top; }

	constructor(...args: RectangleExpansion[]) {
		this.__expander(args);
	}

	/**
	 * Validates the boundary and returns a string representation
	 * @param delimiter	The boundary is delimited by a comma (,) by default, but you can override with your own value (optional)
	 * @returns A string in the format of "left,top,right,bottom".
	 **/
	toString(delimiter: string = ","): string {
		this.validate();
		return [this.left, this.top, this.right, this.bottom].join(delimiter ?? "");
	}
	/**`
	 * Creates a literal of this {@link Rectangle}.
	 * Used internally by {@link JSON.stringify}.
	 **/
	toJSON(): IRectangle {
		this.validate();
		return {
			"top": this.top,
			"right": this.right,
			"bottom": this.bottom,
			"left": this.left
		};
	}

	/**
	 * Compares this Rectangle to another to see if they are equal.
	 * @param rect	The other Rectangle to compare.
	 * @param precision	The degree of precision to use; default is full precision.
	 **/
	equals(rect: IRectangle, precision: number = 18): rect is IRectangle {
		this.validate();
		return IRectangle_instanceOf(rect)
			&& ROUND_TO(this.top, precision) == ROUND_TO(rect.top, precision)
			&& ROUND_TO(this.left, precision) == ROUND_TO(rect.left, precision)
			&& ROUND_TO(this.bottom, precision) == ROUND_TO(rect.bottom, precision)
			&& ROUND_TO(this.right, precision) == ROUND_TO(rect.right, precision);
	}
	/**
	 * Checks to see if the bounds are valid (not inside-out).
	 **/
	isValid(): boolean {
		return !(
			this.top > this.bottom
			|| this.right < this.left
			|| this.width !== ABS(this.right - this.left)
			|| this.height !== ABS(this.bottom - this.top)
		);
	}
	/**
	 * Checks to see if the bounds are valid, and that the corners are different coordinates.
	 **/
	isEmpty(): boolean {
		return this.isValid()
			&& this.width + this.height === 0;
	}
	/**
	 * Determines if the given {@link IPoint} is contained by this {@link Rectangle}.
	 * @param dot
	 **/
	contains(dot: IPoint): boolean {
		return RECTANGLE_CONTAINS_POINT(this, dot);
	}
	/**
	 * Determines if the given {@link IRectangle} is overlaps this {@link Rectangle} in any way
	 * @param rect
	 **/
	overlaps(rect: IRectangle): boolean {
		// if the rectangle does not overlap then one of these conditions is always met
		// if one of these conditions is not met, then it must overlap
		return !(
			rect.left > this.right
			|| rect.right < this.left
			|| rect.top > this.bottom
			|| rect.bottom < this.top
		);
	}
	
	/**
	 * Validates the boundary and creates a duplicate of this {@link Rectangle}.
	 **/
	copy(): Rectangle {
		this.validate();
		return new Rectangle(this);
	}
	/**
	 * Returns the {@link Point} at the centre.
	 **/
	getCentre(): Point {
		this.validate();
		return new Point(
			this.left + (this.width / 2),
			this.top + (this.height / 2)
		);
	}
	/**
	 * Validates the boundary and creates a {@link Size} representation.
	 **/
	getSize(): Size {
		this.validate();
		return new Size(this.width, this.height);
	}
	/**
	 * Returns the {@link Point} at the top-most/left-most corner.
	 **/
	getTopLeft(): Point {
		this.validate();
		return new Point(this.left, this.top);
	}
	/**
	 * Returns the {@link Point} at the top-most/right-most corner.
	 **/
	getTopRight(): Point {
		this.validate();
		return new Point(this.right, this.top);
	}
	/**
	 * Returns the {@link Point} at the bottom-most/left-most corner.
	 **/
	getBottomLeft(): Point {
		this.validate();
		return new Point(this.left, this.bottom);
	}
	/**
	 * Returns the {@link Point} at the bottom-most/right-most corner.
	 **/
	getBottomRight(): Point {
		this.validate();
		return new Point(this.right, this.bottom);
	}

	/**
	 * Worker function that actually extends the boundary to envelop the given point(s)/boundary(s).
	 * @param object	The objects used to extend the boundary
	 **/
	private __expander(object: RectangleExpansion) {
		if (object instanceof Array) {
			object.forEach(this.__expander, this);
		} else if (IPoint_instanceOf(object)) {
			if (object.y < this.top || IS_NAN(this.top)) this.top = object.y;
			if (object.x < this.left || IS_NAN(this.left)) this.left = object.x;
			if (object.x > this.right || IS_NAN(this.right)) this.right = object.x;
			if (object.y > this.bottom || IS_NAN(this.bottom)) this.bottom = object.y;
		} else if (IRectangle_instanceOf(object)) {
			if (object.top < this.top || IS_NAN(this.top)) this.top = object.top;
			if (object.left < this.left || IS_NAN(this.left)) this.left = object.left;
			if (object.right > this.right || IS_NAN(this.right)) this.right = object.right;
			if (object.bottom > this.bottom || IS_NAN(this.bottom)) this.bottom = object.bottom;
		}
	}
	/**
	 * Validates the boundary by ensuring the top value is less than the bottom value,
	 * and the left value is less than the right value.
	 * Also adjusts the width and height values.
	 **/
	validate(): this {
		var top = this.top,
			left = this.left,
			bottom = this.bottom,
			right = this.right;
		this.top = top < bottom ? top : bottom;
		this.bottom = top > bottom ? top : bottom;
		this.left = left < right ? left : right;
		this.right = left > right ? left : right;
		return this;
	}
	/**
	 * Extends the boundary to envelop the given point(s) but does not automatically validate.
	 * This comes in efficient when doing many operations on a single {@link Rectangle}.
	 * @param object	The objects used to extend the boundary
	 **/
	expand(object: RectangleExpansion): this {
		this.__expander(object);
		return this;
	}
	/**
	 * Extends the boundary to envelop the given point(s) and automatically validates
	 * @param object	The objects used to extend the boundary
	 **/
	extend(object: RectangleExpansion): this {
		this.__expander(object);
		return this.validate();
	}
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
	 **/
	grow(width: number = 0, height: number = 0, direction: string = ""): this {
		if (!IS_NUMBER(width)) width = 0;
		if (!IS_NUMBER(height)) height = 0;
		if (!IS_STRING(direction)) direction = "";

		if (direction.indexOf("top") > -1) {
			this.top -= height;
		} else if (direction.indexOf("bottom") > -1) {
			this.bottom += height;
		} else {
			this.top -= height / 2;
			this.bottom += height / 2;
		}
		if (direction.indexOf("left") > -1) {
			this.left -= width;
		} else if (direction.indexOf("right") > -1) {
			this.right += width;
		} else {
			this.left -= width / 2;
			this.right += width / 2;
		}

		return this.validate();
	}
	/**
	 * Creates a new {@link Rectangle} offset by the given amounts.
	 * @param dot
	 **/
	toOffset(dot: IPoint): Rectangle {
		this.validate();
		return new Rectangle(
			new Point(
				this.left + dot.x,
				this.top + dot.y
			),
			new Point(
				this.right + dot.x,
				this.bottom + dot.y
			)
		);
	}
	/**
	 * Creates a new {@link Rectangle} at the given angle and distance.
	 * @param distance
	 * @param degrees
	 **/
	toTranslated(distance: number, degrees: number): Rectangle {
		return this.toOffset(POINT_VECTOR(distance, degrees));
	}
	/**
	 * Validates the boundary and returns a {@link Radial}.
	 * @param clip	If true, [()], if false ([]).
	 **/
	toRadial(clip: boolean = false): Radial {
		this.validate();
		var centre = this.getCentre();
		return new Radial(
			centre.x,
			centre.y,
			!clip ?
				POINT_DISTANCE(
					centre,
					{
						x: this.left,
						y: this.top,
					}
				)
				: this.width > this.height
					? POINT_DISTANCE(
						centre,
						{
							x: this.left,
							y: this.top + (this.height / 2),
						}
					)
					: POINT_DISTANCE(
						centre,
						{
							x: this.left + (this.width / 2),
							y: this.top,
						}
					)
		);
	}
}