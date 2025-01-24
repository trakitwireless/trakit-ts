


	/**
	 * A container for the <see cref="place"/>.
	 */
	export class RespPlaceBatchDelete extends Response {
		/**
		 * Details about deleting/restoring the requested <see cref="Place"/>.
		 */
		places: RespIdDeleted[] = [];
	}