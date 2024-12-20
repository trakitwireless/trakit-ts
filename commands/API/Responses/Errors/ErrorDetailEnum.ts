
	/// <summary>
	/// These are the details of an enum input that failed to parse.
	/// </summary>
	export class ErrorDetailEnum extends ErrorDetailInput {
		/// <summary>
		/// This is a list of possible values the input should have been.
		/// </summary>
		public valid: string[] = [];
	}