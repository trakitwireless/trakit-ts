

	/**
	 * A container for the <see cref="picture"/>.
	 */
	export class RespPictureBatchDelete extends Response {
		/**
		 * Details about deleting/restoring the requested <see cref="Picture"/>.
		 */
		public pictures: RespIdDeleted[] = [];
	}