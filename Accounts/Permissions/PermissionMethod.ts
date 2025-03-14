/**
 * How a permission is applied.
 */
export enum PermissionMethod {
	/**
	 * Permission is given.
	 */
	grant = "grant",
	/**
	 * Permission is taken away.
	 */
	revoke = "revoke",
}