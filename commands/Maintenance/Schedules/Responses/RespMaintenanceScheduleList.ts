

	/**
	 * A container for the requested <see cref="maintenanceSchedules"/>.
	 */
	export abstract class RespMaintenanceScheduleList extends Response {
		/**
		 * The list of requested <see cref="MaintenanceSchedule"/>s.
		 */
		public maintenanceSchedules: MaintenanceSchedule[] = [];
	}

	/**
	 * Contains the <see cref="Company.id"/> of the collection.
	 */
	export class RespMaintenanceScheduleListByCompany extends RespMaintenanceScheduleList {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		public company: RespId;
	}