
/**
 * An interface for objects that can be marked as "enabled".
 * "Enabled" objects remain in the system, but are inactive.
*/
export interface IEnabled {
	/**
	 * Marked as true for objects that have been deleted.
	 */
	enabled: boolean;
}