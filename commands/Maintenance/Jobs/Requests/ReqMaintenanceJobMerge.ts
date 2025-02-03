

	/**
	 * Creates a new or updates an existing {@link MaintenanceJob}.
	 */
	export class ReqMaintenanceJobMerge extends Request implements IReqSingle {
		/**
		 * Parameters given to create or update a {@link MaintenanceJob}.
		 */
		maintenanceJob: ParamMaintenanceJobMerge;

		/**
		 *  
		 */
public string GetKey() => this.maintenanceJob?.id?.toString() ?? "";
	}