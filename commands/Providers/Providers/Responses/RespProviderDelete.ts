

	/**
	 * A container for the <see cref="provider"/>.
	 */
	export class RespProviderDelete extends Response {
		/**
		 * Details about deleting/restoring the requested <see cref="Provider"/>.
		 */
		public provider: RespIdendifierDeleted;
	}