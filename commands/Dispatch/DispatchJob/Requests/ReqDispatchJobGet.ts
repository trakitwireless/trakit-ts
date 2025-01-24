

	/**
	 * Gets details of the specified <see cref="DispatchJob"/>.
	 */
	export class ReqDispatchJobGet extends ReqDispatchJob implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted <see cref="DispatchJob"/> (if it exists).
		 */
		includeDeleted: boolean = false;
	}