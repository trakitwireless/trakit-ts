

	/// <summary>
	/// Gets details of the specified <see cref="MaintenanceJob"/>.
	/// </summary>
	export class ReqMaintenanceJobGet extends ReqMaintenanceJob implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return a deleted <see cref="MaintenanceJob"/> (if it exists).
		/// </summary>
		public includeDeleted: boolean = false;
	}