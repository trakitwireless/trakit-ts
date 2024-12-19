
	/// <summary>
	/// For batch commands, these are the errors thrown by the sub-command.
	/// </summary>
	export class ErrorDetailBatch extends ErrorDetail {
		/// <summary>
		/// Index-presevered list of sub-command errors.
		/// </summary>
		public errors: Response[] = [];
	}