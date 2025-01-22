import { ROUND_TO, } from '../Functions';
import {
	ISize,
	ISize_instanceOf,
} from './Interfaces';

/**
 * Dimensions on a flat surface.
 **/
export class Size implements ISize {
	/**
	 * Width.
	 **/
	width: number;
	/**
	 * Height.
	 **/
	height: number;

	constructor(width: number, height: number) {
		this.width = width;
		this.height = height;
	}

	/**
	 * Returns a string representation.
	 * @param delimiter The boundary is delimited by a comma (,) by default, but you can override with your own value.
	 * @returns A string in the format of "width,height".
	 **/
	toString(delimiter: string = ",") {
		return [this.width, this.height].join(delimiter ?? "");
	}
	/**
	 * Creates a literal of this {@link Size}.
	 * Used internally by {@link JSON.stringify}.
	 **/
	toJSON(): ISize {
		return {
			"width": this.width,
			"height": this.height
		};
	}

	/**
	 * Compares this Size to another to see if they are equal
	 * @param size		The other Size to compare
	 * @param precision	The degree of precision to use; default is full precision
	 **/
	equals(size: ISize, precision: number = 18): size is ISize {
		return ISize_instanceOf(size)
			&& ROUND_TO(this.width, precision) == ROUND_TO(size.width, precision)
			&& ROUND_TO(this.height, precision) == ROUND_TO(size.height, precision);
	}
	/**
	 * Returns a new instance of a {@link Size} where the width and height are adjusted to the given ratios.
	 * If the second ratio is not given, then the first value is used for both.
	 * The ratios are given as a percentage between 0 and 1.
	 * To double the size of the Size, give a ratio of 2, and to shrink it to half size use 0.5.
	 * @param ratioX
	 * @param ratioY
	 **/
	resize(ratioX: number = 1, ratioY: number = ratioX): Size {
		return new Size(
			this.width * ratioX,
			this.height * ratioY
		);
	}
	/**
	 * Returns a new {@link Size} where the width is the same as the given value, and the height is resized to preserve aspect ratio.
	 * @param width
	 **/
	resizeToWidth(width: number): Size {
		return this.resize(width / this.width);
	}
	/**
	 * Returns a new {@link Size} where the height is the same as the given value, and the width is resized to preserve aspect ratio.
	 * @param height
	 **/
	resizeToHeight(height: number): Size {
		return this.resize(height / this.height);
	}
}