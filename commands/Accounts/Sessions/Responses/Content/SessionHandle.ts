

	/**
	 * A container class used to house the "handle" identifying a {@link Session}.
	 */
	export class SessionHandle {
		/**
		 * A "handle" identifying a resource.
		 */
		handle: string = "";
		/**
		 * Identifier of the {@link Company} to which this object belongs
		 * {@link Company.id}
		 */
		company: ulong = NaN;
		/**
		 * The {@link User} to which the {@link Session} belongs.
		 * {@link User.login}
		 */
		login: string = "";
		/**
		 * A timestamp for when the {@link Session} will expire.
		 */
		expiry: Date = DATE();
	}