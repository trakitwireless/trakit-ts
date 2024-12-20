
	/// <summary>
	/// The lifetime of a Maintenance Job
	/// </summary>
	export enum MaintenanceJobStatus {
		/// <summary>
		/// The work will need to be performed soon.
		/// </summary>
		pending,
		/// <summary>
		/// The work was scheduled, but not yet done.
		/// </summary>
		pastdue,
		/// <summary>
		/// Work is completed.
		/// </summary>
		completed,
		/// <summary>
		/// The job was cancelled or was not necessary.
		/// </summary>
		cancelled,
	}