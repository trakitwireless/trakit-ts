

	/// <summary>
	/// Recurring service work
	/// </summary>
	export class MaintenanceSchedule extends Component implements IIdUlong, INamed, IBelongCompany, IVisual, IDeletable {
		/// <summary>
		/// Unique identifier
		/// </summary>
		public id: ulong = NaN;
		/// <summary>
		/// The company to which this schedule belongs
		/// </summary>
		/// <seealso cref="Company.id" />
		public company: ulong = NaN;
		/// <summary>
		/// The name of the work to be done.  Like "oil change".
		/// </summary>
		/// <override max-length="100" />
		public name: string = "";
		/// <summary>
		/// Notes about the work to be done.  Like "change the oil and oil filter".
		/// </summary>
		public notes: string = "";
		/// <summary>
		/// The targeting expression to select which Vehicles and Trailers require this maintenance work.
		/// </summary>
		public targets: string = "";
		/// <summary>
		/// List of Users to send notifications.
		/// </summary>
		/// <override>
		/// <values format="email">
		/// <seealso cref="User.login" />
		/// </values>
		/// </override>
		public notify: string[] = [];

		/// <summary>
		/// The fill/background colour of the icon.
		/// </summary>
		/// <override max-length="22" format="colour" />
		public fill: string = "";
		/// <summary>
		/// Outline and graphic colour.
		/// </summary>
		/// <override max-length="22" format="colour" />
		public stroke: string = "";
		/// <summary>
		/// The name of the symbol for this schedule.
		/// </summary>
		/// <override max-length="22" format="codified" />
		public graphic: string = "";

		/// <summary>
		/// The number of days in advance to predict a job will become pending.
		/// </summary>
		/// <override min-value="5" max-value="180" />
		public predictionDays: uint = NaN;
		/// <summary>
		/// The number of days between service visits.
		/// </summary>
		public recurDays: uint = NaN;
		/// <summary>
		/// The amount of mileage between service visits.
		/// </summary>
		public recurDistance: double = NaN;
		/// <summary>
		/// The number of operating hours between service visits.
		/// </summary>
		public recurEngineHours: double = NaN;
		/// <summary>
		/// The per-asset details calculated by the system to help predict the creation of Maintenance Jobs.
		/// </summary>
		/// <override>
		/// <keys>
		/// <seealso cref="Asset.id" />
		/// </keys>
		/// </override>
		public intervals: Map<ulong, MaintenanceRecurrence>;

		// ------------ repair details ------------
		/// <summary>
		/// The name of the garage or service facility where the work is done.
		/// </summary>
		/// <override max-length="100" />
		public garage: string = "";
		/// <summary>
		/// The estimated time for the job.
		/// </summary>
		public duration: TimeSpan;
		/// <summary>
		/// The estimated cost for the job cost in dollars.
		/// </summary>
		public cost: double = NaN;
		/// <summary>
		/// A reference code used to track this job
		/// </summary>
		/// <override max-length="100" />
		public reference: string = "";

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