import { ulong } from '../Types';

/// <summary>
/// An interface for objects that belong to a single billing profile.
/// </summary>
export interface IBelongBillingProfile {
	/// <summary>
	/// The <see cref="BillingProfile"/> to which this object belongs.
	/// </summary>
	profile: ulong;
}