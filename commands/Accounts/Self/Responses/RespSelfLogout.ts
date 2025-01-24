

	/**
	 * The response for a logout operation which is always successful.
	 */
	export class RespSelfLogout extends Response {
		/**
		 * Your old, no longer valid, session identifier.
		 */
		public ghostId: string = "";
		/**
		 * The timestamp from when your session expired.
		 */
		public expiry: Date = DATE();
	}