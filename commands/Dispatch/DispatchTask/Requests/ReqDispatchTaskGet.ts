

	/**
	 * Gets details of the specified {@link DispatchTask}.
	 */
	export class ReqDispatchTaskGet extends ReqDispatchTask implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted {@link DispatchTask} (if it exists).
		 */
		includeDeleted: boolean = false;
	}