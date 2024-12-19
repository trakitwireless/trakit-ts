import { ulong } from '../Types';

/// <summary>
/// An interface for objects that belong to a single company.
/// </summary>
export interface IBelongCompany {
	/// <summary>
	/// The <see cref="Company"/> to which this object belongs.
	/// </summary>
	company: ulong;
}