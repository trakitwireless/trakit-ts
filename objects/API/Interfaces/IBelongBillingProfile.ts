import { BillingProfile } from "../../Billing/BillingProfile";
import { ulong } from "../Types";

/**
 * An interface for objects that belong to a single billing profile.
*/
export interface IBelongBillingProfile {
	/**
	 * The {@link BillingProfile} to which this object belongs.
	 */
	get profileId(): ulong;
	/**
	 * The {@link BillingProfile} to which this object belongs.
	 */
	readonly profile: BillingProfile;
}