

	/**
	 * A container for the requested <see cref="maintenanceJobs"/>.
	 */
	export abstract class RespMaintenanceJobList extends Response {
		/**
		 * The list of requested <see cref="MaintenanceJob"/>s.
		 */
		maintenanceJobs: MaintenanceJob[] = [];
	}

	/**
	 * Contains the <see cref="Company.id"/> of the collection.
	 */
	export class RespMaintenanceJobListByCompany extends RespMaintenanceJobList {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		company: RespId;
	}