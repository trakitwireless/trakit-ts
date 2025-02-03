

	/**
	 * A container for the {@link userGroup}.
	 */
	export class RespUserGroupBatchDelete extends Response {
		/**
		 * Details about deleting/restoring the requested {@link UserGroup}.
		 */
		userGroups: RespIdDeleted[] = [];
	}