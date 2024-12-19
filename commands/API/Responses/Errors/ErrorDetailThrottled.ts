

	/// <summary>
	/// Details of a command or session being throttled.
	/// </summary>
	export class ErrorDetailThrottled extends ErrorDetail {
		/// <summary>
		/// The session identifier being throttled.
		/// </summary>
		public ghostId: string = "";
		/// <summary>
		/// The <see cref="User"/> being throttled.
		/// </summary>
		public login: string = "";
		/// <summary>
		/// The client IP address.
		/// </summary>
		public ip: string = "";
		/// <summary>
		/// The name of the WebSocket command, or the RESTful route.
		/// </summary>
		public command: string = "";
		/// <summary>
		/// How many times this command was invoked during the window.
		/// Alternatively, can be the maximum number of times this command can be invoked (like creating a session).
		/// </summary>
		public count: int = NaN;
		/// <summary>
		/// The size of the window.
		/// If this throttled command has no window (ie; creating too many sessions) this value is null.
		/// </summary>
		public timeout?: TimeSpan;
	}