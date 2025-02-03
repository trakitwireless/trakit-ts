

	/**
	 * Gets details of the specified {@link MaintenanceSchedule}.
	 */
	export class ReqMaintenanceScheduleGet extends ReqMaintenanceSchedule implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted {@link MaintenanceSchedule} (if it exists).
		 */
		includeDeleted: boolean = false;
	}