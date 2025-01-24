
	/**
	 * These are the details of an exception while trying to parse the JSON input.
	 */
	export class ErrorDetailParse extends ErrorDetail {
		/**
		 * The line number in the input string.
		 */
		public line: int = NaN;
		/**
		 * The character on which the failure occurred.
		 */
		public column: int = NaN;
		/**
		 * The last sucessfully parsed object.
		 */
		public after: string = "";
	}