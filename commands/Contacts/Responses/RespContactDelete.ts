

	/**
	 * A container for the <see cref="contact"/>.
	 */
	export class RespContactDelete extends Response {
		/**
		 * Details about deleting/restoring the requested <see cref="Contact"/>.
		 */
		contact: RespIdDeleted;
	}