

	/**
	 * Creates a new or updates an existing {@link UserGroup}.
	 */
	export class ReqUserGroupMerge extends Request implements IReqSingle {
		/**
		 * Parameters given to create or update a {@link UserGroup}.
		 */
		userGroup: ParamUserGroupMerge;

		/**
		 *  
		 */
public string GetKey() => this.userGroup?.id?.toString() ?? "";
	}