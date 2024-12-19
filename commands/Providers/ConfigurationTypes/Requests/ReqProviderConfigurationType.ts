

	/// <summary>
	/// A container for the <see cref="providerConfigurationType"/> object.
	/// </summary>
	[Obsolete("Use ReqProviderScript instead")]
	export abstract class ReqProviderConfigurationType extends Request implements IReqSingle {
		/// <summary>
		/// An object to contain the "id" of the <see cref="ProviderConfigurationType"/>.
		/// </summary>
		public providerConfigurationType: ParamId;

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string GetKey() => this.providerConfigurationType?.id.toString() ?? "";
	}