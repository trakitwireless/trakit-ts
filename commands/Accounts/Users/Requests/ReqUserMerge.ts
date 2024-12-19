

	/// <summary>
	/// Creates a new or updates an existing <see cref="User"/>.
	/// </summary>
	export class ReqUserMerge extends Request implements IReqSingle {
		/// <summary>
		/// Parameters given to create or update a <see cref="User"/>.
		/// </summary>
		public user: ParamUserMerge;

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string GetKey() => this.user?.login ?? "";
	}