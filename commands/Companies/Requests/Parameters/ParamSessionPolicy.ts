

	/**
	 * Parameter values for creating a new or updating an existing <see cref="SessionPolicy"/>.
	 */
	export class ParamSessionPolicy extends ParamMerge {
		/**
		 * The list of applications users are allowed to use to create sessions.
		 */
		public applications: string[] = [];
		/**
		 * Restrict session creation to only the provided IPv4 ranges (		/**
		 * Defines the behaviour of the system when a user creates multiple sessions.
		 */
		public multiUser?: SessionMultiUser;
		/**
		 * Defines whether a session should be automatically killed when the connection breaks.
		 */
		public idleAllowed: boolean = false;
		/**
		 * The lifetime duration of a session in minutes.
		 */
		public expireTimeout: ushort = NaN;
		/**
		 * The maximum number of sessions allowed per user.
		 */
		public maxSessions: byte = NaN;
	}