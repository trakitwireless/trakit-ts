

	/**
	 * A container for the {@link User} or {@link Machine} of the current session.
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
		 * This session's {@link User} details (if the service is being used by a {@link User}).
		 * If this value is not present, then the session is not yet authenticated.
		 */
		user: SelfUser;
		/**
		 * This {@link Machine}'s details (if the service is being used by a {@link Machine}).
		 * If this value is not present, then the session is not a machine account.
		 */
		machine: SelfMachine;
		/**
		 * This {@link User}'s {@link CompanyPolicies.sessionPolicy}.
		 */
		sessionPolicy: SessionPolicy;
		/**
		 * This {@link User}'s {@link CompanyPolicies.passwordPolicy}.
		 */
		passwordPolicy: PasswordPolicy;
		/**
		 * The UTC date/time of the server hosting the connection.
		 */
		serverTime: Date = DATE();
	}