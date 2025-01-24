

	/**
	 * A container for the <see cref="icon"/>.
	 */
	export class RespIconBatchDelete extends Response {
		/**
		 * Details about deleting/restoring the requested <see cref="Icon"/>.
		 */
		icons: RespIdDeleted[] = [];
	}