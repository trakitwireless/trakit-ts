
	/**
	 * The lifetime of building a <see cref="BillingReport"/>.
	 */
	export enum BillingReportStatus {
		/**
		 * The <see cref="BillingReport"/> has been requested, but not yet begun processing.
		 */
		created,
		/**
		 * The <see cref="BillingReport"/> is waiting for required resources to begin processing.
		 */
		queued,
		/**
		 * The <see cref="BillingReport"/> is currently being processed.
		 */
		running,
		/**
		 * The <see cref="BillingReport"/> is available for retrieval.
		 */
		completed,
		/**
		 * There was an error processing the <see cref="BillingReport"/>; see the <see cref="BillingReport.error"/> for a description.
		 */
		failed,
	}