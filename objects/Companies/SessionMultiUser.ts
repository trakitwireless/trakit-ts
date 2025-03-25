/**
 * Defines the behaviour of the system when a user creates multiple sessions.
 */
export enum SessionMultiUser {
	/**
	 * Allow users to create multiple simultaneous sessions.
	 */
	allow = "allow",
	/**
	 * Deny users from creating new sessions if they already have an active session.
	 */
	deny = "deny",
	/**
	 * Allow users to create a new session, but automatically kill the previous session.
	 */
	replace = "replace",
}