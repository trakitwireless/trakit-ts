

	/**
	 * A container for the {@link user}.
	 */
	export class RespUserDelete extends Response {
		/**
		 * Details about deleting/restoring the requested {@link User}.
		 */
		user: RespIdDeleted;
	}