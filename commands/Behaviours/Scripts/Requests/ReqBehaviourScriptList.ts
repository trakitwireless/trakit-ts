

	/// <summary>
	/// Gets details of the specified <see cref="behaviourScript"/>.
	/// </summary>
	export abstract class ReqBehaviourScriptList extends Request implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return  deleted <see cref="BehaviourScript"/>s.
		/// </summary>
		public includeDeleted: boolean = false;
	}
	/// <summary>
	/// Contains the <see cref="Company.id"/> of the collection.
	/// </summary>
	export class ReqBehaviourScriptListByCompany extends ReqBehaviourScriptList implements IReqListByCompany {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: ParamId;
	}