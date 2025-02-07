import { BillingReport } from './BillingReport';

/**
 * The lifetime of building a {@link BillingReport}.
 */
export enum BillingReportStatus {
	/**
	 * The {@link BillingReport} has been requested, but not yet begun processing.
	 */
	created = "created",
	/**
	 * The {@link BillingReport} is waiting for required resources to begin processing.
	 */
	queued = "queued",
	/**
	 * The {@link BillingReport} is currently being processed.
	 */
	running = "running",
	/**
	 * The {@link BillingReport} is available for retrieval.
	 */
	completed = "completed",
	/**
	 * There was an error processing the {@link BillingReport}; see the {@link BillingReport.error} for a description.
	 */
	failed = "failed",
}