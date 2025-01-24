

	/**
	 * A container for the <see cref="maintenanceJob"/> object.
	 */
	export abstract class ReqMaintenanceJob extends Request implements IReqSingle {
		/**
		 * An object to contain the "id" of the <see cref="MaintenanceJob"/>.
		 */
		maintenanceJob: ParamId;

		/**
		 *  
		 */
public string GetKey() => this.maintenanceJob?.id.toString() ?? "";
	}