

	/**
	 * A container for the <see cref="behaviourScript"/>.
	 */
	export class RespBehaviourScriptBatchDelete extends Response {
		/**
		 * Details about deleting/restoring the requested <see cref="BehaviourScript"/>.
		 */
		behaviourScripts: RespIdDeleted[] = [];
	}