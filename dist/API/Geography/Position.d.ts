import { datetime, JsonObject, nothing } from '../Types';
import { IPosition, IStreetAddress } from './Interfaces';
import { LatLng } from './LatLng';
import { StreetAddress } from './StreetAddress';
/**
 * GPS position information
 */
export declare class Position extends LatLng implements IPosition {
    /**
     *
     * @param json
     * @returns
     */
    static fromJSON(json: IPosition | JsonObject): Position;
    /**
     * Speed
     */
    readonly speed: number;
    /**
     * Direction of travel
     */
    readonly bearing: number;
    /**
     * Distance in meters from the sea level
     */
    readonly altitude: number;
    /**
     * Threshold in meters for the accuracy of a position
     */
    readonly accuracy: number;
    /**
     * The Date/Time of the GPS reading
     */
    readonly date: Date;
    /**
     * The Date/Time of the GPS reading
     */
    get dts(): string;
    /**
     * A better description of the current road-segment
     */
    readonly streetAddress: StreetAddress | null;
    /**
     * The posted speed limit for the road segment
     */
    readonly speedLimit: number | nothing;
    /**
     * Provider Identifier
     */
    readonly origin: string;
    /**
     * The road segment description
     */
    readonly address: string;
    constructor(lat?: number | nothing, lng?: number | nothing, speed?: number | nothing, bearing?: number | nothing, accuracy?: number | nothing, dts?: Date | number | datetime | nothing, address?: string | nothing, limit?: number | nothing, altitude?: number | nothing, street?: IStreetAddress | JsonObject | nothing);
    /**
     * Returns a text representation of this position.
     * Returned strings cannot be converted back into {@link Position}
     * objects, so don't use this for deserialization.
     * @param delimiter
     */
    toString(delimiter?: string): string;
    /**
     * Creates a literal of this {@link Position}.
     * Used internally by {@link JSON.stringify}.
     */
    toJSON(): IPosition & JsonObject;
    /**
     *
     * @param position
     * @returns
     */
    isEqual(position: Position | IPosition): boolean;
}
//# sourceMappingURL=Position.d.ts.map