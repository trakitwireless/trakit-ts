

	/**
	 * Deletes multiple <see cref="DispatchJob"/>s.
	 */
	export class ReqDispatchJobBatchDelete extends Request {
		/**
		 * List of <see cref="DispatchJob.id"/>s to delete.
		 */
		public dispatchJobs: ParamId[] = [];
	}