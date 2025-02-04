

	/**
	 * Historical service work performed on a Vehicle or Trailer
	 */
	export class MaintenanceJob extends Component implements IIdUlong, INamed, IBelongCompany, IBelongAsset, IPictured, IDeletable {
		/**
		 * Default threshold (in minutes) for the valid completion date of jobs.
		 */
		const int DEFAULT_COMPLETED_THRESHOLD_MINUTES = 10;

		/**
		 * Unique identifier
		 */
		id: ulong = NaN;
		/**
		 * The Vehicle or Trailer to which this job belongs
		 * {@link Asset.id}
		 */
		asset: ulong = NaN;
		/**
		 * The company to which this Vehicle or Trailer belongs
		 * {@link Company.id}
		 */
		company: ulong = NaN;
		/**
		 * The Maintenance Schedule from which this job was created
		 * {@link MaintenanceSchedule.id}
		 */
		schedule: ulong = NaN;
		/**
		 * The work being done. Like "oil change".
		 *  <override max-length="100" />
		 */
		name: string = "";
		/**
		 * Notes about the job.  Like "changed the oil and filter".
		 */
		notes: string = "";
		/**
		 * The status of this job.
		 */
		status: MaintenanceJobStatus;
		/**
		 * When was this job created.
		 */
		created: Date = DATE();
		/**
		 * When was this job created.
		 */
		completed: Date = DATE();
		/**
		 * The odometer at the time of the service.
		 */
		odometer: double = NaN;
		/**
		 * The operating time at the time of the service.
		 */
		engineHours: double = NaN;

		// ------------ repair details ------------
		/**
		 * The name of the garage or service facility where the work is done.
		 *  <override max-length="100" />
		 */
		garage: string = "";
		/**
		 * Time it took to complete the job.
		 *  <override format="timespan" />
		 */
		duration: TimeSpan;
		/**
		 * How much the job cost in dollars.
		 */
		cost: double = NaN;
		/**
		 * A reference code used to track this job
		 *  <override max-length="100" />
		 */
		reference: string = "";
		/**
		 * The mechanic who performed the work.
		 *  <override max-length="100" />
		 */
		technician: string = "";
		/**
		 * Images taken while performing the work for reference.
		 * {@link Picture.id}
		 *  <override>
		 *  <values>
		 * {@link Picture.id}
		 *  </values>
		 *  </override>
		 */
		pictures: ulong[] = [];

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