
	/**
	 * These are the errors/warnings taken from the output of some other system.
	 */
	export class ErrorDetailExternals extends ErrorDetail {
		/**
		 * List of errors.
		 */
		errors: string[] = [];
		/**
		 * List of warnings.
		 */
		warnings: string[] = [];
		/**
		 * List of messages.
		 */
		messages: string[] = [];
	}