
	/// <summary>
	/// Current state of a session
	/// </summary>
	export enum SessionStatus {
		/// <summary>
		/// Invalid session reference.
		/// </summary>
		notFound,
		/// <summary>
		/// Session created but user hasn't logged-in yet.
		/// </summary>
		created,
		/// <summary>
		/// User is logged-in and one or more WebSocket connections are open.
		/// </summary>
		active,
		/// <summary>
		/// User is logged-in but no WebSocket connections are open.
		/// </summary>
		idle,
		/// <summary>
		/// User is logged-in and password is expired and needs to be changed before any commands can be processed.
		/// </summary>
		passwordExpired,
		/// <summary>
		/// Session is being killed because it has expired.
		/// </summary>
		expired,
	}