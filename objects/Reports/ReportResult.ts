

	/**
	 * Report results
	 */
	export class ReportResult extends Component implements IIdUlong, INamed, IBelongCompany, IDeletable {
		/**
		 * Unique identifier
		 */
		id: ulong = NaN;
		/**
		 * The company to which this report belongs
		 * {@link Company.id}
		 */
		company: ulong = NaN;
		/**
		 * Refers to the type of logic used by this report.
		 */
		kind: ReportType;
		/**
		 * Name of this report.
		 *  <override max-length="100" />
		 */
		name: string = "";
		/**
		 * Notes about this report.
		 */
		notes: string = "";
		/**
		 * Specified parameters for the report logic, targeted Assets, and filtering Places.
		 */
		options: ReportOptions;
		/**
		 * A reference to the Template used to create this result.  This field is optional because templates are not necessarily required; they just make life a lot easier.
		 * {@link ReportTemplate.id}
		 */
		template: ulong = NaN;
		/**
		 * A reference to the schedule used to create this result.
		 * This field is optional as not all results are created on a schedule.
		 * {@link ReportSchedule.id}
		 */
		schedule: ulong = NaN;
		/**
		 * Preserve these results for later review.  Results are regularly culled from the system.
		 */
		archive: boolean = false;
		/**
		 * The timezone code used to adjust dates/times used in processing and saving this report.
		 * {@link Timezone.code}
		 */
		timezone: Timezone;
		/**
		 * The login of the user that ran this report.
		 * {@link User.login}
		 *  <override max-length="254" format="email" />
		 */
		runBy: string = "";
		/**
		 * The date/time this result was requested.
		 */
		created: Date = DATE();
		/**
		 * The date/time this result was finished processing.
		 */
		completed: Date = DATE();
		/**
		 * The processing status of this report.
		 */
		status: ReportStatus;
		/**
		 * The progress in processing/saving this result is a number between 0 and 100.
		 */
		progress: byte = NaN;
		/**
		 * After processing, the boundary of the results are given so that a map can be focused on that area.
		 */
		bounds: LatLngBounds;
		/**
		 * When the report runs, a list of targeted assets is calculated based on the ReportOption's targeting expression.
		 */
		targeted: ulong[] = [];
		/**
		 * When the report runs, a list of filtered places is calculated based on the ReportOption's place filtering expression.
		 */
		filtered: ulong[] = [];
		/**
		 * After processing, the report totals the values from all summary instances for a quick overview of the kind of results generated.
		 */
		totals: ReportDataTotal[] = [];
		/**
		 * Scorecards for all the targeted assets based on the scorecard rules.
		 */
		scorecards: ReportScorecard[] = [];
		/**
		 * A field which contains report error details if the {@link status} is {@link ReportStatus.failed}.
		 * {@link ReportStatus}
		 *  <override max-length="250" />
		 */
		error: string = "";

		// IRequestable
		/**
		 * The {@link id} is the key.
		 */
getKey(): string { return this.id.toString(); }

		// IDeletable
		/**
		 * Indicates whether this object was deleted.
		 */
		deleted: boolean = false;
		/**
		 * Timestamp from the action that deleted or suspended this object.
		 */
		since: Date = DATE();
	}