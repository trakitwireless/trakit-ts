

	/**
	 * A container for the {@link dispatchTask}.
	 */
	export class RespDispatchTaskBatchDeleted extends Response {
		/**
		 * Details about deleting/restoring the requested {@link DispatchTask}.
		 */
		dispatchTasks: RespIdDeleted[] = [];
	}