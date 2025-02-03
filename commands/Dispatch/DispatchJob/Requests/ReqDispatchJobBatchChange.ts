

	/**
	 * Completes or modifies multiple existing {@link DispatchJob}s from a driver's perspective.
	 */
	export class ReqDispatchJobBatchChange extends Request {
		/**
		 * List of {@link DispatchJob}s to update or create.
		 */
		dispatchJobs: ParamDispatchJobChange[] = [];
	}