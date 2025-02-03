

	/**
	 * Gets details of the specified {@link maintenanceSchedule}.
	 */
	export abstract class ReqMaintenanceScheduleList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return  deleted {@link MaintenanceSchedule}s.
		 */
		includeDeleted: boolean = false;
	}
	/**
	 * Contains the {@link Company.id} of the collection.
	 */
	export class ReqMaintenanceScheduleListByCompany extends ReqMaintenanceScheduleList implements IReqListByCompany {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: ParamId;
	}