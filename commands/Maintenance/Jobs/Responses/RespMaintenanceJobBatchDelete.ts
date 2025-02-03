

	/**
	 * A container for the {@link maintenanceJob}.
	 */
	export class RespMaintenanceJobBatchDelete extends Response {
		/**
		 * Details about deleting/restoring the requested {@link MaintenanceJob}.
		 */
		maintenanceJobs: RespIdDeleted[] = [];
	}