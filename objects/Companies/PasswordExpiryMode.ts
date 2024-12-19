
	/// <summary>
	/// Defines how User passwords expire.
	/// </summary>
	export enum PasswordExpiryMode {
		/// <summary>
		/// Passwords never expire.
		/// </summary>
		never,
		/// <summary>
		/// Passwords expire after a defined number of days.
		/// </summary>
		days,
		/// <summary>
		/// Passwords expire after a defined number of successful logins.
		/// </summary>
		sessions,
	}