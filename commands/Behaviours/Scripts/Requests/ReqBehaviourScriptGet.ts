

	/**
	 * Gets details of the specified <see cref="BehaviourScript"/>.
	 */
	export class ReqBehaviourScriptGet extends ReqBehaviourScript implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted <see cref="BehaviourScript"/> (if it exists).
		 */
		includeDeleted: boolean = false;
	}