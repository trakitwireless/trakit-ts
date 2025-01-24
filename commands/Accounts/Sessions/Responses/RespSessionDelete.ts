

	/**
	 * A container for the <see cref="User"/> of the current session.
	 */
	export class RespSessionDelete extends Response {
		/**
		 * An object which contains the <see cref="Session.handle"/>, related <see cref="User.login"/>, and owning <see cref="User.company"/> id.
		 */
		public session: SessionHandle;
	}