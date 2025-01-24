

	/**
	 * A container for the <see cref="dispatchTask"/>.
	 */
	export class RespDispatchTaskDelete extends Response {
		/**
		 * Details about deleting/restoring the requested <see cref="DispatchTask"/>.
		 */
		public dispatchTask: RespIdDeleted;
	}