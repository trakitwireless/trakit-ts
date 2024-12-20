

	/// <summary>
	/// Allows a <see cref="User"/> to change their own password.
	/// </summary>
	export class ReqSelfPassword extends Request {
		/// <summary>
		/// Your current password, as verification that you are the proper account owner.
		/// </summary>
		public current: string = "";
		/// <summary>
		/// Your new password must conform to your company's <see cref="PasswordPolicy">password policy</see>.
		/// </summary>
		public password: string = "";
	}