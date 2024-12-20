

	/// <summary>
	/// A container for the <see cref="maintenanceJob"/>.
	/// </summary>
	export class RespMaintenanceJobDelete extends Response {
		/// <summary>
		/// Details about deleting/restoring the requested <see cref="MaintenanceJob"/>.
		/// </summary>
		public maintenanceJob: RespIdDeleted;
	}