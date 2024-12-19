

	/// <summary>
	/// Creates a new or updates an existing <see cref="UserGroup"/>.
	/// </summary>
	export class ReqUserGroupMerge extends Request implements IReqSingle {
		/// <summary>
		/// Parameters given to create or update a <see cref="UserGroup"/>.
		/// </summary>
		public userGroup: ParamUserGroupMerge;

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string GetKey() => this.userGroup?.id?.toString() ?? "";
	}