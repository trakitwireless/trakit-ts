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

//#region Position
/**
 * GPS position information.
 */
export interface IPosition extends ILatLng {
	/**
	Speed
	 */
	speed: number | null;
	/**
	Direction of travel
	 */
	bearing: number | null;
	/**
	Distance in meters from the sea level
	 */
	altitude: number | null;
	/**
	Threshold in meters for the accuracy of a position
	 */
	accuracy: number | null;
	/**
	The Date/Time of the GPS reading
	 */
	dts: string | null;
	/**
	A better description of the current road-segment
	 */
	streetAddress: IStreetAddress | null;
	/**
	The posted speed limit for the road segment
	 */
	speedLimit: number | null;
}
//#endregion Position
//#region StreetAddress
/**
 * A road segment description.
 */
export interface IStreetAddress {
	/**
	 * House number.
	 */
	number: string | null;
	/**
	 * Full street name.
	 */
	street: string | null;
	/**
	 * City name.
	 */
	city: string | null;
	/**
	 * Region name.
	 */
	region: string | null;
	/**
	 * Province or state code.
	 * Codes should be a value from ISO 3166-2.
	 */
	province: string;
	/**
	 * Country code.
	 * Codes should be a value from ISO 3166-1 alpha-2.
	 */
	country: string;
	/**
	 * Postal or zip code.
	 */
	postal: string | null;
	/**
	 * Indicates that there is a toll for the current road segment.
	 */
	isToll: boolean | null;
}
//#endregion StreetAddress

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