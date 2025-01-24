


	/**
	 * Creates a new or updates an existing <see cref="FormResult"/>.
	 */
	export class ReqFormResultMerge extends Request implements IReqSingle {
		/**
		 * Parameters given to create or update a <see cref="FormResult"/>.
		 */
		public formResult: ParamFormResultMerge;

		/**
		 *  
		 */
public string GetKey() => this.formResult?.id?.toString() ?? "";
	}