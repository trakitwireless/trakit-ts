

	/// <summary>
	/// Creates a new or updates an existing <see cref="ProviderConfiguration"/>.
	/// </summary>
	[Obsolete("Use ReqProviderConfigMerge instead")]
	export class ReqProviderConfigurationMerge extends Request implements IReqSingle {
		/// <summary>
		/// Parameters given to create or update a <see cref="ProviderConfiguration"/>.
		/// </summary>
		public providerConfiguration: ParamProviderConfigurationMerge;

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string GetKey() => this.providerConfiguration?.id?.toString() ?? "";
	}