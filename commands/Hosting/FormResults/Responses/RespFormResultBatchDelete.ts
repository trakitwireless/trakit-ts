


	/**
	 * A container for the {@link formResult}.
	 */
	export class RespFormResultBatchDelete extends Response {
		/**
		 * Details about deleting/restoring the requested {@link FormResult}.
		 */
		formResults: RespIdDeleted[] = [];
	}