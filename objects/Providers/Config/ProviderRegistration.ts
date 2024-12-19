

	/// <summary>
	/// The temporary reference to a device whose ownership is pending.
	/// </summary>
	export class ProviderRegistration implements IRequestable implements INamed, IBelongCompany, IDeletable {
		/// <summary>
		/// A unique six digit code.
		/// </summary>
		/// <override length="6" />
		public code: string = "";
		/// <summary>
		/// The company to which the device will belong.
		/// </summary>
		/// <seealso cref="Company.id" />
		public company: ulong = NaN;
		/// <summary>
		/// A nickname given to the device once it has been provisioned.
		/// </summary>
		/// <override max-length="100" />
		public name: string = "";
		/// <summary>
		/// Notes!
		/// </summary>
		public notes: string = "";
		/// <summary>
		/// The password programmed on the device used to ensure the system is the only client authorized to make changes.
		/// </summary>
		/// <override max-length="50" />
		public password: string = "";
		/// <summary>
		/// The unique identifier the user who generated this registration.
		/// </summary>
		/// <seealso cref="User.login" />
		/// <override max-length="254" format="email" />
		public user: string = "";
		/// <summary>
		/// The predefined configuration this device will use.
		/// </summary>
		/// <seealso cref="ProviderConfig.id" />
		/// <seealso cref="ProviderConfiguration.id" />
		public config: ulong = NaN;
		/// <summary>
		/// The kind of protocol this device supports.
		/// </summary>
		public kind: ProviderType;
		/// <summary>
		/// Date/time stamp of when this registration began.
		/// </summary>
		public since: Date = DATE();
		/// <summary>
		/// Date/time stamp of when this registration ended successfully.
		/// </summary>
		public completed: Date = DATE();
		/// <summary>
		/// The expiry date for this registration.
		/// </summary>
		public expires: Date = DATE();
		/// <summary>
		/// The unique identifier of the device that completed this registration.
		/// </summary>
		/// <seealso cref="Provider.id" />
		/// <override max-length="50" />
		public identifier: string = "";
		/// <summary>
		/// The Asset for which this device will provide data.
		/// </summary>
		/// <seealso cref="Asset.id" />
		public asset: ulong = NaN;
		/// <summary>
		/// The phone number of the device being provisioned.
		/// This is set by the user for long-term registrations, or by the client during serial port setup.
		/// </summary>
		/// <override format="phone" />
		public phoneNumber: ulong = NaN;

		// IRequestable
		/// <summary>
		/// The <see cref="id"/> is the key.
		/// </summary>
		/// <returns></returns>
		public string GetKey() => this.code;

		// IDeletable
		/// <summary>
		/// Indicates whether this object was deleted.
		/// </summary>
		public boolean? deleted => this.expires < Date.UtcNow;
		/// <summary>
		/// Timestamp from the action that deleted or suspended this object.
		/// </summary>
		Date? IDeletable.since => this.since;
	}