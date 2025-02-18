/**
 * Definition for the kinds of permission escalations.
 */
export enum PermissionEscalationType {
	/**
	 * Increase in privileges.
	 */
	vertical = "vertical",
	/**
	 * Increase in access to an object.
	 */
	horizontal = "horizontal",
}