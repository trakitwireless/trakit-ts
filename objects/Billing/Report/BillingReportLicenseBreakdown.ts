


	/// <summary>
	/// Full breakdown of licensing details per targeted provider.
	/// </summary>
	export class BillingReportLicenseBreakdown implements INamed {
		/// <summary>
		/// The provider to which this breakdown instance belongs.
		/// </summary>
		/// <seealso cref="Provider.id" />
		public provider: string = "";
		/// <summary>
		/// Type of provider.
		/// </summary>
		public kind: ProviderType;
		/// <summary>
		/// Provider name.
		/// </summary>
		/// <override max-length="100" />
		public name: string = "";
		/// <summary>
		/// Notes about the provider.
		/// </summary>
		public notes: string = "";
		/// <summary>
		/// Indicates when this Provider was created.
		/// </summary>
		public created: Date = DATE();
		/// <summary>
		/// Indicates when this Provider was deleted.
		/// </summary>
		public deleted: Date = DATE();
		/// <summary>
		/// The phone number for this provider.
		/// </summary>
		public phoneNumber: ulong = NaN;
		/// <summary>
		/// The firmware/application version number.
		/// </summary>
		/// <override max-length="100" />
		public firmware: string = "";
		/// <summary>
		/// Number of days this Provider is being billed for.
		/// </summary>
		public billableDays: double = NaN;
		/// <summary>
		/// Licensing cost per billing cycle for this provider.
		/// </summary>
		public cost: double = NaN;
		/// <summary>
		/// Total amount being billed for this provider.
		/// </summary>
		public total: double = NaN;
	}