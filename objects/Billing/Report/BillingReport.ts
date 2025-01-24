

	/**
	 * Report generated per billee company.
	 */
	export class BillingReport extends Component implements IIdUlong, INamed, IBelongCompany, IBelongBillingProfile, IDeletable {
		/**
		 * Unique identifier
		 */
		public id: ulong = NaN;
		/**
		 * The company to which this report belongs and is sending the bill.
		 * {@link Company.id}
		 */
		public company: ulong = NaN;
		/**
		 * Unique identifier of the Company receiving the bill.
		 * {@link Company.id}
		 */
		public billee: ulong = NaN;
		/**
		 * The profile to which this report belongs
		 * {@link BillingProfile.id}
		 */
		public profile: ulong = NaN;
		/**
		 * Name of this report.
		 *  <override max-length="100" />
		 */
		public name: string = "";
		/**
		 * Notes about this report.
		 */
		public notes: string = "";
		/**
		 * First day of the billing cycle
		 */
		public startDate: Date = DATE();
		/**
		 * Last day of the billing cycle
		 */
		public endDate: Date = DATE();
		/**
		 * Total amount being billed.
		 */
		public total: double = NaN;
		/**
		 * Currency being billed in
		 */
		public currency: BillingCurrency;
		/**
		 * The processing status of this report.
		 */
		public status: BillingReportStatus;
		/**
		 * A field which contains report error details if the <see cref="status"/> is <see cref="BillingReportStatus.failed"/>.
		 * {@link BillingReportStatus}
		 *  <override max-length="250" />
		 */
		public error: string = "";
		/**
		 * Summary contains totals per target for this billee
		 */
		public summary: BillingReportSummary[] = [];
		/**
		 * Individual amounts per company, used to calculate the results of the report.
		 */
		public breakdown: BillingReportBreakdown[] = [];

		// IRequestable
		/**
		 * The <see cref="id"/> is the key.
		 */
public getKey(): string { return this.id.toString(); }

		// IDeletable
		/**
		 * Indicates whether this object was deleted.
		 */
		public deleted: boolean = false;
		/**
		 * Timestamp from the action that deleted or suspended this object.
		 */
		public since: Date = DATE();
	}