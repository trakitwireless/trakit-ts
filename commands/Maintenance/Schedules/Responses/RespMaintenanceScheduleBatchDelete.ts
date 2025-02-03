

	/**
	 * A container for the {@link maintenanceSchedule}.
	 */
	export class RespMaintenanceScheduleBatchDelete extends Response {
		/**
		 * Details about deleting/restoring the requested {@link MaintenanceSchedule}.
		 */
		maintenanceSchedules: RespIdDeleted[] = [];
	}