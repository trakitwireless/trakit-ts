

	/**
	 * Gets details of the specified {@link Icon}.
	 */
	export class ReqIconGet extends ReqIcon implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted {@link Icon} (if it exists).
		 */
		includeDeleted: boolean = false;
	}