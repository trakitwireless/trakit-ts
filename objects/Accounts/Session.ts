


	/// <summary>
	/// Information about another <see cref="User"/>'s <see cref="Session"/>.
	/// </summary>
	export class Session implements IBelongCompany {
		/// <summary>
		/// A "handle" identifying a resource.
		/// </summary>
		public handle: string = "";
		/// <summary>
		/// Getter shortcut for the <see cref="User"/>'s <see cref="Company.id"/>.
		/// </summary>
		public company: ulong = NaN;
		/// <summary>
		/// <c>UserAgent</c> identification string
		/// </summary>
		public userAgent: string = "";
		/// <summary>
		/// The IP address the user last used to connect 
		/// <summary>
		/// The number of currently connected WebSocket clients.
		/// </summary>
		public sockets: int = NaN;
		/// <summary>
		/// The <see cref="User"/> to which the <see cref="Session"/> belongs.
		/// </summary>
		/// <seealso cref="User.login" />
		public login: string = "";
		/// <summary>
		/// This <see cref="Session"/>'s current state.
		/// </summary>
		public status: SessionStatus;
		/// <summary>
		/// The timestamp from the moment this <see cref="Session"/> was created.
		/// </summary>
		public created: Date = DATE();
		/// <summary>
		/// A timestamp for when the <see cref="RespSession"/> will expire.
		/// </summary>
		public expiry: Date = DATE();
		/// <summary>
		/// The name or path of the last command executed.
		/// </summary>
		public lastCommand: string = "";
		/// <summary>
		/// A timestamp from the last command or call to the system.
		/// </summary>
		public lastActivity: Date = DATE();
		/// <summary>
		/// Indicator that this <see cref="Session"/> is 
	}