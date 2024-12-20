

	/// <summary>
	/// Gets details of the specified <see cref="MaintenanceSchedule"/>.
	/// </summary>
	export class ReqMaintenanceScheduleGet extends ReqMaintenanceSchedule implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return a deleted <see cref="MaintenanceSchedule"/> (if it exists).
		/// </summary>
		public includeDeleted: boolean = false;
	}