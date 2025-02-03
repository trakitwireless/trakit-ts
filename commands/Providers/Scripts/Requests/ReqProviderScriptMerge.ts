

	/**
	 * Creates a new or updates an existing {@link ProviderScript}.
	 */
	export class ReqProviderScriptMerge extends Request implements IReqSingle {
		/**
		 * Parameters given to create or update a {@link ProviderScript}.
		 */
		providerScript: ParamProviderScriptMerge;

		/**
		 *  
		 */
public string GetKey() => this.providerScript?.id?.toString() ?? "";
	}