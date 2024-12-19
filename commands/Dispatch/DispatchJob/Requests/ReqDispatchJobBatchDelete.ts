

	/// <summary>
	/// Deletes multiple <see cref="DispatchJob"/>s.
	/// </summary>
	export class ReqDispatchJobBatchDelete extends Request {
		/// <summary>
		/// List of <see cref="DispatchJob.id"/>s to delete.
		/// </summary>
		public dispatchJobs: ParamId[] = [];
	}