


	/**
	 * A container for the <see cref="formResult"/>.
	 */
	export class RespFormResultBatchDelete extends Response {
		/**
		 * Details about deleting/restoring the requested <see cref="FormResult"/>.
		 */
		public formResults: RespIdDeleted[] = [];
	}