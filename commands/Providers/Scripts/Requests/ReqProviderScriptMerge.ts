

	/**
	 * Creates a new or updates an existing <see cref="ProviderScript"/>.
	 */
	export class ReqProviderScriptMerge extends Request implements IReqSingle {
		/**
		 * Parameters given to create or update a <see cref="ProviderScript"/>.
		 */
		providerScript: ParamProviderScriptMerge;

		/**
		 *  
		 */
public string GetKey() => this.providerScript?.id?.toString() ?? "";
	}