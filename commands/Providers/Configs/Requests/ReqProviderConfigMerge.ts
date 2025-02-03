

	/**
	 * Creates a new or updates an existing {@link ProviderConfig}.
	 */
	export class ReqProviderConfigMerge extends Request implements IReqSingle {
		/**
		 * Parameters given to create or update a {@link ProviderConfig}.
		 */
		providerConfig: ParamProviderConfigMerge;

		/**
		 *  
		 */
public string GetKey() => this.providerConfig?.id?.toString() ?? "";
	}