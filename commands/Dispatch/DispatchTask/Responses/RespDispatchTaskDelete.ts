

	/**
	 * A container for the {@link dispatchTask}.
	 */
	export class RespDispatchTaskDelete extends Response {
		/**
		 * Details about deleting/restoring the requested {@link DispatchTask}.
		 */
		dispatchTask: RespIdDeleted;
	}