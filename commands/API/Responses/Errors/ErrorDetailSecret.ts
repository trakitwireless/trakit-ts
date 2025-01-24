

	/**
	 * Details about why the request failed an authentication process when a <see cref="Machine.secret"/> is used.
	 *  <remarks>
	 * Only available for <see cref="Machine"/> accounts 		/**
	 * The time of the server from when the HTTP request was accepted.
		 */
		public accepted: Date = DATE();

		/**
		 * The unique identifier given for the <see cref="Machine"/> to access the system.
		 */
		public key: string = "";
		/**
		 * The signature calculated for this request based on all the inputs.
		 */
		public signature: string = "";
		/**
		 * The parsed Date header timestamp.
		 */
		public date: string = "";
		/**
		 * The parsed <see cref="HttpMethod"/> (should be upper-case).
		 */
		public method: string = "";
		/**
		 * Sanitized absolute URL of the request including query-string and fragment, but with any session or api-keys stripped out.
		 */
		public uri: string = "";
		/**
		 * The length of the content body (or the Content-Length header value).
		 */
		public length: long = NaN;

		/**
		 * The input for creating a signature.
		 */
		public input: string = "";
		/**
		 * The signature expected.
		 */
		public output: string = "";
	}