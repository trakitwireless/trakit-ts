﻿

	/**
	 * A container for the {@link maintenanceJob} object.
	 */
	export abstract class ReqMaintenanceJob extends Request implements IReqSingle {
		/**
		 * An object to contain the "id" of the {@link MaintenanceJob}.
		 */
		maintenanceJob: ParamId;

		/**
		 *  
		 */
public string GetKey() => this.maintenanceJob?.id.toString() ?? "";
	}