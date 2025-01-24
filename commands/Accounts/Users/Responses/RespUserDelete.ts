

	/**
	 * A container for the <see cref="user"/>.
	 */
	export class RespUserDelete extends Response {
		/**
		 * Details about deleting/restoring the requested <see cref="User"/>.
		 */
		user: RespIdDeleted;
	}