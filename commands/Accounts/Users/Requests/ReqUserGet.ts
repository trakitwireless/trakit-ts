

	/**
	 * Gets details of the specified {@link User}.
	 */
	export class ReqUserGet extends ReqUser implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted {@link User} (if it exists).
		 */
		includeDeleted: boolean = false;
	}