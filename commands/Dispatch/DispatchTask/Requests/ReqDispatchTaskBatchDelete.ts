

	/**
	 * Deletes multiple <see cref="DispatchTask"/>s.
	 */
	export class ReqDispatchTaskBatchDelete extends Request {
		/**
		 * List of <see cref="DispatchTask.id"/>s to delete.
		 */
		public dispatchTasks: ParamId[] = [];
	}