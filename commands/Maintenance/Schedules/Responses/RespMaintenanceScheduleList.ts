

	/// <summary>
	/// A container for the requested <see cref="maintenanceSchedules"/>.
	/// </summary>
	export abstract class RespMaintenanceScheduleList extends Response {
		/// <summary>
		/// The list of requested <see cref="MaintenanceSchedule"/>s.
		/// </summary>
		public maintenanceSchedules: MaintenanceSchedule[] = [];
	}

	/// <summary>
	/// Contains the <see cref="Company.id"/> of the collection.
	/// </summary>
	export class RespMaintenanceScheduleListByCompany extends RespMaintenanceScheduleList {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: RespId;
	}