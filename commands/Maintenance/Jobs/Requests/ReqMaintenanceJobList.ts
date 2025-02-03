

	/**
	 * Gets details of the specified {@link maintenanceJob}.
	 */
	export abstract class ReqMaintenanceJobList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return  deleted {@link MaintenanceJob}s.
		 */
		includeDeleted: boolean = false;
	}
	/**
	 * Contains the {@link Company.id} of the collection.
	 */
	export class ReqMaintenanceJobListByCompany extends ReqMaintenanceJobList implements IReqListByCompany {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: ParamId;
	}