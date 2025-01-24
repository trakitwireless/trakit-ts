
	/**
	 * These are the details of an enum input that failed to parse.
	 */
	export class ErrorDetailEnum extends ErrorDetailInput {
		/**
		 * This is a list of possible values the input should have been.
		 */
		valid: string[] = [];
	}