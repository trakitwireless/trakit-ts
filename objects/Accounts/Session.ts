


	/**
	 * Information about another {@link User}'s {@link Session}.
	 */
	export class Session implements IBelongCompany {
		/**
		 * A "handle" identifying a resource.
		 */
		handle: string = "";
		/**
		 * Getter shortcut for the {@link User}'s {@link Company.id}.
		 */
		company: ulong = NaN;
		/**
		 *  <c>UserAgent</c> identification string
		 */
		userAgent: string = "";
		/**
		 * The IP address the user last used to connect 
		/**
		 * The number of currently connected WebSocket clients.
		 */
		sockets: int = NaN;
		/**
		 * The {@link User} to which the {@link Session} belongs.
		 * {@link User.login}
		 */
		login: string = "";
		/**
		 * This {@link Session}'s current state.
		 */
		status: SessionStatus;
		/**
		 * The timestamp from the moment this {@link Session} was created.
		 */
		created: Date = DATE();
		/**
		 * A timestamp for when the {@link RespSession} will expire.
		 */
		expiry: Date = DATE();
		/**
		 * The name or path of the last command executed.
		 */
		lastCommand: string = "";
		/**
		 * A timestamp from the last command or call to the system.
		 */
		lastActivity: Date = DATE();
		/**
		 * Indicator that this {@link Session} is 
	}