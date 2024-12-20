

	/// <summary>
	/// Gets details of the specified <see cref="maintenanceJob"/>.
	/// </summary>
	export abstract class ReqMaintenanceJobList extends Request implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return  deleted <see cref="MaintenanceJob"/>s.
		/// </summary>
		public includeDeleted: boolean = false;
	}
	/// <summary>
	/// Contains the <see cref="Company.id"/> of the collection.
	/// </summary>
	export class ReqMaintenanceJobListByCompany extends ReqMaintenanceJobList implements IReqListByCompany {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: ParamId;
	}