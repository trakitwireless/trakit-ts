


	/**
	 * Information about another <see cref="User"/>'s <see cref="Session"/>.
	 */
	export class Session implements IBelongCompany {
		/**
		 * A "handle" identifying a resource.
		 */
		handle: string = "";
		/**
		 * Getter shortcut for the <see cref="User"/>'s <see cref="Company.id"/>.
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
		 * The <see cref="User"/> to which the <see cref="Session"/> belongs.
		 * {@link User.login}
		 */
		login: string = "";
		/**
		 * This <see cref="Session"/>'s current state.
		 */
		status: SessionStatus;
		/**
		 * The timestamp from the moment this <see cref="Session"/> was created.
		 */
		created: Date = DATE();
		/**
		 * A timestamp for when the <see cref="RespSession"/> will expire.
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
		 * Indicator that this <see cref="Session"/> is 
	}