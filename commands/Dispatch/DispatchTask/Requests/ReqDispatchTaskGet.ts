

	/**
	 * Gets details of the specified <see cref="DispatchTask"/>.
	 */
	export class ReqDispatchTaskGet extends ReqDispatchTask implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted <see cref="DispatchTask"/> (if it exists).
		 */
		public includeDeleted: boolean = false;
	}