

	/// <summary>
	/// Creates a new or updates an existing <see cref="Icon"/>.
	/// </summary>
	export class ReqIconMerge extends Request implements IReqSingle {
		/// <summary>
		/// Parameters given to create or update a <see cref="Icon"/>.
		/// </summary>
		public icon: ParamIconMerge;

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string GetKey() => this.icon?.id?.toString() ?? "";
	}