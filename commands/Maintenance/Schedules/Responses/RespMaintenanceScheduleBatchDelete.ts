

	/// <summary>
	/// A container for the <see cref="maintenanceSchedule"/>.
	/// </summary>
	export class RespMaintenanceScheduleBatchDelete extends Response {
		/// <summary>
		/// Details about deleting/restoring the requested <see cref="MaintenanceSchedule"/>.
		/// </summary>
		public maintenanceSchedules: RespIdDeleted[] = [];
	}