import { ISerializable } from "../Interfaces/ISerializable";
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
	static fromJSON(address: any): StreetAddress {
		return new StreetAddress(
			address["number"],
			address["street"],
			address["city"],
			address["region"],
			address["province"],
			address["country"],
			address["postal"],
			address["isToll"] || false
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
		number: string | null,
		street: string | null,
		city: string | null,
		region: string | null,
		province: string,
		country: string,
		postal: string | null,
		isToll: boolean = false
	) {
		this.number = number?.trim() ?? "";
		this.street = street?.trim() ?? "";
		this.city = city?.trim() ?? "";
		this.region = region?.trim() ?? "";
		this.province = province?.trim() ?? "";
		this.country = country?.trim() ?? "";
		this.postal = postal?.trim() ?? "";
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