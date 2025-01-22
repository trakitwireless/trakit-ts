import { IS_NUMBER, } from '../Functions';
import { Radial, } from './Radial';
import { LatLngBounds, } from './LatLngBounds';
import { Size, } from './Size';

//#region LatLng
/**
 * A coordinate on the Earth.
 **/
export interface ILatLng {
	/**
	 * Latitude.
	 **/
	lat: number;
	/**
	 * Longitude.
	 **/
	lng: number;
}

/**
 * Returns true if the given pin conforms to the {@link ILatLng} interface.
 * @param pin	
 * @returns 
 **/
export function ILatLng_instanceOf(pin: any): pin is ILatLng {
	return !!pin
		&& IS_NUMBER(pin.x)
		&& IS_NUMBER(pin.y);
}
/**
 * 
 * @param dot	
 * @returns 
 **/
export function ILatLng_clone(dot: ILatLng): ILatLng {
	return {
		lat: dot.lat,
		lng: dot.lng,
	};
}
//#endregion LatLng

//#region LatLngBounds
/**
 * A rectangular boundary on a flat surface.
 **/
export interface ILatLngBounds {
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
 * Returns true if the given box conforms to the {@link LatLngBounds} interface.
 * @param box	
 **/
export function ILatLngBounds_instanceOf(box: any): box is ILatLngBounds {
	return !!box
		&& IS_NUMBER(box.top)
		&& IS_NUMBER(box.left)
		&& IS_NUMBER(box.bottom)
		&& IS_NUMBER(box.right);
}
/**
 * 
 * @param box	
 * @returns 
 **/
export function ILatLngBounds_clone(box: ILatLngBounds): ILatLngBounds {
	return {
		left: box.left,
		top: box.top,
		right: box.right,
		bottom: box.bottom,
	};
}

/**
 * The types used to extend a {@link LatLngBounds}'s edges.
 **/
export type LatLngBoundsExpansion = ILatLng
	| ILatLngBounds
	| (ILatLng | ILatLngBounds | LatLngBoundsExpansion)[];
//#endregion LatLngBounds

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