

	/**
	 * A container for the <see cref="userGroup"/>.
	 */
	export class RespUserGroupDelete extends Response {
		/**
		 * Details about deleting/restoring the requested <see cref="UserGroup"/>.
		 */
		public userGroup: RespIdDeleted;
	}