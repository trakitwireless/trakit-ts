

	/**
	 * A container for the <see cref="userGroup"/> object.
	 */
	export abstract class ReqUserGroup extends Request implements IReqSingle {
		/**
		 * An object to contain the "id" of the <see cref="UserGroup"/>.
		 */
		userGroup: ParamId;

		/**
		 *  
		 */
		string GetKey() => this.userGroup?.id.toString() ?? "";
	}