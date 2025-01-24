

	/**
	 * Creates a new or updates an existing <see cref="ProviderConfig"/>.
	 */
	export class ReqProviderConfigMerge extends Request implements IReqSingle {
		/**
		 * Parameters given to create or update a <see cref="ProviderConfig"/>.
		 */
		providerConfig: ParamProviderConfigMerge;

		/**
		 *  
		 */
public string GetKey() => this.providerConfig?.id?.toString() ?? "";
	}