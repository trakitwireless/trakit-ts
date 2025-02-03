

	/**
	 * Creates a new or updates an existing {@link Icon}.
	 */
	export class ReqIconMerge extends Request implements IReqSingle {
		/**
		 * Parameters given to create or update a {@link Icon}.
		 */
		icon: ParamIconMerge;

		/**
		 *  
		 */
public string GetKey() => this.icon?.id?.toString() ?? "";
	}