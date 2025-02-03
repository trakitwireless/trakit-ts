

	/**
	 * A container for the {@link behaviour}.
	 */
	export class RespBehaviourDelete extends Response {
		/**
		 * Details about deleting/restoring the requested {@link Behaviour}.
		 */
		behaviour: RespIdDeleted;
	}