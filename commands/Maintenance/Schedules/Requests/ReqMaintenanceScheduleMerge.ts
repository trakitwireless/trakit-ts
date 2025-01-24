

	/**
	 * Creates a new or updates an existing <see cref="MaintenanceSchedule"/>.
	 */
	export class ReqMaintenanceScheduleMerge extends Request implements IReqSingle {
		/**
		 * Parameters given to create or update a <see cref="MaintenanceSchedule"/>.
		 */
		maintenanceSchedule: ParamMaintenanceScheduleMerge;

		/**
		 *  
		 */
public string GetKey() => this.maintenanceSchedule?.id?.toString() ?? "";
	}