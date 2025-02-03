

	/**
	 * Deletes multiple {@link DispatchTask}s.
	 */
	export class ReqDispatchTaskBatchDelete extends Request {
		/**
		 * List of {@link DispatchTask.id}s to delete.
		 */
		dispatchTasks: ParamId[] = [];
	}