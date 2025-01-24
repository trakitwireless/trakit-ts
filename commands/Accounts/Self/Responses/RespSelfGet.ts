

	/**
	 * A container for the <see cref="User"/> or <see cref="Machine"/> of the current session.
	 */
	export class RespSelfGet extends Response {
		/**
		 * Your session identifier.
		 */
		ghostId: string = "";
		/**
		 * The timestamp of when this session expires.
		 */
		expiry: Date = DATE();
		/**
		 * This session's <see cref="User"/> details (if the service is being used by a <see cref="User"/>).
		 * If this value is not present, then the session is not yet authenticated.
		 */
		user: SelfUser;
		/**
		 * This <see cref="Machine"/>'s details (if the service is being used by a <see cref="Machine"/>).
		 * If this value is not present, then the session is not a machine account.
		 */
		machine: SelfMachine;
		/**
		 * This <see cref="User"/>'s <see cref="CompanyPolicies.sessionPolicy"/>.
		 */
		sessionPolicy: SessionPolicy;
		/**
		 * This <see cref="User"/>'s <see cref="CompanyPolicies.passwordPolicy"/>.
		 */
		passwordPolicy: PasswordPolicy;
		/**
		 * The UTC date/time of the server hosting the connection.
		 */
		serverTime: Date = DATE();
	}