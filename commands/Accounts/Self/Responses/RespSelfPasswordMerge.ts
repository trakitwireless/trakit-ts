

	/// <summary>
	/// 
	/// </summary>
	export class RespSelfPasswordMerge extends Response {
		/// <summary>
		/// Specific date/time of when the password will expire.
		/// </summary>
		public expires: Date = DATE();
		/// <summary>
		/// Your <see cref="Company"/>'s <see cref="PasswordPolicy">password policy</see>.
		/// </summary>
		public passwordPolicy: PasswordPolicy;
	}