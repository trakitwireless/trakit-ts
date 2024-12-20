

	/// <summary>
	/// Creates multiple new, or updates multiple existing <see cref="DispatchJob"/>s.
	/// </summary>
	export class ReqDispatchJobBatchMerge extends Request {
		/// <summary>
		/// List of <see cref="DispatchJob"/>s to update or create.
		/// </summary>
		public dispatchJobs: ParamDispatchJobMerge[] = [];
	}