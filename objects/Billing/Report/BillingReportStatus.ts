
	/**
	 * The lifetime of building a {@link BillingReport}.
	 */
	export enum BillingReportStatus {
		/**
		 * The {@link BillingReport} has been requested, but not yet begun processing.
		 */
		created,
		/**
		 * The {@link BillingReport} is waiting for required resources to begin processing.
		 */
		queued,
		/**
		 * The {@link BillingReport} is currently being processed.
		 */
		running,
		/**
		 * The {@link BillingReport} is available for retrieval.
		 */
		completed,
		/**
		 * There was an error processing the {@link BillingReport}; see the {@link BillingReport.error} for a description.
		 */
		failed,
	}