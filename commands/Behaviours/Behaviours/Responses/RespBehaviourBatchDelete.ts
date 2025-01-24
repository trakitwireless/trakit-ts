

	/**
	 * A container for the <see cref="behaviour"/>.
	 */
	export class RespBehaviourBatchDelete extends Response {
		/**
		 * Details about deleting/restoring the requested <see cref="Behaviour"/>.
		 */
		behaviours: RespIdDeleted[] = [];
	}