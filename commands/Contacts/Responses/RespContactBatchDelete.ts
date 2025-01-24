

	/**
	 * A container for the <see cref="contact"/>.
	 */
	export class RespContactBatchDelete extends Response {
		/**
		 * Details about deleting/restoring the requested <see cref="Contact"/>.
		 */
		public contacts: RespIdDeleted[] = [];
	}