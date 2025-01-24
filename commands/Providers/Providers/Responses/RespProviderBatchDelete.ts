

	/**
	 * A container for the <see cref="provider"/>.
	 */
	export class RespProviderBatchDelete extends Response {
		/**
		 * Details about deleting/restoring the requested <see cref="Provider"/>.
		 */
		public providers: RespIdendifierDeleted[] = [];
	}