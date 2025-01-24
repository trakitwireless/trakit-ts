import { IS_NUMBER, } from '../Functions';
import { LatLngBounds, } from './LatLngBounds';

//#region LatLng
/**
 * A coordinate on the Earth.
 */
export interface ILatLng {
	/**
	 * Latitude.
	 */
	lat: number;
	/**
	 * Longitude.
	 */
	lng: number;
}

/**
 * Returns true if the given pin conforms to the {@link ILatLng} interface.
 * @param pin	
 * @returns 
 */
export function ILatLng_instanceOf(pin: any): pin is ILatLng {
	return !!pin
		&& IS_NUMBER(pin.x)
		&& IS_NUMBER(pin.y);
}
/**
 * 
 * @param dot	
 * @returns 
 */
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
 */
export interface ILatLngBounds {
	/**
	 * Northern latitude
	 */
	north: number;
	/**
	 * Eastern longitude
	 */
	east: number;
	/**
	 * Southern latitude
	 */
	south: number;
	/**
	 * Western longitude
	 */
	west: number;
}

/**
 * Returns true if the given box conforms to the {@link ILatLngBounds} interface.
 * @param box	
 */
export function ILatLngBounds_instanceOf(box: any): box is ILatLngBounds {
	return !!box
		&& IS_NUMBER(box.north)
		&& IS_NUMBER(box.west)
		&& IS_NUMBER(box.south)
		&& IS_NUMBER(box.west);
}
/**
 * 
 * @param box	
 * @returns 
 */
export function ILatLngBounds_clone(box: ILatLngBounds): ILatLngBounds {
	return {
		west: box.west,
		north: box.north,
		east: box.east,
		south: box.south,
	};
}

/**
 * The types used to extend a {@link LatLngBounds}'s edges.
 */
export type LatLngBoundsExpansion = ILatLng
	| ILatLngBounds
	| (ILatLng | ILatLngBounds | LatLngBoundsExpansion)[];
//#endregion LatLngBounds