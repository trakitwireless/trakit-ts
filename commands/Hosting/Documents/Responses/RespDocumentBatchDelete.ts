

	/**
	 * A container for the <see cref="document"/>.
	 */
	export class RespDocumentBatchDelete extends Response {
		/**
		 * Details about deleting/restoring the requested <see cref="Document"/>.
		 */
		documents: RespIdDeleted[] = [];
	}