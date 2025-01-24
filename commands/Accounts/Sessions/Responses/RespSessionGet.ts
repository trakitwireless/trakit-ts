

	/**
	 * A container for the <see cref="User"/> of the current session.
	 */
	export class RespSessionGet extends Response {
		/**
		 * The requested <see cref="Session"/> details.
		 */
		session: Session;
	}