

	/**
	 * Recurring service work
	 */
	export class MaintenanceSchedule extends Component implements IIdUlong, INamed, IBelongCompany, IVisual, IDeletable {
		/**
		 * Unique identifier
		 */
		id: ulong = NaN;
		/**
		 * The company to which this schedule belongs
		 * {@link Company.id}
		 */
		company: ulong = NaN;
		/**
		 * The name of the work to be done.  Like "oil change".
		 *  <override max-length="100" />
		 */
		name: string = "";
		/**
		 * Notes about the work to be done.  Like "change the oil and oil filter".
		 */
		notes: string = "";
		/**
		 * The targeting expression to select which Vehicles and Trailers require this maintenance work.
		 */
		targets: string = "";
		/**
		 * List of Users to send notifications.
		 *  <override>
		 *  <values format="email">
		 * {@link User.login}
		 *  </values>
		 *  </override>
		 */
		notify: string[] = [];

		/**
		 * The fill/background colour of the icon.
		 *  <override max-length="22" format="colour" />
		 */
		fill: string = "";
		/**
		 * Outline and graphic colour.
		 *  <override max-length="22" format="colour" />
		 */
		stroke: string = "";
		/**
		 * The name of the symbol for this schedule.
		 *  <override max-length="22" format="codified" />
		 */
		graphic: string = "";

		/**
		 * The number of days in advance to predict a job will become pending.
		 *  <override min-value="5" max-value="180" />
		 */
		predictionDays: uint = NaN;
		/**
		 * The number of days between service visits.
		 */
		recurDays: uint = NaN;
		/**
		 * The amount of mileage between service visits.
		 */
		recurDistance: double = NaN;
		/**
		 * The number of operating hours between service visits.
		 */
		recurEngineHours: double = NaN;
		/**
		 * The per-asset details calculated by the system to help predict the creation of Maintenance Jobs.
		 *  <override>
		 *  <keys>
		 * {@link Asset.id}
		 *  </keys>
		 *  </override>
		 */
		intervals: Map<ulong, MaintenanceRecurrence>;

		// ------------ repair details ------------
		/**
		 * The name of the garage or service facility where the work is done.
		 *  <override max-length="100" />
		 */
		garage: string = "";
		/**
		 * The estimated time for the job.
		 */
		duration: TimeSpan;
		/**
		 * The estimated cost for the job cost in dollars.
		 */
		cost: double = NaN;
		/**
		 * A reference code used to track this job
		 *  <override max-length="100" />
		 */
		reference: string = "";

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