

	/**
	 * Creates a new or updates an existing <see cref="User"/>.
	 */
	export class ReqUserMerge extends Request implements IReqSingle {
		/**
		 * Parameters given to create or update a <see cref="User"/>.
		 */
		user: ParamUserMerge;

		/**
		 *  
		 */
public string GetKey() => this.user?.login ?? "";
	}