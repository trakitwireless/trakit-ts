/**
 * An interface for objects that belong to a single billing profile.
*/
export interface IBelongBillingProfile {
	/**
	 * The <see cref="BillingProfile"/> to which this object belongs.
	 */
	profile: number;
}