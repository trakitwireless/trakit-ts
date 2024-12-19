

	/// <summary>
	/// Creates multiple new, or updates multiple existing <see cref="DispatchTask"/>s.
	/// </summary>
	export class ReqDispatchTaskBatchMerge extends Request {
		/// <summary>
		/// List of <see cref="DispatchTask"/>s to update or create.
		/// </summary>
		public dispatchTasks: ParamDispatchTaskMerge[] = [];
	}