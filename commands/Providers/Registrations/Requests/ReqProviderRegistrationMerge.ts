

	/**
	 * Creates a new or updates an existing {@link ProviderRegistration}.
	 */
	export class ReqProviderRegistrationMerge extends Request implements IReqSingle {
		/**
		 * Parameters given to create or update a {@link ProviderRegistration}.
		 */
		providerRegistration: ParamProviderRegistrationMerge;

		/**
		 *  
		 */
public string GetKey() => this.providerRegistration?.code ?? "";
	}