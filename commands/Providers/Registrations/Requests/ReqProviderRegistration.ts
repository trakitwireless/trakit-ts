

	/// <summary>
	/// A container for the <see cref="providerRegistration"/> object.
	/// </summary>
	export abstract class ReqProviderRegistration extends Request implements IReqSingle {
		/// <summary>
		/// An object to contain the "id" of the <see cref="ProviderRegistration"/>.
		/// </summary>
		public providerRegistration: ParamCode;

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string GetKey() => this.providerRegistration?.code.toString() ?? "";
	}