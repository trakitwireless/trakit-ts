

	/// <summary>
	/// A container for the <see cref="maintenanceSchedule"/> object.
	/// </summary>
	export abstract class ReqMaintenanceSchedule extends Request implements IReqSingle {
		/// <summary>
		/// An object to contain the "id" of the <see cref="MaintenanceSchedule"/>.
		/// </summary>
		public maintenanceSchedule: ParamId;

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string GetKey() => this.maintenanceSchedule?.id.toString() ?? "";
	}