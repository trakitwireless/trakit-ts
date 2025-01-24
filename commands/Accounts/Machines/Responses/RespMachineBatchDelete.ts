

	/**
	 * A container for the <see cref="machine"/>.
	 */
	export class RespMachineBatchDelete extends Response {
		/**
		 * Details about deleting/restoring the requested <see cref="Machine"/>.
		 */
		public machines: RespIdDeleted[] = [];
	}