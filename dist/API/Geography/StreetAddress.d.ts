import { ISerializable } from "../Interfaces/ISerializable";
import { JsonObject, nothing } from "../Types";
import { IStreetAddress } from "./Interfaces";
/**
 * A road segment description
*/
export declare class StreetAddress implements IStreetAddress, ISerializable {
    /**
     *
     * @param street
     */
    static fromJSON(json: IStreetAddress | JsonObject): StreetAddress;
    /**
     * House number.
     */
    number: string;
    /**
     * Full street name.
     */
    street: string;
    /**
     * City name.
     */
    city: string;
    /**
     * Region name.
     */
    region: string;
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
    postal: string;
    /**
     * Indicates that there is a toll for the current road segment.
     */
    isToll: boolean;
    constructor(number?: string | nothing, street?: string | nothing, city?: string | nothing, region?: string | nothing, province?: string | nothing, country?: string | nothing, postal?: string | nothing, isToll?: boolean | nothing);
    /**
     * Returns a text representation of this address.
     * Returned strings cannot be converted back into {@link StreetAddress}
     * objects, so don't use this for deserialization.
     */
    toString(): string;
    /**
     * Creates a literal of this {@link StreetAddress}.
     * Used internally by {@link JSON.stringify}.
     */
    toJSON(): IStreetAddress & JsonObject;
}
//# sourceMappingURL=StreetAddress.d.ts.map