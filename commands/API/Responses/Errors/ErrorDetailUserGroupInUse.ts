
	/**
	 * Details for how many and which {@link User}s are still in the {@link UserGroup}.
	 */
	export class ErrorDetailUserGroupInUse extends ErrorDetail {
		/**
		 * A list of {@link User}s currently being referenced.
		 */
		users: string[] = [];
	}