

	/// <summary>
	/// A container for the <see cref="icon"/>.
	/// </summary>
	export class RespIconBatchDelete extends Response {
		/// <summary>
		/// Details about deleting/restoring the requested <see cref="Icon"/>.
		/// </summary>
		public icons: RespIdDeleted[] = [];
	}