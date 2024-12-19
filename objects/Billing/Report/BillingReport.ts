

	/// <summary>
	/// Report generated per billee company.
	/// </summary>
	export class BillingReport extends Component implements IIdUlong, INamed, IBelongCompany, IBelongBillingProfile, IDeletable {
		/// <summary>
		/// Unique identifier
		/// </summary>
		public id: ulong = NaN;
		/// <summary>
		/// The company to which this report belongs and is sending the bill.
		/// </summary>
		/// <seealso cref="Company.id" />
		public company: ulong = NaN;
		/// <summary>
		/// Unique identifier of the Company receiving the bill.
		/// </summary>
		/// <seealso cref="Company.id" />
		public billee: ulong = NaN;
		/// <summary>
		/// The profile to which this report belongs
		/// </summary>
		/// <seealso cref="BillingProfile.id" />
		public profile: ulong = NaN;
		/// <summary>
		/// Name of this report.
		/// </summary>
		/// <override max-length="100" />
		public name: string = "";
		/// <summary>
		/// Notes about this report.
		/// </summary>
		public notes: string = "";
		/// <summary>
		/// First day of the billing cycle
		/// </summary>
		public startDate: Date = DATE();
		/// <summary>
		/// Last day of the billing cycle
		/// </summary>
		public endDate: Date = DATE();
		/// <summary>
		/// Total amount being billed.
		/// </summary>
		public total: double = NaN;
		/// <summary>
		/// Currency being billed in
		/// </summary>
		public currency: BillingCurrency;
		/// <summary>
		/// The processing status of this report.
		/// </summary>
		public status: BillingReportStatus;
		/// <summary>
		/// A field which contains report error details if the <see cref="status"/> is <see cref="BillingReportStatus.failed"/>.
		/// </summary>
		/// <seealso cref="BillingReportStatus" />
		/// <override max-length="250" />
		public error: string = "";
		/// <summary>
		/// Summary contains totals per target for this billee
		/// </summary>
		public summary: BillingReportSummary[] = [];
		/// <summary>
		/// Individual amounts per company, used to calculate the results of the report.
		/// </summary>
		public breakdown: BillingReportBreakdown[] = [];

		// IRequestable
		/// <summary>
		/// The <see cref="id"/> is the key.
		/// </summary>
		/// <returns></returns>
		public getKey(): string { return this.id.toString(); }

		// IDeletable
		/// <summary>
		/// Indicates whether this object was deleted.
		/// </summary>
		public deleted: boolean = false;
		/// <summary>
		/// Timestamp from the action that deleted or suspended this object.
		/// </summary>
		public since: Date = DATE();
	}