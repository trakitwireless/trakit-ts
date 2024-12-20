

	/// <summary>
	/// A container for the <see cref="User"/> or <see cref="Machine"/> of the current session.
	/// </summary>
	export class RespSelfGet extends Response {
		/// <summary>
		/// Your session identifier.
		/// </summary>
		public ghostId: string = "";
		/// <summary>
		/// The timestamp of when this session expires.
		/// </summary>
		public expiry: Date = DATE();
		/// <summary>
		/// This session's <see cref="User"/> details (if the service is being used by a <see cref="User"/>).
		/// If this value is not present, then the session is not yet authenticated.
		/// </summary>
		public user: SelfUser;
		/// <summary>
		/// This <see cref="Machine"/>'s details (if the service is being used by a <see cref="Machine"/>).
		/// If this value is not present, then the session is not a machine account.
		/// </summary>
		public machine: SelfMachine;
		/// <summary>
		/// This <see cref="User"/>'s <see cref="CompanyPolicies.sessionPolicy"/>.
		/// </summary>
		public sessionPolicy: SessionPolicy;
		/// <summary>
		/// This <see cref="User"/>'s <see cref="CompanyPolicies.passwordPolicy"/>.
		/// </summary>
		public passwordPolicy: PasswordPolicy;
		/// <summary>
		/// The UTC date/time of the server hosting the connection.
		/// </summary>
		public serverTime: Date = DATE();
	}