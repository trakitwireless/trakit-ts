

	/// <summary>
	/// Report results
	/// </summary>
	export class ReportResult extends Component implements IIdUlong, INamed, IBelongCompany, IDeletable {
		/// <summary>
		/// Unique identifier
		/// </summary>
		public id: ulong = NaN;
		/// <summary>
		/// The company to which this report belongs
		/// </summary>
		/// <seealso cref="Company.id" />
		public company: ulong = NaN;
		/// <summary>
		/// Refers to the type of logic used by this report.
		/// </summary>
		public kind: ReportType;
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
		/// Specified parameters for the report logic, targeted Assets, and filtering Places.
		/// </summary>
		public options: ReportOptions;
		/// <summary>
		/// A reference to the Template used to create this result.  This field is optional because templates are not necessarily required; they just make life a lot easier.
		/// </summary>
		/// <seealso cref="ReportTemplate.id" />
		public template: ulong = NaN;
		/// <summary>
		/// A reference to the schedule used to create this result.
		/// This field is optional as not all results are created on a schedule.
		/// </summary>
		/// <seealso cref="ReportSchedule.id" />
		public schedule: ulong = NaN;
		/// <summary>
		/// Preserve these results for later review.  Results are regularly culled from the system.
		/// </summary>
		public archive: boolean = false;
		/// <summary>
		/// The timezone code used to adjust dates/times used in processing and saving this report.
		/// </summary>
		/// <seealso cref="Timezone.code" />
		public timezone: Timezone;
		/// <summary>
		/// The login of the user that ran this report.
		/// </summary>
		/// <seealso cref="User.login" />
		/// <override max-length="254" format="email" />
		public runBy: string = "";
		/// <summary>
		/// The date/time this result was requested.
		/// </summary>
		public created: Date = DATE();
		/// <summary>
		/// The date/time this result was finished processing.
		/// </summary>
		public completed: Date = DATE();
		/// <summary>
		/// The processing status of this report.
		/// </summary>
		public status: ReportStatus;
		/// <summary>
		/// The progress in processing/saving this result is a number between 0 and 100.
		/// </summary>
		public progress: byte = NaN;
		/// <summary>
		/// After processing, the boundary of the results are given so that a map can be focused on that area.
		/// </summary>
		public bounds: LatLngBounds;
		/// <summary>
		/// When the report runs, a list of targeted assets is calculated based on the ReportOption's targeting expression.
		/// </summary>
		public targeted: ulong[] = [];
		/// <summary>
		/// When the report runs, a list of filtered places is calculated based on the ReportOption's place filtering expression.
		/// </summary>
		public filtered: ulong[] = [];
		/// <summary>
		/// After processing, the report totals the values from all summary instances for a quick overview of the kind of results generated.
		/// </summary>
		public totals: ReportDataTotal[] = [];
		/// <summary>
		/// Scorecards for all the targeted assets based on the scorecard rules.
		/// </summary>
		public scorecards: ReportScorecard[] = [];
		/// <summary>
		/// A field which contains report error details if the <see cref="status"/> is <see cref="ReportStatus.failed"/>.
		/// </summary>
		/// <seealso cref="ReportStatus" />
		/// <override max-length="250" />
		public error: string = "";

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