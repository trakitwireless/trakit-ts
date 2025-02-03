


	/**
	 * Gets details of the specified {@link FormResult}.
	 */
	export class ReqFormResultGet extends ReqFormResult implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted {@link FormResult} (if it exists).
		 */
		includeDeleted: boolean = false;
	}