/**
 * An interface for objects that belong to a single billing profile.
*/
export interface IBelongBillingProfile {
	/**
	 * The {@link BillingProfile} to which this object belongs.
	 */
	profile: number;
}