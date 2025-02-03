

	/**
	 * A container for the {@link dispatchJob}.
	 */
	export class RespDispatchJobDelete extends Response {
		/**
		 * Details about deleting/restoring the requested {@link DispatchJob}.
		 */
		dispatchJob: RespIdDeleted;
	}