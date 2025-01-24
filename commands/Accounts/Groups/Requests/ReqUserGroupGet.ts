

	/**
	 * Gets details of the specified <see cref="UserGroup"/>.
	 */
	export class ReqUserGroupGet extends ReqUserGroup implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted <see cref="UserGroup"/> (if it exists).
		 */
		includeDeleted: boolean = false;
	}