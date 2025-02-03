

	/**
	 * Gets details of the specified {@link DispatchJob}.
	 */
	export class ReqDispatchJobGet extends ReqDispatchJob implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted {@link DispatchJob} (if it exists).
		 */
		includeDeleted: boolean = false;
	}