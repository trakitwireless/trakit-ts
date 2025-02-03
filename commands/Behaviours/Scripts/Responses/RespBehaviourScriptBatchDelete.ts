

	/**
	 * A container for the {@link behaviourScript}.
	 */
	export class RespBehaviourScriptBatchDelete extends Response {
		/**
		 * Details about deleting/restoring the requested {@link BehaviourScript}.
		 */
		behaviourScripts: RespIdDeleted[] = [];
	}