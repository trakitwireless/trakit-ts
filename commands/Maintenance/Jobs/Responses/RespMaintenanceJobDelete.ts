

	/**
	 * A container for the <see cref="maintenanceJob"/>.
	 */
	export class RespMaintenanceJobDelete extends Response {
		/**
		 * Details about deleting/restoring the requested <see cref="MaintenanceJob"/>.
		 */
		maintenanceJob: RespIdDeleted;
	}