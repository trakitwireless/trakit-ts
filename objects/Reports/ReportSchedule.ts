

	/**
	 * Determines when and how often a report schedule runs automatically.
	 */
	export class ReportSchedule extends Component implements IIdUlong, INamed, IEnabled, IBelongCompany, IDeletable {
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
		 * A reference to the Template used to create this result.
		 * {@link ReportTemplate.id}
		 */
		template: ulong = NaN;
		/**
		 * Login of the user who has ownership of this report schedule.
		 * {@link User.login}
		 *  <override max-length="254" format="email" />
		 */
		owner: string = "";
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
		 * Indicates whether this schedule is allowed to run.
		 */
		enabled: boolean = false;
		/**
		 * The recurring schedule to generate report results.
		 */
		repetition: ReportRecurrence;
		/**
		 * Specified parameters for the report logic, targeted Assets, and filtering Places.
		 */
		options: ReportOptions;
		/**
		 * A list of users and a targeting expression for assets which receive report results notifications.
		 */
		notify: ReportNotifications;

		// IRequestable
		/**
		 * The {@link id} is the key.
		 */
public getKey(): string { return this.id.toString(); }

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