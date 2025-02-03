

	/**
	 * Creates multiple new, or updates multiple existing {@link DispatchJob}s.
	 */
	export class ReqDispatchJobBatchMerge extends Request {
		/**
		 * List of {@link DispatchJob}s to update or create.
		 */
		dispatchJobs: ParamDispatchJobMerge[] = [];
	}