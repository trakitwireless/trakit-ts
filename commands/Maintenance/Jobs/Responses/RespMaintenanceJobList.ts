

	/**
	 * A container for the requested {@link maintenanceJobs}.
	 */
	export abstract class RespMaintenanceJobList extends Response {
		/**
		 * The list of requested {@link MaintenanceJob}s.
		 */
		maintenanceJobs: MaintenanceJob[] = [];
	}

	/**
	 * Contains the {@link Company.id} of the collection.
	 */
	export class RespMaintenanceJobListByCompany extends RespMaintenanceJobList {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: RespId;
	}