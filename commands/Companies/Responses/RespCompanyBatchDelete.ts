

	/**
	 * A container for the <see cref="company"/>.
	 */
	export class RespCompanyBatchDelete extends Response {
		/**
		 * Details about deleting/restoring the requested <see cref="Company"/>.
		 */
		public companies: RespIdDeleted[] = [];
	}