

	/// <summary>
	/// 
	/// </summary>
	export abstract class ReqDispatchTaskList extends Request implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return  deleted <see cref="DispatchTask"/>s.
		/// </summary>
		public includeDeleted: boolean = false;
	}

	/// <summary>
	/// Gets the list of <see cref="DispatchTask"/>s for the specified <see cref="Asset"/>.
	/// </summary>
	export class ReqDispatchTaskListByAsset extends ReqDispatchTaskList implements IReqListByAsset {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public asset: ParamId;
	}
	/// <summary>
	/// Gets the list of <see cref="DispatchTask"/>s for the specified <see cref="Asset"/> only if the specified reference fields match.
	/// If no references are specified, it will match any <see cref="DispatchTask"/> with no references.
	/// If a reference value is null, it will match any <see cref="DispatchTask"/> without that reference key.
	/// </summary>
	export class ReqDispatchTaskListByAssetAndRefPairs extends ReqDispatchTaskListByAsset {
		/// <summary>
		/// Case-insensitive reference pairs used to match jobs.
		/// </summary>
		/// <seealso cref="DispatchTask.references"/>
		public references: Map<string, string>;
	}

	/// <summary>
	/// Gets the list of <see cref="DispatchTask"/>s for the specified <see cref="Company"/>.
	/// </summary>
	export class ReqDispatchTaskListByCompany extends ReqDispatchTaskList implements IReqListByCompany {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: ParamId;
	}
	/// <summary>
	/// Gets the list of <see cref="DispatchTask"/>s for the specified <see cref="Company"/> only if the specified reference fields match.
	/// If no references are specified, it will match any <see cref="DispatchTask"/> with no references.
	/// If a reference value is null, it will match any <see cref="DispatchTask"/> without that reference key.
	/// </summary>
	export class ReqDispatchTaskListByCompanyAndRefPairs extends ReqDispatchTaskListByCompany implements IReqListByReferences {
		/// <summary>
		/// Case-insensitive reference pairs used to match jobs.
		/// </summary>
		/// <seealso cref="DispatchTask.references"/>
		public references: Map<string, string>;
	}