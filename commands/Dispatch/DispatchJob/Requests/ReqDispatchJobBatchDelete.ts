

	/**
	 * Deletes multiple {@link DispatchJob}s.
	 */
	export class ReqDispatchJobBatchDelete extends Request {
		/**
		 * List of {@link DispatchJob.id}s to delete.
		 */
		dispatchJobs: ParamId[] = [];
	}