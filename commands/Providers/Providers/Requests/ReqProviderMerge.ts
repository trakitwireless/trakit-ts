

	/**
	 * Creates a new or updates an existing {@link Provider}.
	 */
	export class ReqProviderMerge extends Request implements IReqSingle {
		/**
		 * Parameters given to create or update a {@link Provider}.
		 */
		provider: ParamProviderMerge;

		/**
		 *  
		 */
public string GetKey() => this.provider?.id?.toString() ?? "";
	}