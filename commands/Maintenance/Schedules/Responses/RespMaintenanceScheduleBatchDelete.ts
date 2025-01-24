

	/**
	 * A container for the <see cref="maintenanceSchedule"/>.
	 */
	export class RespMaintenanceScheduleBatchDelete extends Response {
		/**
		 * Details about deleting/restoring the requested <see cref="MaintenanceSchedule"/>.
		 */
		maintenanceSchedules: RespIdDeleted[] = [];
	}