
/**
 * A road segment description
*/
export class StreetAddress {
	/**
	 * House number.
	 */
	public number: string = "";
	/**
	 * Full street name.
	 */
	public street: string = "";
	/**
	 * City name.
	 */
	public city: string = "";
	/**
	 * Region name.
	 */
	public region: string = "";
	/**
	 * Province or state code.
	 * Codes should be a value from ISO 3166-2.
	 */
	public province: string = "";
	/**
	 * Country code.
	 * Codes should be a value from ISO 3166-1 alpha-2.
	 */
	public country: string = "";
	/**
	 * Postal or zip code.
	 */
	public postal: string = "";
	/**
	 * Indicates that there is a toll for the current road segment.
	 */
	public isToll: boolean = false;

	/**
	 * Returns a text representation of this address.
	 * Returned strings cannot be converted back into StreetAddress objects, so don't use this for deserialization.
	 */
	public toString(): string {
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