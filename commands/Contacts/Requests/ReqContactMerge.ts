

	/**
	 * Creates a new or updates an existing <see cref="Contact"/>.
	 */
	export class ReqContactMerge extends Request implements IReqSingle {
		/**
		 * Parameters given to create or update a <see cref="Contact"/>.
		 */
		contact: ParamContactMerge;

		/**
		 *  
		 */
public string GetKey() => this.contact?.id?.toString() ?? "";
	}