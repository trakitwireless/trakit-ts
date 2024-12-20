

	/// <summary>
	/// Gets details of the specified <see cref="behaviourLog"/>.
	/// </summary>
	export abstract class ReqBehaviourLogList extends Request implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return  deleted <see cref="BehaviourLog"/>s.
		/// </summary>
		public includeDeleted: boolean = false;
	}
	/// <summary>
	/// Contains the <see cref="Company.id"/> of the collection.
	/// </summary>
	export class ReqBehaviourLogListByCompany extends ReqBehaviourLogList implements IReqListByCompany {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: ParamId;
	}