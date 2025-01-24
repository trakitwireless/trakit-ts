


	/**
	 * Full breakdown of licensing details per targeted provider.
	 */
	export class BillingReportLicenseBreakdown implements INamed {
		/**
		 * The provider to which this breakdown instance belongs.
		 * {@link Provider.id}
		 */
		provider: string = "";
		/**
		 * Type of provider.
		 */
		kind: ProviderType;
		/**
		 * Provider name.
		 *  <override max-length="100" />
		 */
		name: string = "";
		/**
		 * Notes about the provider.
		 */
		notes: string = "";
		/**
		 * Indicates when this Provider was created.
		 */
		created: Date = DATE();
		/**
		 * Indicates when this Provider was deleted.
		 */
		deleted: Date = DATE();
		/**
		 * The phone number for this provider.
		 */
		phoneNumber: ulong = NaN;
		/**
		 * The firmware/application version number.
		 *  <override max-length="100" />
		 */
		firmware: string = "";
		/**
		 * Number of days this Provider is being billed for.
		 */
		billableDays: double = NaN;
		/**
		 * Licensing cost per billing cycle for this provider.
		 */
		cost: double = NaN;
		/**
		 * Total amount being billed for this provider.
		 */
		total: double = NaN;
	}