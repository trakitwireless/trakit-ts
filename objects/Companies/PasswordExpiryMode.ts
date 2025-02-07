/**
 * Defines how User passwords expire.
 */
export enum PasswordExpiryMode {
	/**
	 * Passwords never expire.
	 */
	never = "never",
	/**
	 * Passwords expire after a defined number of days.
	 */
	days = "days",
	/**
	 * Passwords expire after a defined number of successful logins.
	 */
	sessions = "sessions",
}