

	/**
	 * A container for the <see cref="behaviourLog"/>.
	 */
	export class RespBehaviourLogBatchDelete extends Response {
		/**
		 * Details about deleting/restoring the requested <see cref="BehaviourLog"/>.
		 */
		public behaviourLogs: RespIdDeleted[] = [];
	}