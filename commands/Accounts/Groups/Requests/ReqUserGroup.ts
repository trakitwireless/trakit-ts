

	/**
	 * A container for the {@link userGroup} object.
	 */
	export abstract class ReqUserGroup extends Request implements IReqSingle {
		/**
		 * An object to contain the "id" of the {@link UserGroup}.
		 */
		userGroup: ParamId;

		/**
		 *  
		 */
		string GetKey() => this.userGroup?.id.toString() ?? "";
	}