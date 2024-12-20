

	/// <summary>
	/// Creates a new or updates an existing <see cref="MaintenanceJob"/>.
	/// </summary>
	export class ReqMaintenanceJobMerge extends Request implements IReqSingle {
		/// <summary>
		/// Parameters given to create or update a <see cref="MaintenanceJob"/>.
		/// </summary>
		public maintenanceJob: ParamMaintenanceJobMerge;

		/// <summary>
		/// 
		/// </summary>
		/// <returns></returns>
		public string GetKey() => this.maintenanceJob?.id?.toString() ?? "";
	}