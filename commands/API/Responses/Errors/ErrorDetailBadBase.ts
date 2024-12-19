
	/// <summary>
	/// These details contain a list of bad keys, labels or tags, unique identifiers, or parameter names that caused the failure.
	/// </summary>
	export abstract class ErrorDetailBadBase<T> : ErrorDetail {
		/// <summary>
		/// List of bad ids or keys or whatever.
		/// </summary>
		public invalid: T[] = [];
	}