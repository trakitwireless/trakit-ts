

	/**
	 * Gets details of the specified <see cref="maintenanceSchedule"/>.
	 */
	export abstract class ReqMaintenanceScheduleList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return  deleted <see cref="MaintenanceSchedule"/>s.
		 */
		public includeDeleted: boolean = false;
	}
	/**
	 * Contains the <see cref="Company.id"/> of the collection.
	 */
	export class ReqMaintenanceScheduleListByCompany extends ReqMaintenanceScheduleList implements IReqListByCompany {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		public company: ParamId;
	}