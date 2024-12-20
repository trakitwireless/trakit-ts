
	/// <summary>
	/// The lifetime of building a <see cref="BillingReport"/>.
	/// </summary>
	export enum BillingReportStatus {
		/// <summary>
		/// The <see cref="BillingReport"/> has been requested, but not yet begun processing.
		/// </summary>
		created,
		/// <summary>
		/// The <see cref="BillingReport"/> is waiting for required resources to begin processing.
		/// </summary>
		queued,
		/// <summary>
		/// The <see cref="BillingReport"/> is currently being processed.
		/// </summary>
		running,
		/// <summary>
		/// The <see cref="BillingReport"/> is available for retrieval.
		/// </summary>
		completed,
		/// <summary>
		/// There was an error processing the <see cref="BillingReport"/>; see the <see cref="BillingReport.error"/> for a description.
		/// </summary>
		failed,
	}