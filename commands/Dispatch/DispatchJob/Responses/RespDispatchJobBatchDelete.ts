

	/**
	 * A container for the {@link dispatchJob}.
	 */
	export class RespDispatchJobBatchDelete extends Response {
		/**
		 * Details about deleting/restoring the requested {@link DispatchJob}.
		 */
		dispatchJobs: RespIdDeleted[] = [];
	}