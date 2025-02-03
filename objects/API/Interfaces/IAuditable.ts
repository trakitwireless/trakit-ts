import { DATE } from '../Functions';

/**
 * For auditable objects, a record of who and what mad the changes.
*/
export interface IAuditable {
	/**
	 * Details about the change to an object.
	 */
	updated: IAuditableUpdated;
	/**
	 * When the was change procesed.
	 */
	processedUtc: Date;
}
/**
 * This class used in conjunction with the {@link version} member help with synchronization.
*/
export class IAuditableUpdated {
	/**
	 * The {@link User.login} or {@link Machine.key} when the object is updated,
	 * or {@link Service.UserAgent} if a service updates the object itself.
	 */
	by: string = "";
	/**
	 * A {@link Service.UserAgent} that handled the update.
	 */
	from: string = "";
	/**
	 * Timestamp from when the change was made.
	 */
	dts: Date = DATE();
}