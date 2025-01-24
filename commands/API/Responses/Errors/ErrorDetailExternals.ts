
	/**
	 * These are the errors/warnings taken from the output of some other system.
	 */
	export class ErrorDetailExternals extends ErrorDetail {
		/**
		 * List of errors.
		 */
		public errors: string[] = [];
		/**
		 * List of warnings.
		 */
		public warnings: string[] = [];
		/**
		 * List of messages.
		 */
		public messages: string[] = [];
	}