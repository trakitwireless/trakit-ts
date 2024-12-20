

	/// <summary>
	/// Completes or modifies multiple existing <see cref="DispatchJob"/>s from a driver's perspective.
	/// </summary>
	export class ReqDispatchJobBatchChange extends Request {
		/// <summary>
		/// List of <see cref="DispatchJob"/>s to update or create.
		/// </summary>
		public dispatchJobs: ParamDispatchJobChange[] = [];
	}