
	/// <summary>
	/// The session lifetime policy.
	/// </summary>
	export class SessionPolicy {
		/// <summary>
		/// The list of applications users are allowed to use to create sessions.
		/// </summary>
		public applications: string[] = [];
		/// <summary>
		/// Restrict session creation to only the provided IPv4 ranges (		/// <summary>
		/// Defines the behaviour of the system when a user creates multiple sessions.
		/// </summary>
		public multiUser: SessionMultiUser;
		/// <summary>
		/// Defines whether a session should be automatically killed when the connection breaks.
		/// </summary>
		public idleAllowed: boolean = false;
		/// <summary>
		/// The lifetime duration of a session in minutes.
		/// </summary>
		public expireTimeout: ushort = NaN;
		/// <summary>
		/// The maximum number of sessions allowed per user.
		/// </summary>
		public maxSessions: byte = NaN;
	}