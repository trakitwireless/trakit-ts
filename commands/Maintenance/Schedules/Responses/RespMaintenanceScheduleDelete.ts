

	/**
	 * A container for the {@link maintenanceSchedule}.
	 */
	export class RespMaintenanceScheduleDelete extends Response {
		/**
		 * Details about deleting/restoring the requested {@link MaintenanceSchedule}.
		 */
		maintenanceSchedule: RespIdDeleted;
	}