

	/**
	 * Creates a new or updates an existing <see cref="Company"/>.
	 */
	export class ReqCompanyMerge extends Request implements IReqSingle {
		/**
		 * Parameters given to create or update a <see cref="Company"/>.
		 */
		company: ParamCompanyMerge;

		/**
		 *  
		 */
public string GetKey() => this.company?.id?.toString() ?? "";
	}