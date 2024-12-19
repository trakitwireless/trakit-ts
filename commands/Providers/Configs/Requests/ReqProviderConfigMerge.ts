

	/// <summary>
	/// Creates a new or updates an existing <see cref="ProviderConfig"/>.
	/// </summary>
	export class ReqProviderConfigMerge extends Request implements IReqSingle {
		/// <summary>
		/// Parameters given to create or update a <see cref="ProviderConfig"/>.
		/// </summary>
		public providerConfig: ParamProviderConfigMerge;

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string GetKey() => this.providerConfig?.id?.toString() ?? "";
	}