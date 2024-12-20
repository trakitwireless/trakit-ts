


	/// <summary>
	/// Tasks have a lifetime and each status represents a task's progress through it's life.
	/// </summary>
	[Obsolete("Use DispatchStepStatus instead")]
	export enum DispatchTaskStatus {
		/// <summary>
		/// The task has been created, but not yet assigned to an asset.
		/// </summary>
		created,
		/// <summary>
		/// The task has been given to an asset (and delivered to the asset's primary device).
		/// </summary>
		queued,
		/// <summary>
		/// The asset is on the way to the task's location next.
		/// </summary>
		onRoute,
		/// <summary>
		/// The asset has arrived at the task's location.
		/// </summary>
		arrived,
		/// <summary>
		/// The task is done.
		/// </summary>
		completed,
		/// <summary>
		/// The task was cancelled by either the asset or a user.
		/// </summary>
		cancelled,
		/// <summary>
		/// An item was picked-up for this task.
		/// </summary>
		pickedUp,
		/// <summary>
		/// An item was dropped-off for this task.
		/// </summary>
		droppedOff,
		/// <summary>
		/// The asset is waiting and can't complete the task.
		/// </summary>
		waiting,
		/// <summary>
		/// An item associated with this task is damaged.
		/// </summary>
		damaged,
		/// <summary>
		/// The task couldn't be completed by the asset.
		/// </summary>
		unsuccessful,
	}