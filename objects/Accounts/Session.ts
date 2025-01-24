


	/**
	 * Information about another <see cref="User"/>'s <see cref="Session"/>.
	 */
	export class Session implements IBelongCompany {
		/**
		 * A "handle" identifying a resource.
		 */
		public handle: string = "";
		/**
		 * Getter shortcut for the <see cref="User"/>'s <see cref="Company.id"/>.
		 */
		public company: ulong = NaN;
		/**
		 *  <c>UserAgent</c> identification string
		 */
		public userAgent: string = "";
		/**
		 * The IP address the user last used to connect 
		/**
		 * The number of currently connected WebSocket clients.
		 */
		public sockets: int = NaN;
		/**
		 * The <see cref="User"/> to which the <see cref="Session"/> belongs.
		 * {@link User.login}
		 */
		public login: string = "";
		/**
		 * This <see cref="Session"/>'s current state.
		 */
		public status: SessionStatus;
		/**
		 * The timestamp from the moment this <see cref="Session"/> was created.
		 */
		public created: Date = DATE();
		/**
		 * A timestamp for when the <see cref="RespSession"/> will expire.
		 */
		public expiry: Date = DATE();
		/**
		 * The name or path of the last command executed.
		 */
		public lastCommand: string = "";
		/**
		 * A timestamp from the last command or call to the system.
		 */
		public lastActivity: Date = DATE();
		/**
		 * Indicator that this <see cref="Session"/> is 
	}