

	/// <summary>
	/// A container for the <see cref="userGroup"/>.
	/// </summary>
	export class RespUserGroupDelete extends Response {
		/// <summary>
		/// Details about deleting/restoring the requested <see cref="UserGroup"/>.
		/// </summary>
		public userGroup: RespIdDeleted;
	}