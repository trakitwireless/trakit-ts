

	/// <summary>
	/// Creates a new or updates an existing <see cref="ProviderScript"/>.
	/// </summary>
	export class ReqProviderScriptMerge extends Request implements IReqSingle {
		/// <summary>
		/// Parameters given to create or update a <see cref="ProviderScript"/>.
		/// </summary>
		public providerScript: ParamProviderScriptMerge;

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string GetKey() => this.providerScript?.id?.toString() ?? "";
	}