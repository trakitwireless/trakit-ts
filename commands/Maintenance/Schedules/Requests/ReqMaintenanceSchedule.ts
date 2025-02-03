

	/**
	 * A container for the {@link maintenanceSchedule} object.
	 */
	export abstract class ReqMaintenanceSchedule extends Request implements IReqSingle {
		/**
		 * An object to contain the "id" of the {@link MaintenanceSchedule}.
		 */
		maintenanceSchedule: ParamId;

		/**
		 *  
		 */
public string GetKey() => this.maintenanceSchedule?.id.toString() ?? "";
	}