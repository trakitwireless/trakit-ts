

	/**
	 * Creates a new or updates an existing <see cref="UserGroup"/>.
	 */
	export class ReqUserGroupMerge extends Request implements IReqSingle {
		/**
		 * Parameters given to create or update a <see cref="UserGroup"/>.
		 */
		userGroup: ParamUserGroupMerge;

		/**
		 *  
		 */
public string GetKey() => this.userGroup?.id?.toString() ?? "";
	}