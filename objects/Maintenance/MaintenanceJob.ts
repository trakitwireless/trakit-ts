

	/// <summary>
	/// Historical service work performed on a Vehicle or Trailer
	/// </summary>
	export class MaintenanceJob extends Component implements IIdUlong, INamed, IBelongCompany, IBelongAsset, IPictured, IDeletable {
		/// <summary>
		/// Default threshold (in minutes) for the valid completion date of jobs.
		/// </summary>
		public const int DEFAULT_COMPLETED_THRESHOLD_MINUTES = 10;

		/// <summary>
		/// Unique identifier
		/// </summary>
		public id: ulong = NaN;
		/// <summary>
		/// The Vehicle or Trailer to which this job belongs
		/// </summary>
		/// <seealso cref="Asset.id" />
		public asset: ulong = NaN;
		/// <summary>
		/// The company to which this Vehicle or Trailer belongs
		/// </summary>
		/// <seealso cref="Company.id" />
		public company: ulong = NaN;
		/// <summary>
		/// The Maintenance Schedule from which this job was created
		/// </summary>
		/// <seealso cref="MaintenanceSchedule.id" />
		public schedule: ulong = NaN;
		/// <summary>
		/// The work being done. Like "oil change".
		/// </summary>
		/// <override max-length="100" />
		public name: string = "";
		/// <summary>
		/// Notes about the job.  Like "changed the oil and filter".
		/// </summary>
		public notes: string = "";
		/// <summary>
		/// The status of this job.
		/// </summary>
		public status: MaintenanceJobStatus;
		/// <summary>
		/// When was this job created.
		/// </summary>
		public created: Date = DATE();
		/// <summary>
		/// When was this job created.
		/// </summary>
		public completed: Date = DATE();
		/// <summary>
		/// The odometer at the time of the service.
		/// </summary>
		public odometer: double = NaN;
		/// <summary>
		/// The operating time at the time of the service.
		/// </summary>
		public engineHours: double = NaN;

		// ------------ repair details ------------
		/// <summary>
		/// The name of the garage or service facility where the work is done.
		/// </summary>
		/// <override max-length="100" />
		public garage: string = "";
		/// <summary>
		/// Time it took to complete the job.
		/// </summary>
		/// <override format="timespan" />
		public duration: TimeSpan;
		/// <summary>
		/// How much the job cost in dollars.
		/// </summary>
		public cost: double = NaN;
		/// <summary>
		/// A reference code used to track this job
		/// </summary>
		/// <override max-length="100" />
		public reference: string = "";
		/// <summary>
		/// The mechanic who performed the work.
		/// </summary>
		/// <override max-length="100" />
		public technician: string = "";
		/// <summary>
		/// Images taken while performing the work for reference.
		/// </summary>
		/// <seealso cref="Picture.id" />
		/// <override>
		/// <values>
		/// <seealso cref="Picture.id" />
		/// </values>
		/// </override>
		public pictures: ulong[] = [];

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