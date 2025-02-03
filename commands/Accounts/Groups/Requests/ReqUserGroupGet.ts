

	/**
	 * Gets details of the specified {@link UserGroup}.
	 */
	export class ReqUserGroupGet extends ReqUserGroup implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted {@link UserGroup} (if it exists).
		 */
		includeDeleted: boolean = false;
	}