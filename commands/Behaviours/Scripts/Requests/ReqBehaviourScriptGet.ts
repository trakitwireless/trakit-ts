

	/**
	 * Gets details of the specified {@link BehaviourScript}.
	 */
	export class ReqBehaviourScriptGet extends ReqBehaviourScript implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted {@link BehaviourScript} (if it exists).
		 */
		includeDeleted: boolean = false;
	}