

	/**
	 * The response for a logout operation which is always successful.
	 */
	export class RespSelfLogout extends Response {
		/**
		 * Your old, no longer valid, session identifier.
		 */
		ghostId: string = "";
		/**
		 * The timestamp from when your session expired.
		 */
		expiry: Date = DATE();
	}