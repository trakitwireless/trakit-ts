


	/**
	 * Gets details of the specified {@link Place}.
	 */
	export class ReqPlaceGet extends ReqPlace implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted {@link Place} (if it exists).
		 */
		includeDeleted: boolean = false;
	}