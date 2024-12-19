

	/// <summary>
	/// A container class used to house the login identifying a <see cref="User"/>.
	/// Used specifically to get session details.
	/// </summary>
	export class ReqSelfLogin extends Request {
		/// <summary>
		/// The <see cref="User"/>'s login.
		/// </summary>
		public username: string = "";
		/// <summary>
		/// The <see cref="User"/>'s password.
		/// </summary>
		public password: string = "";
		/// <summary>
		/// A string to identify the User-Agent of the login request.
		/// </summary>
		public userAgent: string = "";
	}