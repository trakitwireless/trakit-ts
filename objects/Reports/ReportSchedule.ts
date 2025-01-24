

	/**
	 * Determines when and how often a report schedule runs automatically.
	 */
	export class ReportSchedule extends Component implements IIdUlong, INamed, IEnabled, IBelongCompany, IDeletable {
		/**
		 * Unique identifier
		 */
		public id: ulong = NaN;
		/**
		 * The company to which this report belongs
		 * {@link Company.id}
		 */
		public company: ulong = NaN;
		/**
		 * A reference to the Template used to create this result.
		 * {@link ReportTemplate.id}
		 */
		public template: ulong = NaN;
		/**
		 * Login of the user who has ownership of this report schedule.
		 * {@link User.login}
		 *  <override max-length="254" format="email" />
		 */
		public owner: string = "";
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
		 * Indicates whether this schedule is allowed to run.
		 */
		public enabled: boolean = false;
		/**
		 * The recurring schedule to generate report results.
		 */
		public repetition: ReportRecurrence;
		/**
		 * Specified parameters for the report logic, targeted Assets, and filtering Places.
		 */
		public options: ReportOptions;
		/**
		 * A list of users and a targeting expression for assets which receive report results notifications.
		 */
		public notify: ReportNotifications;

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