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
 * This class used in conjunction with the <see cref="version"/> member help with synchronization.
*/
export class IAuditableUpdated {
	/**
	 * The <see cref="User.login"/> or <see cref="Machine.key"/> when the object is updated,
	 * or <see cref="Service.UserAgent"/> if a service updates the object itself.
	 */
	by: string = "";
	/**
	 * A <see cref="Service.UserAgent"/> that handled the update.
	 */
	from: string = "";
	/**
	 * Timestamp from when the change was made.
	 */
	dts: Date = DATE();
}