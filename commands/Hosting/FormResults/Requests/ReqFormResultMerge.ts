


	/**
	 * Creates a new or updates an existing {@link FormResult}.
	 */
	export class ReqFormResultMerge extends Request implements IReqSingle {
		/**
		 * Parameters given to create or update a {@link FormResult}.
		 */
		formResult: ParamFormResultMerge;

		/**
		 *  
		 */
public string GetKey() => this.formResult?.id?.toString() ?? "";
	}