


	/**
	 * Full breakdown of licensing details per targeted provider.
	 */
	export class BillingReportLicenseBreakdown implements INamed {
		/**
		 * The provider to which this breakdown instance belongs.
		 * {@link Provider.id}
		 */
		public provider: string = "";
		/**
		 * Type of provider.
		 */
		public kind: ProviderType;
		/**
		 * Provider name.
		 *  <override max-length="100" />
		 */
		public name: string = "";
		/**
		 * Notes about the provider.
		 */
		public notes: string = "";
		/**
		 * Indicates when this Provider was created.
		 */
		public created: Date = DATE();
		/**
		 * Indicates when this Provider was deleted.
		 */
		public deleted: Date = DATE();
		/**
		 * The phone number for this provider.
		 */
		public phoneNumber: ulong = NaN;
		/**
		 * The firmware/application version number.
		 *  <override max-length="100" />
		 */
		public firmware: string = "";
		/**
		 * Number of days this Provider is being billed for.
		 */
		public billableDays: double = NaN;
		/**
		 * Licensing cost per billing cycle for this provider.
		 */
		public cost: double = NaN;
		/**
		 * Total amount being billed for this provider.
		 */
		public total: double = NaN;
	}