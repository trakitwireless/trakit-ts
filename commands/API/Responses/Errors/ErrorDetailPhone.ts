
	/// <summary>
	/// These are the details of a phone number input that failed to parse.
	/// </summary>
	export class ErrorDetailPhone extends ErrorDetailInput {
		/// <summary>
		/// The number that was parsed from the input.
		/// </summary>
		public number: ulong = NaN;
		/// <summary>
		/// The digital characters used to try to parse the number.
		/// </summary>
		public usable: string = "";
	}