

	/// <summary>
	/// A container for the <see cref="userGroup"/>.
	/// </summary>
	export class RespUserGroupBatchDelete extends Response {
		/// <summary>
		/// Details about deleting/restoring the requested <see cref="UserGroup"/>.
		/// </summary>
		public userGroups: RespIdDeleted[] = [];
	}