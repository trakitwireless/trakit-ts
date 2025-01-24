

	/**
	 * A container for the <see cref="dispatchTask"/>.
	 */
	export class RespDispatchTaskBatchDeleted extends Response {
		/**
		 * Details about deleting/restoring the requested <see cref="DispatchTask"/>.
		 */
		public dispatchTasks: RespIdDeleted[] = [];
	}