

	/**
	 * Creates multiple new, or updates multiple existing {@link DispatchTask}s.
	 */
	export class ReqDispatchTaskBatchMerge extends Request {
		/**
		 * List of {@link DispatchTask}s to update or create.
		 */
		dispatchTasks: ParamDispatchTaskMerge[] = [];
	}