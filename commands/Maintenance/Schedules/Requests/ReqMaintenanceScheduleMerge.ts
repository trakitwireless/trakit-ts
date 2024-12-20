

	/// <summary>
	/// Creates a new or updates an existing <see cref="MaintenanceSchedule"/>.
	/// </summary>
	export class ReqMaintenanceScheduleMerge extends Request implements IReqSingle {
		/// <summary>
		/// Parameters given to create or update a <see cref="MaintenanceSchedule"/>.
		/// </summary>
		public maintenanceSchedule: ParamMaintenanceScheduleMerge;

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string GetKey() => this.maintenanceSchedule?.id?.toString() ?? "";
	}