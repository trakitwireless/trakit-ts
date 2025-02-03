

	/**
	 * Gets details of the specified {@link Machine}.
	 */
	export class ReqMachineGet extends ReqMachine implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted {@link Machine} (if it exists).
		 */
		includeDeleted: boolean = false;
	}