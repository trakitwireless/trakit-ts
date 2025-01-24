

	/**
	 * The temporary reference to a device whose ownership is pending.
	 */
	export class ProviderRegistration implements IRequestable implements INamed, IBelongCompany, IDeletable {
		/**
		 * A unique six digit code.
		 *  <override length="6" />
		 */
		public code: string = "";
		/**
		 * The company to which the device will belong.
		 * {@link Company.id}
		 */
		public company: ulong = NaN;
		/**
		 * A nickname given to the device once it has been provisioned.
		 *  <override max-length="100" />
		 */
		public name: string = "";
		/**
		 * Notes!
		 */
		public notes: string = "";
		/**
		 * The password programmed on the device used to ensure the system is the only client authorized to make changes.
		 *  <override max-length="50" />
		 */
		public password: string = "";
		/**
		 * The unique identifier the user who generated this registration.
		 * {@link User.login}
		 *  <override max-length="254" format="email" />
		 */
		public user: string = "";
		/**
		 * The predefined configuration this device will use.
		 * {@link ProviderConfig.id}
		 * {@link ProviderConfiguration.id}
		 */
		public config: ulong = NaN;
		/**
		 * The kind of protocol this device supports.
		 */
		public kind: ProviderType;
		/**
		 * Date/time stamp of when this registration began.
		 */
		public since: Date = DATE();
		/**
		 * Date/time stamp of when this registration ended successfully.
		 */
		public completed: Date = DATE();
		/**
		 * The expiry date for this registration.
		 */
		public expires: Date = DATE();
		/**
		 * The unique identifier of the device that completed this registration.
		 * {@link Provider.id}
		 *  <override max-length="50" />
		 */
		public identifier: string = "";
		/**
		 * The Asset for which this device will provide data.
		 * {@link Asset.id}
		 */
		public asset: ulong = NaN;
		/**
		 * The phone number of the device being provisioned.
		 * This is set by the user for long-term registrations, or by the client during serial port setup.
		 *  <override format="phone" />
		 */
		public phoneNumber: ulong = NaN;

		// IRequestable
		/**
		 * The <see cref="id"/> is the key.
		 */
public string GetKey() => this.code;

		// IDeletable
		/**
		 * Indicates whether this object was deleted.
		 */
		public boolean? deleted => this.expires < Date.UtcNow;
		/**
		 * Timestamp from the action that deleted or suspended this object.
		 */
		Date? IDeletable.since => this.since;
	}