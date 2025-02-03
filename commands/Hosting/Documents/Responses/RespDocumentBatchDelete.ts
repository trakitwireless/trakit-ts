

	/**
	 * A container for the {@link document}.
	 */
	export class RespDocumentBatchDelete extends Response {
		/**
		 * Details about deleting/restoring the requested {@link Document}.
		 */
		documents: RespIdDeleted[] = [];
	}