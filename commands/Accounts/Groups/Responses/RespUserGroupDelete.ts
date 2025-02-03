

	/**
	 * A container for the {@link userGroup}.
	 */
	export class RespUserGroupDelete extends Response {
		/**
		 * Details about deleting/restoring the requested {@link UserGroup}.
		 */
		userGroup: RespIdDeleted;
	}