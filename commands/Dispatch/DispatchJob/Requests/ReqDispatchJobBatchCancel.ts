

	/**
	 * Cancels multiple existing {@link DispatchJob}s, removing them from the dispatcher's and driver's views.
	 */
	export class ReqDispatchJobBatchCancel extends Request {
		/**
		 * List of {@link DispatchJob}s to update or create.
		 */
		dispatchJobs: ParamDispatchJobCancel[] = [];
	}