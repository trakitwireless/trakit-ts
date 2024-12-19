

	/// <summary>
	/// A container for the <see cref="maintenanceJob"/> object.
	/// </summary>
	export abstract class ReqMaintenanceJob extends Request implements IReqSingle {
		/// <summary>
		/// An object to contain the "id" of the <see cref="MaintenanceJob"/>.
		/// </summary>
		public maintenanceJob: ParamId;

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string GetKey() => this.maintenanceJob?.id.toString() ?? "";
	}