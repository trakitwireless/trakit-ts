

	/**
	 * A container for the {@link picture}.
	 */
	export class RespPictureDelete extends Response {
		/**
		 * Details about deleting/restoring the requested {@link Picture}.
		 */
		picture: RespIdDeleted;
	}