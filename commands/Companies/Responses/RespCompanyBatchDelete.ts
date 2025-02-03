

	/**
	 * A container for the {@link company}.
	 */
	export class RespCompanyBatchDelete extends Response {
		/**
		 * Details about deleting/restoring the requested {@link Company}.
		 */
		companies: RespIdDeleted[] = [];
	}