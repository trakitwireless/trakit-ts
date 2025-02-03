

	/**
	 * Gets details of the specified {@link Document}.
	 */
	export class ReqDocumentGet extends ReqDocument implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted {@link Document} (if it exists).
		 */
		includeDeleted: boolean = false;
	}