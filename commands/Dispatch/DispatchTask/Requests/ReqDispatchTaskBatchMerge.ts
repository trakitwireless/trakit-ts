

	/**
	 * Creates multiple new, or updates multiple existing <see cref="DispatchTask"/>s.
	 */
	export class ReqDispatchTaskBatchMerge extends Request {
		/**
		 * List of <see cref="DispatchTask"/>s to update or create.
		 */
		dispatchTasks: ParamDispatchTaskMerge[] = [];
	}