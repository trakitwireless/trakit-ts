

	/**
	 * A container for the {@link machine}.
	 */
	export class RespMachineBatchDelete extends Response {
		/**
		 * Details about deleting/restoring the requested {@link Machine}.
		 */
		machines: RespIdDeleted[] = [];
	}