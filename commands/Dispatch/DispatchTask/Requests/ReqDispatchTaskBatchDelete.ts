

	/// <summary>
	/// Deletes multiple <see cref="DispatchTask"/>s.
	/// </summary>
	export class ReqDispatchTaskBatchDelete extends Request {
		/// <summary>
		/// List of <see cref="DispatchTask.id"/>s to delete.
		/// </summary>
		public dispatchTasks: ParamId[] = [];
	}