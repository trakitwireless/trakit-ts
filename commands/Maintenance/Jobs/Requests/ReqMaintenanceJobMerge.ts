

	/**
	 * Creates a new or updates an existing <see cref="MaintenanceJob"/>.
	 */
	export class ReqMaintenanceJobMerge extends Request implements IReqSingle {
		/**
		 * Parameters given to create or update a <see cref="MaintenanceJob"/>.
		 */
		maintenanceJob: ParamMaintenanceJobMerge;

		/**
		 *  
		 */
public string GetKey() => this.maintenanceJob?.id?.toString() ?? "";
	}