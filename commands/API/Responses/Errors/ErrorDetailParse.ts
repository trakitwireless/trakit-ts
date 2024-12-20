
	/// <summary>
	/// These are the details of an exception while trying to parse the JSON input.
	/// </summary>
	export class ErrorDetailParse extends ErrorDetail {
		/// <summary>
		/// The line number in the input string.
		/// </summary>
		public line: int = NaN;
		/// <summary>
		/// The character on which the failure occurred.
		/// </summary>
		public column: int = NaN;
		/// <summary>
		/// The last sucessfully parsed object.
		/// </summary>
		public after: string = "";
	}