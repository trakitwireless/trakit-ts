
	/// <summary>
	/// These are the errors/warnings taken from the output of some other system.
	/// </summary>
	export class ErrorDetailExternals extends ErrorDetail {
		/// <summary>
		/// List of errors.
		/// </summary>
		public errors: string[] = [];
		/// <summary>
		/// List of warnings.
		/// </summary>
		public warnings: string[] = [];
		/// <summary>
		/// List of messages.
		/// </summary>
		public messages: string[] = [];
	}