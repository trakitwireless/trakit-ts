

	/**
	 * Gets details of the specified {@link Behaviour}.
	 */
	export class ReqBehaviourGet extends ReqBehaviour implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted {@link Behaviour} (if it exists).
		 */
		includeDeleted: boolean = false;
	}