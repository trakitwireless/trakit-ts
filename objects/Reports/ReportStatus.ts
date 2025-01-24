
	/**
	 * The lifetime of building a <see cref="ReportResult"/>.
	 */
	export enum ReportStatus {
		/**
		 * The <see cref="ReportResult"/> has been requested, but not yet begun processing.
		 */
		created,
		/**
		 * The <see cref="ReportResult"/> is waiting for required resources to begin processing.
		 */
		queued,
		/**
		 * The <see cref="ReportResult"/> is currently being processed.
		 */
		running,
		/**
		 * The <see cref="ReportResult"/> results have been calculated, and are being saved for review.
		 */
		saving,
		/**
		 * The <see cref="ReportResult"/> is available for retrieval.
		 */
		completed,
		/**
		 * There was an error processing the <see cref="ReportResult"/>; see the <see cref="ReportResult.error"/> for a description.
		 */
		failed,
	}