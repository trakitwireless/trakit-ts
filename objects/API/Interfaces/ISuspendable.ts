

/// <summary>
/// An interface for objects that can be marked as "suspended".
/// "Suspended" objects can be "revived", but are otherwise treated as "achived" or "inert" (events are not processed).
/// </summary>
export interface ISuspendable {
	/// <summary>
	/// Marked as true for objects that have been suspended.
	/// This value is not present in the JSON scheme when <see cref="deleted"/> is false.
	/// </summary>
	suspended?: boolean;
	/// <summary>
	/// A timestamp from when the object was most recently suspended or revived.
	/// This value is not present in the JSON scheme when <see cref="suspended"/> is false.
	/// </summary>
	since?: Date;
}