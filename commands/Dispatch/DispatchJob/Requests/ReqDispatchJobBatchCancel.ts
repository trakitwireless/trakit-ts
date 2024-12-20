

	/// <summary>
	/// Cancels multiple existing <see cref="DispatchJob"/>s, removing them from the dispatcher's and driver's views.
	/// </summary>
	export class ReqDispatchJobBatchCancel extends Request {
		/// <summary>
		/// List of <see cref="DispatchJob"/>s to update or create.
		/// </summary>
		public dispatchJobs: ParamDispatchJobCancel[] = [];
	}