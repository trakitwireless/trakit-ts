
	/**
	 * For batch commands, these are the errors thrown by the sub-command.
	 */
	export class ErrorDetailBatch extends ErrorDetail {
		/**
		 * Index-presevered list of sub-command errors.
		 */
		errors: Response[] = [];
	}