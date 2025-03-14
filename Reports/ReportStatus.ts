/**
 * The lifetime of building a {@link ReportResult}.
 */
export enum ReportStatus {
	/**
	 * The {@link ReportResult} has been requested, but not yet begun processing.
	 */
	created = "created",
	/**
	 * The {@link ReportResult} is waiting for required resources to begin processing.
	 */
	queued = "queued",
	/**
	 * The {@link ReportResult} is currently being processed.
	 */
	running = "running",
	/**
	 * The {@link ReportResult} results have been calculated, and are being saved for review.
	 */
	saving = "saving",
	/**
	 * The {@link ReportResult} is available for retrieval.
	 */
	completed = "completed",
	/**
	 * There was an error processing the {@link ReportResult}; see the {@link ReportResult.error} for a description.
	 */
	failed = "failed",
}