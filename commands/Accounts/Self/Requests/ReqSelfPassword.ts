

	/**
	 * Allows a <see cref="User"/> to change their own password.
	 */
	export class ReqSelfPassword extends Request {
		/**
		 * Your current password, as verification that you are the proper account owner.
		 */
		current: string = "";
		/**
		 * Your new password must conform to your company's <see cref="PasswordPolicy">password policy</see>.
		 */
		password: string = "";
	}