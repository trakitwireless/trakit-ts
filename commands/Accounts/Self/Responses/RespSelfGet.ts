

	/**
	 * A container for the <see cref="User"/> or <see cref="Machine"/> of the current session.
	 */
	export class RespSelfGet extends Response {
		/**
		 * Your session identifier.
		 */
		public ghostId: string = "";
		/**
		 * The timestamp of when this session expires.
		 */
		public expiry: Date = DATE();
		/**
		 * This session's <see cref="User"/> details (if the service is being used by a <see cref="User"/>).
		 * If this value is not present, then the session is not yet authenticated.
		 */
		public user: SelfUser;
		/**
		 * This <see cref="Machine"/>'s details (if the service is being used by a <see cref="Machine"/>).
		 * If this value is not present, then the session is not a machine account.
		 */
		public machine: SelfMachine;
		/**
		 * This <see cref="User"/>'s <see cref="CompanyPolicies.sessionPolicy"/>.
		 */
		public sessionPolicy: SessionPolicy;
		/**
		 * This <see cref="User"/>'s <see cref="CompanyPolicies.passwordPolicy"/>.
		 */
		public passwordPolicy: PasswordPolicy;
		/**
		 * The UTC date/time of the server hosting the connection.
		 */
		public serverTime: Date = DATE();
	}