

	/**
	 * Creates a new or updates an existing {@link ProviderConfiguration}.
	 * @deprecated Use ReqProviderConfigMerge instead
	 */
	export class ReqProviderConfigurationMerge extends Request implements IReqSingle {
		/**
		 * Parameters given to create or update a {@link ProviderConfiguration}.
		 */
		providerConfiguration: ParamProviderConfigurationMerge;

		/**
		 *  
		 */
public string GetKey() => this.providerConfiguration?.id?.toString() ?? "";
	}