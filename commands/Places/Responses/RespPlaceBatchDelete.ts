


	/**
	 * A container for the {@link place}.
	 */
	export class RespPlaceBatchDelete extends Response {
		/**
		 * Details about deleting/restoring the requested {@link Place}.
		 */
		places: RespIdDeleted[] = [];
	}