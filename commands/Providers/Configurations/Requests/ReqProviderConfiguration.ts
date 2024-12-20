

	/// <summary>
	/// A container for the <see cref="providerConfiguration"/> object.
	/// </summary>
	[Obsolete("Use ReqProviderConfig instead")]
	export abstract class ReqProviderConfiguration extends Request implements IReqSingle {
		/// <summary>
		/// An object to contain the "id" of the <see cref="ProviderConfiguration"/>.
		/// </summary>
		public providerConfiguration: ParamId;

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string GetKey() => this.providerConfiguration?.id.toString() ?? "";
	}