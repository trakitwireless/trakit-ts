import { IBelongCompany } from './IBelongCompany';

/// <summary>
/// An interface for objects that can be marked as "global".
/// "Global" objects can be listed in child companies.
/// </summary>
export interface IGlobal extends IBelongCompany {
	/// <summary>
	/// Indicates whether this icon is available to child companies.
	/// </summary>
	global: boolean;
}