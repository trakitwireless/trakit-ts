

	/**
	 * A container for the <see cref="user"/> object.
	 */
	export abstract class ReqUser extends Request implements IReqSingle {
		/**
		 * An object to contain the "id" of the <see cref="User"/>.
		 */
		user: ParamLogin;

		/**
		 *  
		 */
public string GetKey() => this.user?.login ?? "";
	}