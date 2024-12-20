

	/// <summary>
	/// Creates a new or updates an existing <see cref="Provider"/>.
	/// </summary>
	export class ReqProviderMerge extends Request implements IReqSingle {
		/// <summary>
		/// Parameters given to create or update a <see cref="Provider"/>.
		/// </summary>
		public provider: ParamProviderMerge;

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string GetKey() => this.provider?.id?.toString() ?? "";
	}