

	/// <summary>
	/// A container for the <see cref="user"/>.
	/// </summary>
	export class RespUserBatchDelete extends Response {
		/// <summary>
		/// Details about deleting/restoring the requested <see cref="User"/>.
		/// </summary>
		public users: RespIdDeleted[] = [];
	}