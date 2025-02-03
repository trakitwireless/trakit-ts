

	/**
	 * Creates a new or updates an existing {@link Company}.
	 */
	export class ReqCompanyMerge extends Request implements IReqSingle {
		/**
		 * Parameters given to create or update a {@link Company}.
		 */
		company: ParamCompanyMerge;

		/**
		 *  
		 */
public string GetKey() => this.company?.id?.toString() ?? "";
	}