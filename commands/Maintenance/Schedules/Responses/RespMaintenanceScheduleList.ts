

	/**
	 * A container for the requested {@link maintenanceSchedules}.
	 */
	export abstract class RespMaintenanceScheduleList extends Response {
		/**
		 * The list of requested {@link MaintenanceSchedule}s.
		 */
		maintenanceSchedules: MaintenanceSchedule[] = [];
	}

	/**
	 * Contains the {@link Company.id} of the collection.
	 */
	export class RespMaintenanceScheduleListByCompany extends RespMaintenanceScheduleList {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: RespId;
	}