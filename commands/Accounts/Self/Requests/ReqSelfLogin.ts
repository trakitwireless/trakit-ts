

	/**
	 * A container class used to house the login identifying a <see cref="User"/>.
	 * Used specifically to get session details.
	 */
	export class ReqSelfLogin extends Request {
		/**
		 * The <see cref="User"/>'s login.
		 */
		username: string = "";
		/**
		 * The <see cref="User"/>'s password.
		 */
		password: string = "";
		/**
		 * A string to identify the User-Agent of the login request.
		 */
		userAgent: string = "";
	}