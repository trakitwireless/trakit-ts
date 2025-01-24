

	/**
	 * Creates a new or updates an existing <see cref="ProviderRegistration"/>.
	 */
	export class ReqProviderRegistrationMerge extends Request implements IReqSingle {
		/**
		 * Parameters given to create or update a <see cref="ProviderRegistration"/>.
		 */
		public providerRegistration: ParamProviderRegistrationMerge;

		/**
		 *  
		 */
public string GetKey() => this.providerRegistration?.code ?? "";
	}