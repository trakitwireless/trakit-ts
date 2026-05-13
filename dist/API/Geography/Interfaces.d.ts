import { datetime, nothing } from '../Types';
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
export declare function ILatLng_instanceOf(pin: any): pin is ILatLng;
/**
 *
 * @param dot
 * @returns
 */
export declare function ILatLng_clone(dot: ILatLng): ILatLng;
/**
 * GPS position information.
 */
export interface IPosition extends ILatLng {
    /**
     * Speed
     */
    speed: number | nothing;
    /**
     * Direction of travel
     */
    bearing: number | nothing;
    /**
     * Distance in meters from the sea level
     */
    altitude: number | nothing;
    /**
     * Threshold in meters for the accuracy of a position
     */
    accuracy: number | nothing;
    /**
     * The Date/Time of the GPS reading
     */
    dts: datetime;
    /**
     * A description of the current road-segment
     */
    address: string | nothing;
    /**
     * A better description of the current road-segment
     */
    streetAddress: IStreetAddress | nothing;
    /**
     * The posted speed limit for the road segment
     */
    speedLimit: number | nothing;
}
/**
 * Returns true if the given pin conforms to the {@link IPosition} interface.
 * @param pin
 * @returns
 */
export declare function IPosition_instanceOf(pin: any): pin is IPosition;
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
/**
 * Returns true if the given pin conforms to the {@link IStreetAddress} interface.
 * @param address
 * @returns
 */
export declare function IStreetAddress_instanceOf(address: any): address is IStreetAddress;
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
export declare function ILatLngBounds_instanceOf(box: any): box is ILatLngBounds;
/**
 *
 * @param box
 * @returns
 */
export declare function ILatLngBounds_clone(box: ILatLngBounds): ILatLngBounds;
/**
 * The types used to extend a {@link LatLngBounds}'s edges.
 */
export type LatLngBoundsExpansion = ILatLng | ILatLngBounds | LatLngBoundsExpansion[];
//# sourceMappingURL=Interfaces.d.ts.map