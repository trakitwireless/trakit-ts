/**
 * The lifetime of a Maintenance Job
 */
export enum MaintenanceJobStatus {
	/**
	 * The work will need to be performed soon.
	 */
	pending = "pending",
	/**
	 * The work was scheduled, but not yet done.
	 */
	pastdue = "pastdue",
	/**
	 * Work is completed.
	 */
	completed = "completed",
	/**
	 * The job was cancelled or was not necessary.
	 */
	cancelled = "cancelled",
}