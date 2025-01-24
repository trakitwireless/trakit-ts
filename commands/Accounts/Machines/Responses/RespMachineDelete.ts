

	/**
	 * A container for the <see cref="machine"/>.
	 */
	export class RespMachineDelete extends Response {
		/**
		 * Details about deleting/restoring the requested <see cref="Machine"/>.
		 */
		machine: RespIdDeleted;
	}