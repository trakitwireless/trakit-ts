


	/**
	 * Full breakdown of billable details per targeted asset.
	 */
	export class BillingReportServiceBreakdown implements INamed implements IBelongAsset {
		/**
		 * The asset to which this breakdown instance belongs.
		 * {@link Asset.id}
		 */
		public asset: ulong = NaN;
		/**
		 * Type of asset.
		 */
		public kind: AssetType;
		/**
		 * Asset's name.
		 *  <override max-length="100" />
		 */
		public name: string = "";
		/**
		 * Notes about the asset.
		 */
		public notes: string = "";
		/**
		 * Indicates when this Asset was created.
		 */
		public created: Date = DATE();
		/**
		 * Indicates when this Asset was deleted.
		 */
		public deleted: Date = DATE();
		/**
		 * Indicates when this Asset wass suspended from event processing.
		 */
		public suspended: Date = DATE();
		/**
		 * Indicates when this Asset was restored after being deleted.
		 */
		public restored: Date = DATE();
		/**
		 * Indicates when this Asset was revived after being suspended.
		 */
		public revived: Date = DATE();
		/**
		 * Codified label names.
		 * {@link LabelStyle.code}
		 *  <override>
		 *  <values format="codified">
		 * {@link LabelStyle.code}
		 *  </values>
		 *  </override>
		 */
		public labels: string[] = [];
		/**
		 * The list of devices providing events for this asset.
		 * {@link Provider.id}
		 */
		public providers: string[] = [];
		/**
		 * The list of phone numbers for this asset.
		 *  <override>
		 *  <values format="phone" />
		 *  </override>
		 */
		public phoneNumbers: ulong[] = [];
		/**
		 * Indicates when this Asset was last updated.
		 */
		public updatedDts: Date = DATE();
		/**
		 * Number of days this Asset is being billed for.
		 */
		public billableDays: double = NaN;
		/**
		 * Cost per billing cycle for this asset.
		 */
		public cost: double = NaN;
		/**
		 * Number of days this Asset was suspended.
		 */
		public suspendedDays: double = NaN;
		/**
		 * Cost per billing cycle for suspended asset.
		 */
		public suspendedCost: double = NaN;
		/**
		 * Total amount being billed for this asset.
		 */
		public total: double = NaN;
	}