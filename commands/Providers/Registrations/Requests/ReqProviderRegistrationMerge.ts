

	/// <summary>
	/// Creates a new or updates an existing <see cref="ProviderRegistration"/>.
	/// </summary>
	export class ReqProviderRegistrationMerge extends Request implements IReqSingle {
		/// <summary>
		/// Parameters given to create or update a <see cref="ProviderRegistration"/>.
		/// </summary>
		public providerRegistration: ParamProviderRegistrationMerge;

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string GetKey() => this.providerRegistration?.code ?? "";
	}