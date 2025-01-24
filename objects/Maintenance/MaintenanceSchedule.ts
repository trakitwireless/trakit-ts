

	/**
	 * Recurring service work
	 */
	export class MaintenanceSchedule extends Component implements IIdUlong, INamed, IBelongCompany, IVisual, IDeletable {
		/**
		 * Unique identifier
		 */
		public id: ulong = NaN;
		/**
		 * The company to which this schedule belongs
		 * {@link Company.id}
		 */
		public company: ulong = NaN;
		/**
		 * The name of the work to be done.  Like "oil change".
		 *  <override max-length="100" />
		 */
		public name: string = "";
		/**
		 * Notes about the work to be done.  Like "change the oil and oil filter".
		 */
		public notes: string = "";
		/**
		 * The targeting expression to select which Vehicles and Trailers require this maintenance work.
		 */
		public targets: string = "";
		/**
		 * List of Users to send notifications.
		 *  <override>
		 *  <values format="email">
		 * {@link User.login}
		 *  </values>
		 *  </override>
		 */
		public notify: string[] = [];

		/**
		 * The fill/background colour of the icon.
		 *  <override max-length="22" format="colour" />
		 */
		public fill: string = "";
		/**
		 * Outline and graphic colour.
		 *  <override max-length="22" format="colour" />
		 */
		public stroke: string = "";
		/**
		 * The name of the symbol for this schedule.
		 *  <override max-length="22" format="codified" />
		 */
		public graphic: string = "";

		/**
		 * The number of days in advance to predict a job will become pending.
		 *  <override min-value="5" max-value="180" />
		 */
		public predictionDays: uint = NaN;
		/**
		 * The number of days between service visits.
		 */
		public recurDays: uint = NaN;
		/**
		 * The amount of mileage between service visits.
		 */
		public recurDistance: double = NaN;
		/**
		 * The number of operating hours between service visits.
		 */
		public recurEngineHours: double = NaN;
		/**
		 * The per-asset details calculated by the system to help predict the creation of Maintenance Jobs.
		 *  <override>
		 *  <keys>
		 * {@link Asset.id}
		 *  </keys>
		 *  </override>
		 */
		public intervals: Map<ulong, MaintenanceRecurrence>;

		// ------------ repair details ------------
		/**
		 * The name of the garage or service facility where the work is done.
		 *  <override max-length="100" />
		 */
		public garage: string = "";
		/**
		 * The estimated time for the job.
		 */
		public duration: TimeSpan;
		/**
		 * The estimated cost for the job cost in dollars.
		 */
		public cost: double = NaN;
		/**
		 * A reference code used to track this job
		 *  <override max-length="100" />
		 */
		public reference: string = "";

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