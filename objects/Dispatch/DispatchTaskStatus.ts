import { DispatchStepStatus } from './DispatchStepStatus';

/**
 * Tasks have a lifetime and each status represents a task's progress through it's life.
 * @deprecated Use {@link DispatchStepStatus} instead
 */
export enum DispatchTaskStatus {
	/**
	 * The task has been created, but not yet assigned to an asset.
	 */
	created = "created",
	/**
	 * The task has been given to an asset (and delivered to the asset's primary device).
	 */
	queued = "queued",
	/**
	 * The asset is on the way to the task's location next.
	 */
	onRoute = "onRoute",
	/**
	 * The asset has arrived at the task's location.
	 */
	arrived = "arrived",
	/**
	 * The task is done.
	 */
	completed = "completed",
	/**
	 * The task was cancelled by either the asset or a user.
	 */
	cancelled = "cancelled",
	/**
	 * An item was picked-up for this task.
	 */
	pickedUp = "pickedUp",
	/**
	 * An item was dropped-off for this task.
	 */
	droppedOff = "droppedOff",
	/**
	 * The asset is waiting and can't complete the task.
	 */
	waiting = "waiting",
	/**
	 * An item associated with this task is damaged.
	 */
	damaged = "damaged",
	/**
	 * The task couldn't be completed by the asset.
	 */
	unsuccessful = "unsuccessful",
}