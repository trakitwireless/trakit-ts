

	/**
	 * A container for the {@link icon}.
	 */
	export class RespIconBatchDelete extends Response {
		/**
		 * Details about deleting/restoring the requested {@link Icon}.
		 */
		icons: RespIdDeleted[] = [];
	}