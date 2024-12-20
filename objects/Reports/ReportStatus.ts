
	/// <summary>
	/// The lifetime of building a <see cref="ReportResult"/>.
	/// </summary>
	export enum ReportStatus {
		/// <summary>
		/// The <see cref="ReportResult"/> has been requested, but not yet begun processing.
		/// </summary>
		created,
		/// <summary>
		/// The <see cref="ReportResult"/> is waiting for required resources to begin processing.
		/// </summary>
		queued,
		/// <summary>
		/// The <see cref="ReportResult"/> is currently being processed.
		/// </summary>
		running,
		/// <summary>
		/// The <see cref="ReportResult"/> results have been calculated, and are being saved for review.
		/// </summary>
		saving,
		/// <summary>
		/// The <see cref="ReportResult"/> is available for retrieval.
		/// </summary>
		completed,
		/// <summary>
		/// There was an error processing the <see cref="ReportResult"/>; see the <see cref="ReportResult.error"/> for a description.
		/// </summary>
		failed,
	}