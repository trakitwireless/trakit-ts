

	/// <summary>
	/// The response for a logout operation which is always successful.
	/// </summary>
	export class RespSelfLogout extends Response {
		/// <summary>
		/// Your old, no longer valid, session identifier.
		/// </summary>
		public ghostId: string = "";
		/// <summary>
		/// The timestamp from when your session expired.
		/// </summary>
		public expiry: Date = DATE();
	}