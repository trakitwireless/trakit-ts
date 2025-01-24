

	/**
	 * Gets details of the specified <see cref="Icon"/>.
	 */
	export class ReqIconGet extends ReqIcon implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted <see cref="Icon"/> (if it exists).
		 */
		includeDeleted: boolean = false;
	}