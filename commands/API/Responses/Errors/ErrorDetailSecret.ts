

	/// <summary>
	/// Details about why the request failed an authentication process when a <see cref="Machine.secret"/> is used.
	/// </summary>
	/// <remarks>
	/// Only available for <see cref="Machine"/> accounts 		/// <summary>
		/// The time of the server from when the HTTP request was accepted.
		/// </summary>
		public accepted: Date = DATE();

		/// <summary>
		/// The unique identifier given for the <see cref="Machine"/> to access the system.
		/// </summary>
		public key: string = "";
		/// <summary>
		/// The signature calculated for this request based on all the inputs.
		/// </summary>
		public signature: string = "";
		/// <summary>
		/// The parsed Date header timestamp.
		/// </summary>
		public date: string = "";
		/// <summary>
		/// The parsed <see cref="HttpMethod"/> (should be upper-case).
		/// </summary>
		public method: string = "";
		/// <summary>
		/// Sanitized absolute URL of the request including query-string and fragment, but with any session or api-keys stripped out.
		/// </summary>
		public uri: string = "";
		/// <summary>
		/// The length of the content body (or the Content-Length header value).
		/// </summary>
		public length: long = NaN;

		/// <summary>
		/// The input for creating a signature.
		/// </summary>
		public input: string = "";
		/// <summary>
		/// The signature expected.
		/// </summary>
		public output: string = "";
	}