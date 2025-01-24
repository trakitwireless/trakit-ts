

	/**
	 * A container for the <see cref="behaviourScript"/>.
	 */
	export class RespBehaviourScriptDelete extends Response {
		/**
		 * Details about deleting/restoring the requested <see cref="BehaviourScript"/>.
		 */
		behaviourScript: RespIdDeleted;
	}