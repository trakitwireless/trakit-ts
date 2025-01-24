
/**
 * An interface for objects that can be marked as "deleted".
 * "Deleted" objects can be restored, but are otherwise treated as "not there".
*/
export interface IDeletable {
	/**
	 * Marked as true for objects that have been deleted.
	 * This value is not present in the JSON scheme when <see cref="deleted"/> is false.
	 */
	deleted?: boolean;
	/**
	 * Timestamp from the action that deleted this object.
	 * This value is not present in the JSON scheme when <see cref="deleted"/> is false.
	 */
	since?: Date;
}