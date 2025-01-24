

	/**
	 * Gets details of the specified <see cref="maintenanceJob"/>.
	 */
	export abstract class ReqMaintenanceJobList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return  deleted <see cref="MaintenanceJob"/>s.
		 */
		includeDeleted: boolean = false;
	}
	/**
	 * Contains the <see cref="Company.id"/> of the collection.
	 */
	export class ReqMaintenanceJobListByCompany extends ReqMaintenanceJobList implements IReqListByCompany {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		company: ParamId;
	}