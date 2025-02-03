

	/**
	 * Gets details of the specified {@link MaintenanceJob}.
	 */
	export class ReqMaintenanceJobGet extends ReqMaintenanceJob implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted {@link MaintenanceJob} (if it exists).
		 */
		includeDeleted: boolean = false;
	}