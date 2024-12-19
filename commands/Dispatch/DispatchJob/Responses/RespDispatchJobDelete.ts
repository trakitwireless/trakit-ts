

	/// <summary>
	/// A container for the <see cref="dispatchJob"/>.
	/// </summary>
	export class RespDispatchJobDelete extends Response {
		/// <summary>
		/// Details about deleting/restoring the requested <see cref="DispatchJob"/>.
		/// </summary>
		public dispatchJob: RespIdDeleted;
	}