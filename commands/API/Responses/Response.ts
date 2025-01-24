

	/**
	 * Base class for all responses from commands.
	 * All command response classes use this as the base.
	 *  <remarks>
	 * It will always have the <see cref="reqId"/>, <see cref="errorCode"/>, <see cref="message"/>, and <see cref="errorDetails"/> properties, but can also contain any number of other properties.
	 * A child class per command type should be created.
	 *  </remarks>
	 */
	export class Response {
		/**
		 * Identifier used by external system to correlate requests to responses.
		 *  <remarks>
		 * This is only used with the Trak-iT WebSocket API service.
		 *  </remarks>
		 */
		[JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
		public reqId: int = NaN;
		/**
		 * The unique, numeric error code when processing this request.
		 */
		public errorCode: ErrorCode;
		/**
		 * An English description of the error.
		 */
		public message: string = "";
		/**
		 * An object to provide developers with a hint about the nature of the error.
		 * The key is not always present, and only available for some errors.
		 */
		public errorDetails: ErrorDetail;
	}