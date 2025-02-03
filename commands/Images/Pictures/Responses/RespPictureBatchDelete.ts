

	/**
	 * A container for the {@link picture}.
	 */
	export class RespPictureBatchDelete extends Response {
		/**
		 * Details about deleting/restoring the requested {@link Picture}.
		 */
		pictures: RespIdDeleted[] = [];
	}