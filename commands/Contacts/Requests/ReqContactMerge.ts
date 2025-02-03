

	/**
	 * Creates a new or updates an existing {@link Contact}.
	 */
	export class ReqContactMerge extends Request implements IReqSingle {
		/**
		 * Parameters given to create or update a {@link Contact}.
		 */
		contact: ParamContactMerge;

		/**
		 *  
		 */
public string GetKey() => this.contact?.id?.toString() ?? "";
	}