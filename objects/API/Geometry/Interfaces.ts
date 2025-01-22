import { IS_NUMBER, } from '../Functions';
import { Radial, } from './Radial';
import { Rectangle, } from './Rectangle';
import { Size, } from './Size';

//#region Point
/**
 * A coordinate on a flat surface.
 **/
export interface IPoint {
	/**
	 * Horizontal coordinate.
	 **/
	x: number;
	/**
	 * Vertical coordinate.
	 **/
	y: number;
}

/**
 * Returns true if the given point conforms to the {@link IPoint} interface.
 * @param dot	
 * @returns 
 **/
export function IPoint_instanceOf(dot: any): dot is IPoint {
	return !!dot
		&& IS_NUMBER(dot.x)
		&& IS_NUMBER(dot.y);
}
/**
 * 
 * @param dot	
 * @returns 
 **/
export function IPoint_clone(dot: IPoint): IPoint {
	return {
		x: dot.x,
		y: dot.y,
	};
}
//#endregion Point

//#region Radial
/**
 * A boundary on a flat surface based on a centre point and a radius.
 **/
export interface IRadial {
	/**
	 * Left coordinate.
	 **/
	x: number;
	/**
	 * Top coordinate.
	 **/
	y: number;
	/**
	 * Radius.
	 **/
	r: number;
}

/**
 * The types used to extend a {@link Radial}'s radius.
 **/
export type RadialExpansion = IPoint
	| IRadial
	| (IPoint | IRadial | RadialExpansion)[];

/**
 * Returns true if the given radial conforms to the {@link IRadial} interface.
 * @param radial	
 * @returns 
 **/
export function IRadial_instanceOf(radial: any): radial is IRadial {
	return !!radial
		&& IS_NUMBER(radial.width)
		&& IS_NUMBER(radial.height);
}
/**
 * 
 * @param circle	
 * @returns 
 **/
export function IRadial_clone(circle: IRadial): IRadial {
	return {
		x: circle.x,
		y: circle.y,
		r: circle.r,
	};
}
//#endregion Radial

//#region Rectangle
/**
 * A rectangular boundary on a flat surface.
 **/
export interface IRectangle {
	/**
	 * Left-most horizontal coordinate
	 **/
	left: number;
	/**
	 * Highest vertical coordinate.
	 **/
	top: number;
	/**
	 * Right-most horizontal coordinate
	 **/
	right: number;
	/**
	 * Lowest vertical coordinate
	 **/
	bottom: number;
}

/**
 * Returns true if the given rect conforms to the {@link Rectangle} interface.
 * @param rect	
 **/
export function IRectangle_instanceOf(rect: any): rect is IRectangle {
	return !!rect
		&& IS_NUMBER(rect.top)
		&& IS_NUMBER(rect.left)
		&& IS_NUMBER(rect.bottom)
		&& IS_NUMBER(rect.right);
}
/**
 * 
 * @param rect	
 * @returns 
 **/
export function IRectangle_clone(rect: IRectangle): IRectangle {
	return {
		left: rect.left,
		top: rect.top,
		right: rect.right,
		bottom: rect.bottom,
	};
}

/**
 * The types used to extend a {@link Rectangle}'s edges.
 **/
export type RectangleExpansion = IPoint
	| IRectangle
	| (IPoint | IRectangle | RectangleExpansion)[];
//#endregion Rectangle

//#region Size
/**
 * Dimensions on a flat surface.
 **/
export interface ISize {
	/**
	 * Width.
	 **/
	width: number;
	/**
	 * Height.
	 **/
	height: number;
}

/**
 * Returns true if the given size conforms to the {@link Size} interface.
 * @param size	
 * @returns 
 **/
export function ISize_instanceOf(size: any): size is ISize {
	return !!size
		&& IS_NUMBER(size.width)
		&& IS_NUMBER(size.height);
}
/**
 * 
 * @param size	
 * @returns 
 **/
export function ISize_clone(size: ISize): ISize {
	return {
		width: size.width,
		height: size.height,
	};
}
//#endregion Size