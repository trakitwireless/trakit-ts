
/// <summary>
/// An interface for objects that can be marked as "enabled".
/// "Enabled" objects remain in the system, but are inactive.
/// </summary>
export interface IEnabled {
	/// <summary>
	/// Marked as true for objects that have been deleted.
	/// </summary>
	enabled: boolean;
}