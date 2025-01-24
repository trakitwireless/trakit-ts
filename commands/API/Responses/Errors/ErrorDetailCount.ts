
	/**
	 * These are the details when a number of things create the exception.
	 */
	export class ErrorDetailCount extends ErrorDetail {
		/**
		 * The number of items that failed, or number of items preventing success.
		 */
		public count: int = NaN;
	}