

	/**
	 * Gets details of the specified <see cref="MaintenanceSchedule"/>.
	 */
	export class ReqMaintenanceScheduleGet extends ReqMaintenanceSchedule implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted <see cref="MaintenanceSchedule"/> (if it exists).
		 */
		includeDeleted: boolean = false;
	}