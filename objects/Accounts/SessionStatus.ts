
	/**
	 * Current state of a session
	 */
	export enum SessionStatus {
		/**
		 * Invalid session reference.
		 */
		notFound,
		/**
		 * Session created but user hasn't logged-in yet.
		 */
		created,
		/**
		 * User is logged-in and one or more WebSocket connections are open.
		 */
		active,
		/**
		 * User is logged-in but no WebSocket connections are open.
		 */
		idle,
		/**
		 * User is logged-in and password is expired and needs to be changed before any commands can be processed.
		 */
		passwordExpired,
		/**
		 * Session is being killed because it has expired.
		 */
		expired,
	}