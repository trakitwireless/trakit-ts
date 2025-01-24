

	/**
	 * A container for the <see cref="dispatchJob"/>.
	 */
	export class RespDispatchJobDelete extends Response {
		/**
		 * Details about deleting/restoring the requested <see cref="DispatchJob"/>.
		 */
		public dispatchJob: RespIdDeleted;
	}