
	/// <summary>
	/// For unhandled exceptions, a full stack trace may be given.
	/// </summary>
	/// <remarks>
	/// Only available for some of the beta services.
	/// </remarks>
	export class ErrorDetailStack extends ErrorDetail {
		/// <summary>
		/// Exception message.
		/// </summary>
		public message: string = "";
		/// <summary>
		/// The full stack trace if available.
		/// </summary>
		public stack: string = "";
	}