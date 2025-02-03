

	/**
	 * A container class used to house the login identifying a {@link User}.
	 * Used specifically to get session details.
	 */
	export class ReqSelfLogin extends Request {
		/**
		 * The {@link User}'s login.
		 */
		username: string = "";
		/**
		 * The {@link User}'s password.
		 */
		password: string = "";
		/**
		 * A string to identify the User-Agent of the login request.
		 */
		userAgent: string = "";
	}