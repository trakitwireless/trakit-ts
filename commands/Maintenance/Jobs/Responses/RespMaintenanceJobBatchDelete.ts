

	/// <summary>
	/// A container for the <see cref="maintenanceJob"/>.
	/// </summary>
	export class RespMaintenanceJobBatchDelete extends Response {
		/// <summary>
		/// Details about deleting/restoring the requested <see cref="MaintenanceJob"/>.
		/// </summary>
		public maintenanceJobs: RespIdDeleted[] = [];
	}