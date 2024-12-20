

	/// <summary>
	/// A container for the <see cref="dispatchJob"/>.
	/// </summary>
	export class RespDispatchJobBatchDelete extends Response {
		/// <summary>
		/// Details about deleting/restoring the requested <see cref="DispatchJob"/>.
		/// </summary>
		public dispatchJobs: RespIdDeleted[] = [];
	}