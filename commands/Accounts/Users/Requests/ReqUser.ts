

	/**
	 * A container for the {@link user} object.
	 */
	export abstract class ReqUser extends Request implements IReqSingle {
		/**
		 * An object to contain the "id" of the {@link User}.
		 */
		user: ParamLogin;

		/**
		 *  
		 */
public string GetKey() => this.user?.login ?? "";
	}