

	/**
	 * A container for the {@link user}.
	 */
	export class RespUserBatchDelete extends Response {
		/**
		 * Details about deleting/restoring the requested {@link User}.
		 */
		users: RespIdDeleted[] = [];
	}