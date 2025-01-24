

	/**
	 * A container for the <see cref="dispatchJob"/>.
	 */
	export class RespDispatchJobBatchDelete extends Response {
		/**
		 * Details about deleting/restoring the requested <see cref="DispatchJob"/>.
		 */
		public dispatchJobs: RespIdDeleted[] = [];
	}