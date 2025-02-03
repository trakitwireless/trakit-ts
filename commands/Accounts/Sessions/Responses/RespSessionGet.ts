

	/**
	 * A container for the {@link User} of the current session.
	 */
	export class RespSessionGet extends Response {
		/**
		 * The requested {@link Session} details.
		 */
		session: Session;
	}