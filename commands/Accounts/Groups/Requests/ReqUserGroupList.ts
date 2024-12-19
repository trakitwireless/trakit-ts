

	/// <summary>
	/// Gets details of the specified <see cref="userGroup"/>.
	/// </summary>
	export abstract class ReqUserGroupList extends Request implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return  deleted <see cref="UserGroup"/>s.
		/// </summary>
		public includeDeleted: boolean = false;
	}
	/// <summary>
	/// Contains the <see cref="Company.id"/> of the collection.
	/// </summary>
	export class ReqUserGroupListByCompany extends ReqUserGroupList implements IReqListByCompany {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: ParamId;
	}