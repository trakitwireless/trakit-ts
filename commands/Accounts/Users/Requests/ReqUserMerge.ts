

	/**
	 * Creates a new or updates an existing {@link User}.
	 */
	export class ReqUserMerge extends Request implements IReqSingle {
		/**
		 * Parameters given to create or update a {@link User}.
		 */
		user: ParamUserMerge;

		/**
		 *  
		 */
public string GetKey() => this.user?.login ?? "";
	}