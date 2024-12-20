

	/// <summary>
	/// Base class for all responses from commands.
	/// All command response classes use this as the base.
	/// </summary>
	/// <remarks>
	/// It will always have the <see cref="reqId"/>, <see cref="errorCode"/>, <see cref="message"/>, and <see cref="errorDetails"/> properties, but can also contain any number of other properties.
	/// A child class per command type should be created.
	/// </remarks>
	export class Response {
		/// <summary>
		/// Identifier used by external system to correlate requests to responses.
		/// </summary>
		/// <remarks>
		/// This is only used with the Trak-iT WebSocket API service.
		/// </remarks>
		[JsonProperty(NullValueHandling = NullValueHandling.Ignore)]
		public reqId: int = NaN;
		/// <summary>
		/// The unique, numeric error code when processing this request.
		/// </summary>
		public errorCode: ErrorCode;
		/// <summary>
		/// An English description of the error.
		/// </summary>
		public message: string = "";
		/// <summary>
		/// An object to provide developers with a hint about the nature of the error.
		/// The key is not always present, and only available for some errors.
		/// </summary>
		public errorDetails: ErrorDetail;
	}