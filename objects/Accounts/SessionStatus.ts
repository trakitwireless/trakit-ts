/**
 * Current state of a session
 */
export enum SessionStatus {
	/**
	 * Invalid session reference.
	 */
	notFound = "notFound",
	/**
	 * Session created but user hasn't logged-in yet.
	 */
	created = "created",
	/**
	 * User is logged-in and one or more WebSocket connections are open.
	 */
	active = "active",
	/**
	 * User is logged-in but no WebSocket connections are open.
	 */
	idle = "idle",
	/**
	 * User is logged-in and password is expired and needs to be changed before any commands can be processed.
	 */
	passwordExpired = "passwordExpired",
	/**
	 * Session is being killed because it has expired.
	 */
	expired = "expired",
}