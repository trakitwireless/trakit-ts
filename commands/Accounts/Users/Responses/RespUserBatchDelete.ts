

	/**
	 * A container for the <see cref="user"/>.
	 */
	export class RespUserBatchDelete extends Response {
		/**
		 * Details about deleting/restoring the requested <see cref="User"/>.
		 */
		public users: RespIdDeleted[] = [];
	}