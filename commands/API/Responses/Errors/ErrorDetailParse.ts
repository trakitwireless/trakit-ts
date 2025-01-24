
	/**
	 * These are the details of an exception while trying to parse the JSON input.
	 */
	export class ErrorDetailParse extends ErrorDetail {
		/**
		 * The line number in the input string.
		 */
		line: int = NaN;
		/**
		 * The character on which the failure occurred.
		 */
		column: int = NaN;
		/**
		 * The last sucessfully parsed object.
		 */
		after: string = "";
	}