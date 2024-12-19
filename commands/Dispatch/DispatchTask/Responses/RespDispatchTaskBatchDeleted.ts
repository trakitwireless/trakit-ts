

	/// <summary>
	/// A container for the <see cref="dispatchTask"/>.
	/// </summary>
	export class RespDispatchTaskBatchDeleted extends Response {
		/// <summary>
		/// Details about deleting/restoring the requested <see cref="DispatchTask"/>.
		/// </summary>
		public dispatchTasks: RespIdDeleted[] = [];
	}