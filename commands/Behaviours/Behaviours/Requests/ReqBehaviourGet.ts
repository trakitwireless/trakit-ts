

	/**
	 * Gets details of the specified <see cref="Behaviour"/>.
	 */
	export class ReqBehaviourGet extends ReqBehaviour implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted <see cref="Behaviour"/> (if it exists).
		 */
		public includeDeleted: boolean = false;
	}