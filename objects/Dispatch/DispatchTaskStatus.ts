


	/**
	 * Tasks have a lifetime and each status represents a task's progress through it's life.
	 * @deprecated Use DispatchStepStatus instead
	 */
	export enum DispatchTaskStatus {
		/**
		 * The task has been created, but not yet assigned to an asset.
		 */
		created,
		/**
		 * The task has been given to an asset (and delivered to the asset's primary device).
		 */
		queued,
		/**
		 * The asset is on the way to the task's location next.
		 */
		onRoute,
		/**
		 * The asset has arrived at the task's location.
		 */
		arrived,
		/**
		 * The task is done.
		 */
		completed,
		/**
		 * The task was cancelled by either the asset or a user.
		 */
		cancelled,
		/**
		 * An item was picked-up for this task.
		 */
		pickedUp,
		/**
		 * An item was dropped-off for this task.
		 */
		droppedOff,
		/**
		 * The asset is waiting and can't complete the task.
		 */
		waiting,
		/**
		 * An item associated with this task is damaged.
		 */
		damaged,
		/**
		 * The task couldn't be completed by the asset.
		 */
		unsuccessful,
	}