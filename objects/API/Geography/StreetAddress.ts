
/// <summary>
/// A road segment description
/// </summary>
export class StreetAddress {
	/// <summary>
	/// House number.
	/// </summary>
	public number: string = "";
	/// <summary>
	/// Full street name.
	/// </summary>
	public street: string = "";
	/// <summary>
	/// City name.
	/// </summary>
	public city: string = "";
	/// <summary>
	/// Region name.
	/// </summary>
	public region: string = "";
	/// <summary>
	/// Province or state code.
	/// Codes should be a value from ISO 3166-2.
	/// </summary>
	/// <override length="2" />
	public province: string = "";
	/// <summary>
	/// Country code.
	/// Codes should be a value from ISO 3166-1 alpha-2.
	/// </summary>
	/// <override length="2" />
	public country: string = "";
	/// <summary>
	/// Postal or zip code.
	/// </summary>
	public postal: string = "";
	/// <summary>
	/// Indicates that there is a toll for the current road segment.
	/// </summary>
	public isToll: boolean = false;

	/// <summary>
	/// Returns a text representation of this address.
	/// </summary>
	/// <remarks>
	/// Returned strings cannot be converted back into StreetAddress objects, so don't use this for deserialization.
	/// </remarks>
	public toString(): string {
		var address = [];
		if (this.street) address.push((this.number ? this.number + " " : "") + this.street);
		if (this.city) address.push(this.city);
		if (this.region) address.push(this.region);
		if (this.province) address.push(this.province);
		if (this.country) address.push(this.country);
		if (this.postal) address.push(this.postal);
		return address.join(", ");
	}
}