

	/**
	 * Gets details of the specified <see cref="Machine"/>.
	 */
	export class ReqMachineGet extends ReqMachine implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted <see cref="Machine"/> (if it exists).
		 */
		includeDeleted: boolean = false;
	}