

	/**
	 * A container for the <see cref="maintenanceSchedule"/> object.
	 */
	export abstract class ReqMaintenanceSchedule extends Request implements IReqSingle {
		/**
		 * An object to contain the "id" of the <see cref="MaintenanceSchedule"/>.
		 */
		public maintenanceSchedule: ParamId;

		/**
		 *  
		 */
public string GetKey() => this.maintenanceSchedule?.id.toString() ?? "";
	}