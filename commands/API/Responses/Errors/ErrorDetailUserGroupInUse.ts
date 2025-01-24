
	/**
	 * Details for how many and which <see cref="User"/>s are still in the <see cref="UserGroup"/>.
	 */
	export class ErrorDetailUserGroupInUse extends ErrorDetail {
		/**
		 * A list of <see cref="User"/>s currently being referenced.
		 */
		users: string[] = [];
	}