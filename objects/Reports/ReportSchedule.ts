

	/// <summary>
	/// Determines when and how often a report schedule runs automatically.
	/// </summary>
	export class ReportSchedule extends Component implements IIdUlong, INamed, IEnabled, IBelongCompany, IDeletable {
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
		/// A reference to the Template used to create this result.
		/// </summary>
		/// <seealso cref="ReportTemplate.id" />
		public template: ulong = NaN;
		/// <summary>
		/// Login of the user who has ownership of this report schedule.
		/// </summary>
		/// <seealso cref="User.login" />
		/// <override max-length="254" format="email" />
		public owner: string = "";
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
		/// Indicates whether this schedule is allowed to run.
		/// </summary>
		public enabled: boolean = false;
		/// <summary>
		/// The recurring schedule to generate report results.
		/// </summary>
		public repetition: ReportRecurrence;
		/// <summary>
		/// Specified parameters for the report logic, targeted Assets, and filtering Places.
		/// </summary>
		public options: ReportOptions;
		/// <summary>
		/// A list of users and a targeting expression for assets which receive report results notifications.
		/// </summary>
		public notify: ReportNotifications;

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