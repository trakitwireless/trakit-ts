

	/**
	 * A container for the {@link maintenanceJob}.
	 */
	export class RespMaintenanceJobDelete extends Response {
		/**
		 * Details about deleting/restoring the requested {@link MaintenanceJob}.
		 */
		maintenanceJob: RespIdDeleted;
	}