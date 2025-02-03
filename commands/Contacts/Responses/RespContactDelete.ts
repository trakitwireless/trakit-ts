

	/**
	 * A container for the {@link contact}.
	 */
	export class RespContactDelete extends Response {
		/**
		 * Details about deleting/restoring the requested {@link Contact}.
		 */
		contact: RespIdDeleted;
	}