

	/**
	 * A container for the <see cref="maintenanceSchedule"/>.
	 */
	export class RespMaintenanceScheduleDelete extends Response {
		/**
		 * Details about deleting/restoring the requested <see cref="MaintenanceSchedule"/>.
		 */
		public maintenanceSchedule: RespIdDeleted;
	}