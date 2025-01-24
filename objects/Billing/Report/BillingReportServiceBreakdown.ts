


	/**
	 * Full breakdown of billable details per targeted asset.
	 */
	export class BillingReportServiceBreakdown implements INamed implements IBelongAsset {
		/**
		 * The asset to which this breakdown instance belongs.
		 * {@link Asset.id}
		 */
		asset: ulong = NaN;
		/**
		 * Type of asset.
		 */
		kind: AssetType;
		/**
		 * Asset's name.
		 *  <override max-length="100" />
		 */
		name: string = "";
		/**
		 * Notes about the asset.
		 */
		notes: string = "";
		/**
		 * Indicates when this Asset was created.
		 */
		created: Date = DATE();
		/**
		 * Indicates when this Asset was deleted.
		 */
		deleted: Date = DATE();
		/**
		 * Indicates when this Asset wass suspended from event processing.
		 */
		suspended: Date = DATE();
		/**
		 * Indicates when this Asset was restored after being deleted.
		 */
		restored: Date = DATE();
		/**
		 * Indicates when this Asset was revived after being suspended.
		 */
		revived: Date = DATE();
		/**
		 * Codified label names.
		 * {@link LabelStyle.code}
		 *  <override>
		 *  <values format="codified">
		 * {@link LabelStyle.code}
		 *  </values>
		 *  </override>
		 */
		labels: string[] = [];
		/**
		 * The list of devices providing events for this asset.
		 * {@link Provider.id}
		 */
		providers: string[] = [];
		/**
		 * The list of phone numbers for this asset.
		 *  <override>
		 *  <values format="phone" />
		 *  </override>
		 */
		phoneNumbers: ulong[] = [];
		/**
		 * Indicates when this Asset was last updated.
		 */
		updatedDts: Date = DATE();
		/**
		 * Number of days this Asset is being billed for.
		 */
		billableDays: double = NaN;
		/**
		 * Cost per billing cycle for this asset.
		 */
		cost: double = NaN;
		/**
		 * Number of days this Asset was suspended.
		 */
		suspendedDays: double = NaN;
		/**
		 * Cost per billing cycle for suspended asset.
		 */
		suspendedCost: double = NaN;
		/**
		 * Total amount being billed for this asset.
		 */
		total: double = NaN;
	}