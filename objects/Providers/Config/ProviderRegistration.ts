

	/**
	 * The temporary reference to a device whose ownership is pending.
	 */
	export class ProviderRegistration implements IRequestable implements INamed, IBelongCompany, IDeletable {
		/**
		 * A unique six digit code.
		 *  <override length="6" />
		 */
		code: string = "";
		/**
		 * The company to which the device will belong.
		 * {@link Company.id}
		 */
		company: ulong = NaN;
		/**
		 * A nickname given to the device once it has been provisioned.
		 *  <override max-length="100" />
		 */
		name: string = "";
		/**
		 * Notes!
		 */
		notes: string = "";
		/**
		 * The password programmed on the device used to ensure the system is the only client authorized to make changes.
		 *  <override max-length="50" />
		 */
		password: string = "";
		/**
		 * The unique identifier the user who generated this registration.
		 * {@link User.login}
		 *  <override max-length="254" format="email" />
		 */
		user: string = "";
		/**
		 * The predefined configuration this device will use.
		 * {@link ProviderConfig.id}
		 * {@link ProviderConfiguration.id}
		 */
		config: ulong = NaN;
		/**
		 * The kind of protocol this device supports.
		 */
		kind: ProviderType;
		/**
		 * Date/time stamp of when this registration began.
		 */
		since: Date = DATE();
		/**
		 * Date/time stamp of when this registration ended successfully.
		 */
		completed: Date = DATE();
		/**
		 * The expiry date for this registration.
		 */
		expires: Date = DATE();
		/**
		 * The unique identifier of the device that completed this registration.
		 * {@link Provider.id}
		 *  <override max-length="50" />
		 */
		identifier: string = "";
		/**
		 * The Asset for which this device will provide data.
		 * {@link Asset.id}
		 */
		asset: ulong = NaN;
		/**
		 * The phone number of the device being provisioned.
		 * This is set by the user for long-term registrations, or by the client during serial port setup.
		 *  <override format="phone" />
		 */
		phoneNumber: ulong = NaN;

		// IRequestable
		/**
		 * The {@link id} is the key.
		 */
public string GetKey() => this.code;

		// IDeletable
		/**
		 * Indicates whether this object was deleted.
		 */
		boolean? deleted => this.expires < Date.UtcNow;
		/**
		 * Timestamp from the action that deleted or suspended this object.
		 */
		Date? IDeletable.since => this.since;
	}