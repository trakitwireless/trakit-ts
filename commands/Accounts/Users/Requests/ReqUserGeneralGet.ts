

	/**
	 * Gets details of the specified {@link UserGeneral}.
	 */
	export class ReqUserGeneralGet extends ReqUser implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted {@link UserGeneral} (if it exists).
		 */
		includeDeleted: boolean = false;
	}