
	/// <summary>
	/// These are the details when a number of things create the exception.
	/// </summary>
	export class ErrorDetailCount extends ErrorDetail {
		/// <summary>
		/// The number of items that failed, or number of items preventing success.
		/// </summary>
		public count: int = NaN;
	}