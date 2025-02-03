

	/**
	 * A container for the {@link document}.
	 */
	export class RespDocumentDelete extends Response {
		/**
		 * Details about deleting/restoring the requested {@link Document}.
		 */
		document: RespIdDeleted;
	}