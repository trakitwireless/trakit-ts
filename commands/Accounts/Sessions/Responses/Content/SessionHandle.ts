

	/**
	 * A container class used to house the "handle" identifying a <see cref="Session"/>.
	 */
	export class SessionHandle {
		/**
		 * A "handle" identifying a resource.
		 */
		public handle: string = "";
		/**
		 * Identifier of the <see cref="Company"/> to which this object belongs
		 * {@link Company.id}
		 */
		public company: ulong = NaN;
		/**
		 * The <see cref="User"/> to which the <see cref="Session"/> belongs.
		 * {@link User.login}
		 */
		public login: string = "";
		/**
		 * A timestamp for when the <see cref="Session"/> will expire.
		 */
		public expiry: Date = DATE();
	}