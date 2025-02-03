

	/**
	 * A container for the {@link contact}.
	 */
	export class RespContactBatchDelete extends Response {
		/**
		 * Details about deleting/restoring the requested {@link Contact}.
		 */
		contacts: RespIdDeleted[] = [];
	}