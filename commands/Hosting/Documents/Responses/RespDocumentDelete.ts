

	/**
	 * A container for the <see cref="document"/>.
	 */
	export class RespDocumentDelete extends Response {
		/**
		 * Details about deleting/restoring the requested <see cref="Document"/>.
		 */
		document: RespIdDeleted;
	}