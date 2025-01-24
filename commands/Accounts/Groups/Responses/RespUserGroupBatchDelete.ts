

	/**
	 * A container for the <see cref="userGroup"/>.
	 */
	export class RespUserGroupBatchDelete extends Response {
		/**
		 * Details about deleting/restoring the requested <see cref="UserGroup"/>.
		 */
		userGroups: RespIdDeleted[] = [];
	}