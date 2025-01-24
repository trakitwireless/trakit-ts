
	/**
	 * The levels of permission available.
	 */
	export enum PermissionLevel {
		/**
		 * Read-only access, no changes allowed.
		 */
		read,
		/**
		 * Read and write access, but things cannot be deleted or new things created.
		 */
		update,
		/**
		 * Full control to read, write, delete and create things.
		 */
		full,
	}