

	/**
	 * Completes or modifies multiple existing <see cref="DispatchJob"/>s from a driver's perspective.
	 */
	export class ReqDispatchJobBatchChange extends Request {
		/**
		 * List of <see cref="DispatchJob"/>s to update or create.
		 */
		public dispatchJobs: ParamDispatchJobChange[] = [];
	}