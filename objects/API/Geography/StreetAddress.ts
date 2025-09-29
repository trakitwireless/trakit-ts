import { ISerializable } from "../Interfaces/ISerializable";
import { JsonObject, nothing } from "../Types";
import { IStreetAddress, } from "./Interfaces";

/**
 * A road segment description
*/
export class StreetAddress
	implements IStreetAddress, ISerializable {
	/**
	 * 
	 * @param street 
	 */
	static fromJSON(json: JsonObject): StreetAddress {
		return new StreetAddress(
			json["number"] as string,
			json["street"] as string,
			json["city"] as string,
			json["region"] as string,
			json["province"] as string,
			json["country"] as string,
			json["postal"] as string,
			json["isToll"] as boolean,
		);
	}

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

	constructor(
		number?: string | nothing,
		street?: string | nothing,
		city?: string | nothing,
		region?: string | nothing,
		province?: string | nothing,
		country?: string | nothing,
		postal?: string | nothing,
		isToll?: boolean | nothing,
	) {
		this.number = String(number ?? "").trim();
		this.street = String(street ?? "").trim();
		this.city = String(city ?? "").trim();
		this.region = String(region ?? "").trim();
		this.province = String(province ?? "").trim();
		this.country = String(country ?? "").trim();
		this.postal = String(postal ?? "").trim();
		this.isToll = !!isToll;
	}

	/**
	 * Returns a text representation of this address.
	 * Returned strings cannot be converted back into {@link StreetAddress}
	 * objects, so don't use this for deserialization.
	 */
	toString(): string {
		var address: string[] = [];
		if (this.street) address.push((this.number ? this.number + " " : "") + this.street);
		if (this.city) address.push(this.city);
		if (this.region) address.push(this.region);
		if (this.province) address.push(this.province);
		if (this.country) address.push(this.country);
		if (this.postal) address.push(this.postal);
		return address.join(", ");
	}
	/**
	 * Creates a literal of this {@link StreetAddress}.
	 * Used internally by {@link JSON.stringify}.
	 */
	toJSON(): IStreetAddress {
		return {
			"number": this.number,
			"street": this.street,
			"city": this.city,
			"region": this.region,
			"province": this.province,
			"country": this.country,
			"postal": this.postal,
			"isToll": this.isToll,
		}
	}
}