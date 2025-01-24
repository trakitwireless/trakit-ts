
/**
 * A road segment description
*/
export class StreetAddress {
	/**
	 * House number.
	 */
	number: string = "";
	/**
	 * Full street name.
	 */
	street: string = "";
	/**
	 * City name.
	 */
	city: string = "";
	/**
	 * Region name.
	 */
	region: string = "";
	/**
	 * Province or state code.
	 * Codes should be a value from ISO 3166-2.
	 */
	province: string = "";
	/**
	 * Country code.
	 * Codes should be a value from ISO 3166-1 alpha-2.
	 */
	country: string = "";
	/**
	 * Postal or zip code.
	 */
	postal: string = "";
	/**
	 * Indicates that there is a toll for the current road segment.
	 */
	isToll: boolean = false;

	/**
	 * Returns a text representation of this address.
	 * Returned strings cannot be converted back into StreetAddress objects, so don't use this for deserialization.
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
}