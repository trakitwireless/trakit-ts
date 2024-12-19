

	/// <summary>
	/// A container for the requested <see cref="maintenanceJobs"/>.
	/// </summary>
	export abstract class RespMaintenanceJobList extends Response {
		/// <summary>
		/// The list of requested <see cref="MaintenanceJob"/>s.
		/// </summary>
		public maintenanceJobs: MaintenanceJob[] = [];
	}

	/// <summary>
	/// Contains the <see cref="Company.id"/> of the collection.
	/// </summary>
	export class RespMaintenanceJobListByCompany extends RespMaintenanceJobList {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: RespId;
	}