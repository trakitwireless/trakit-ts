

	/**
	 * A container for the {@link machine}.
	 */
	export class RespMachineDelete extends Response {
		/**
		 * Details about deleting/restoring the requested {@link Machine}.
		 */
		machine: RespIdDeleted;
	}