

	/**
	 * A container for the {@link company}.
	 */
	export class RespCompanyDelete extends Response {
		/**
		 * Details about deleting/restoring the requested {@link Company}.
		 */
		company: RespIdDeleted;
	}