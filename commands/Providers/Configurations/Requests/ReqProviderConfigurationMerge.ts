

	/**
	 * Creates a new or updates an existing <see cref="ProviderConfiguration"/>.
	 * @deprecated Use ReqProviderConfigMerge instead
	 */
	export class ReqProviderConfigurationMerge extends Request implements IReqSingle {
		/**
		 * Parameters given to create or update a <see cref="ProviderConfiguration"/>.
		 */
		public providerConfiguration: ParamProviderConfigurationMerge;

		/**
		 *  
		 */
public string GetKey() => this.providerConfiguration?.id?.toString() ?? "";
	}