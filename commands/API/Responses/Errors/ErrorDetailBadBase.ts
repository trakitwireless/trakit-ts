
	/**
	 * These details contain a list of bad keys, labels or tags, unique identifiers, or parameter names that caused the failure.
	 */
	export abstract class ErrorDetailBadBase<T> : ErrorDetail {
		/**
		 * List of bad ids or keys or whatever.
		 */
		invalid: T[] = [];
	}