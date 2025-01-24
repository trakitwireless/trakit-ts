

	/**
	 * A container for the <see cref="maintenanceJob"/>.
	 */
	export class RespMaintenanceJobBatchDelete extends Response {
		/**
		 * Details about deleting/restoring the requested <see cref="MaintenanceJob"/>.
		 */
		maintenanceJobs: RespIdDeleted[] = [];
	}