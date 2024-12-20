

	/// <summary>
	/// A container for the <see cref="providerConfig"/> object.
	/// </summary>
	export abstract class ReqProviderConfig extends Request implements IReqSingle {
		/// <summary>
		/// An object to contain the "id" of the <see cref="ProviderConfig"/>.
		/// </summary>
		public providerConfig: ParamId;

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string GetKey() => this.providerConfig?.id.toString() ?? "";
	}