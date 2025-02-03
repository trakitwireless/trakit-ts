

	/**
	 * A container for the {@link behaviourLog}.
	 */
	export class RespBehaviourLogBatchDelete extends Response {
		/**
		 * Details about deleting/restoring the requested {@link BehaviourLog}.
		 */
		behaviourLogs: RespIdDeleted[] = [];
	}