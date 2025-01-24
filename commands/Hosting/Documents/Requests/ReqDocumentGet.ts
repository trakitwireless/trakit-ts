

	/**
	 * Gets details of the specified <see cref="Document"/>.
	 */
	export class ReqDocumentGet extends ReqDocument implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted <see cref="Document"/> (if it exists).
		 */
		includeDeleted: boolean = false;
	}