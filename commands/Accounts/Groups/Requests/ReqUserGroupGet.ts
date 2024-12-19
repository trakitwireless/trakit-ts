

	/// <summary>
	/// Gets details of the specified <see cref="UserGroup"/>.
	/// </summary>
	export class ReqUserGroupGet extends ReqUserGroup implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return a deleted <see cref="UserGroup"/> (if it exists).
		/// </summary>
		public includeDeleted: boolean = false;
	}