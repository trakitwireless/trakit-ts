

	/**
	 * Creates multiple new, or updates multiple existing <see cref="DispatchJob"/>s.
	 */
	export class ReqDispatchJobBatchMerge extends Request {
		/**
		 * List of <see cref="DispatchJob"/>s to update or create.
		 */
		dispatchJobs: ParamDispatchJobMerge[] = [];
	}