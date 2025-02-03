

/**
 * An interface for objects that can be marked as "suspended".
 * "Suspended" objects can be "revived", but are otherwise treated as "achived" or "inert" (events are not processed).
*/
export interface ISuspendable {
	/**
	 * Marked as true for objects that have been suspended.
	 * This value is not present in the JSON scheme when {@link deleted} is false.
	 */
	suspended?: boolean;
	/**
	 * A timestamp from when the object was most recently suspended or revived.
	 * This value is not present in the JSON scheme when {@link suspended} is false.
	 */
	since?: Date;
}