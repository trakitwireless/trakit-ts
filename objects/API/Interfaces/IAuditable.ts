import { DATE } from '../Functions';

/// <summary>
/// For auditable objects, a record of who and what mad the changes.
/// </summary>
export interface IAuditable {
	/// <summary>
	/// Details about the change to an object.
	/// </summary>
	updated: IAuditableUpdated;
	/// <summary>
	/// When the was change procesed.
	/// </summary>
	processedUtc: Date;
}
/// <summary>
/// This class used in conjunction with the <see cref="version"/> member help with synchronization.
/// </summary>
export class IAuditableUpdated {
	/// <summary>
	/// The <see cref="User.login"/> or <see cref="Machine.key"/> when the object is updated,
	/// or <see cref="Service.UserAgent"/> if a service updates the object itself.
	/// </summary>
	/// <seealso cref="User.login" />
	public by: string = "";
	/// <summary>
	/// A <see cref="Service.UserAgent"/> that handled the update.
	/// </summary>
	public from: string = "";
	/// <summary>
	/// Timestamp from when the change was made.
	/// </summary>
	public dts: Date = DATE();
}