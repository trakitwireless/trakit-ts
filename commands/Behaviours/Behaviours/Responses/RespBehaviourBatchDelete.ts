

	/**
	 * A container for the {@link behaviour}.
	 */
	export class RespBehaviourBatchDelete extends Response {
		/**
		 * Details about deleting/restoring the requested {@link Behaviour}.
		 */
		behaviours: RespIdDeleted[] = [];
	}