
	/**
	 * The lifetime of building a {@link ReportResult}.
	 */
	export enum ReportStatus {
		/**
		 * The {@link ReportResult} has been requested, but not yet begun processing.
		 */
		created,
		/**
		 * The {@link ReportResult} is waiting for required resources to begin processing.
		 */
		queued,
		/**
		 * The {@link ReportResult} is currently being processed.
		 */
		running,
		/**
		 * The {@link ReportResult} results have been calculated, and are being saved for review.
		 */
		saving,
		/**
		 * The {@link ReportResult} is available for retrieval.
		 */
		completed,
		/**
		 * There was an error processing the {@link ReportResult}; see the {@link ReportResult.error} for a description.
		 */
		failed,
	}