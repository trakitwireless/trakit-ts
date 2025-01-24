

	/**
	 * A container for the <see cref="behaviour"/>.
	 */
	export class RespBehaviourDelete extends Response {
		/**
		 * Details about deleting/restoring the requested <see cref="Behaviour"/>.
		 */
		public behaviour: RespIdDeleted;
	}