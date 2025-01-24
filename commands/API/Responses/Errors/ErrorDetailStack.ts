
	/**
	 * For unhandled exceptions, a full stack trace may be given.
	 *  <remarks>
	 * Only available for some of the beta services.
	 *  </remarks>
	 */
	export class ErrorDetailStack extends ErrorDetail {
		/**
		 * Exception message.
		 */
		message: string = "";
		/**
		 * The full stack trace if available.
		 */
		stack: string = "";
	}