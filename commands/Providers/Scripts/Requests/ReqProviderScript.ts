

	/// <summary>
	/// A container for the <see cref="providerScript"/> object.
	/// </summary>
	export abstract class ReqProviderScript extends Request implements IReqSingle {
		/// <summary>
		/// An object to contain the "id" of the <see cref="ProviderScript"/>.
		/// </summary>
		public providerScript: ParamId;

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string GetKey() => this.providerScript?.id.toString() ?? "";
	}