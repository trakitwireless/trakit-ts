

	/**
	 * Details of a command or session being throttled.
	 */
	export class ErrorDetailThrottled extends ErrorDetail {
		/**
		 * The session identifier being throttled.
		 */
		ghostId: string = "";
		/**
		 * The <see cref="User"/> being throttled.
		 */
		login: string = "";
		/**
		 * The client IP address.
		 */
		ip: string = "";
		/**
		 * The name of the WebSocket command, or the RESTful route.
		 */
		command: string = "";
		/**
		 * How many times this command was invoked during the window.
		 * Alternatively, can be the maximum number of times this command can be invoked (like creating a session).
		 */
		count: int = NaN;
		/**
		 * The size of the window.
		 * If this throttled command has no window (ie; creating too many sessions) this value is null.
		 */
		timeout?: TimeSpan;
	}