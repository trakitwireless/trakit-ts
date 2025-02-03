

	/**
	 * A container for the {@link User} of the current session.
	 */
	export class RespSessionDelete extends Response {
		/**
		 * An object which contains the {@link Session.handle}, related {@link User.login}, and owning {@link User.company} id.
		 */
		session: SessionHandle;
	}