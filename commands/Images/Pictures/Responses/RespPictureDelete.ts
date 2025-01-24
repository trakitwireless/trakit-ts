

	/**
	 * A container for the <see cref="picture"/>.
	 */
	export class RespPictureDelete extends Response {
		/**
		 * Details about deleting/restoring the requested <see cref="Picture"/>.
		 */
		picture: RespIdDeleted;
	}