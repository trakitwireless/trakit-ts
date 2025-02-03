

	/**
	 * Creates a new or updates an existing {@link MaintenanceSchedule}.
	 */
	export class ReqMaintenanceScheduleMerge extends Request implements IReqSingle {
		/**
		 * Parameters given to create or update a {@link MaintenanceSchedule}.
		 */
		maintenanceSchedule: ParamMaintenanceScheduleMerge;

		/**
		 *  
		 */
public string GetKey() => this.maintenanceSchedule?.id?.toString() ?? "";
	}