

	/// <summary>
	/// 
	/// </summary>
	export abstract class ReqDispatchJobList extends Request implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return  deleted <see cref="DispatchJob"/>s.
		/// </summary>
		public includeDeleted: boolean = false;
	}

	/// <summary>
	/// Gets the list of <see cref="DispatchJob"/>s for the specified <see cref="Asset"/>.
	/// </summary>
	export class ReqDispatchJobListByAsset extends ReqDispatchJobList implements IReqListByAsset {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public asset: ParamId;
	}
	/// <summary>
	/// Gets the list of <see cref="DispatchJob"/>s for the specified <see cref="Asset"/> only if the specified reference fields match.
	/// If no references are specified, it will match any <see cref="DispatchJob"/> with no references.
	/// If a reference value is null, it will match any <see cref="DispatchJob"/> without that reference key.
	/// </summary>
	export class ReqDispatchJobListByAssetAndRefPairs extends ReqDispatchJobListByAsset {
		/// <summary>
		/// Case-insensitive reference pairs used to match jobs.
		/// </summary>
		/// <seealso cref="DispatchJob.references"/>
		public references: Map<string, string>;
	}

	/// <summary>
	/// Gets the list of <see cref="DispatchJob"/>s for the specified <see cref="Company"/>.
	/// </summary>
	export class ReqDispatchJobListByCompany extends ReqDispatchJobList implements IReqListByCompany {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: ParamId;
	}
	/// <summary>
	/// Gets the list of <see cref="DispatchJob"/>s for the specified <see cref="Company"/> only if the <see cref="DispatchJob.labels"/> matches all of the given <see cref="labels"/>.
	/// </summary>
	export class ReqDispatchJobListByCompanyAndLabels extends ReqDispatchJobListByCompany implements IReqListByLabels {
		/// <summary>
		/// A list of <see cref="LabelStyle.code">label codes</see> used to match <see cref="DispatchJob"/>s.
		/// All labels must match to include a <see cref="DispatchJob"/> in the result.
		/// </summary>
		public labels: string[] = [];
	}
	/// <summary>
	/// Gets the list of <see cref="DispatchJob"/>s for the specified <see cref="Company"/> only if the specified reference fields match.
	/// If no references are specified, it will match any <see cref="DispatchJob"/> with no references.
	/// If a reference value is null, it will match any <see cref="DispatchJob"/> without that reference key.
	/// </summary>
	export class ReqDispatchJobListByCompanyAndRefPairs extends ReqDispatchJobListByCompany implements IReqListByReferences {
		/// <summary>
		/// Case-insensitive reference pairs used to match jobs.
		/// </summary>
		/// <seealso cref="DispatchJob.references"/>
		public references: Map<string, string>;
	}

	/// <summary>
	/// Gets the list of <see cref="DispatchJob"/>s for the specified <see cref="Company"/> which are not assigned to an <see cref="Asset"/>.
	/// </summary>
	export class ReqDispatchJobListByUnassigned extends ReqDispatchJobListByCompany { }
	/// <summary>
	/// Gets the list of <see cref="DispatchJob"/>s for the specified <see cref="Company"/> which are not assigned to an <see cref="Asset"/>, only if the <see cref="DispatchJob.labels"/> matches all of the given <see cref="labels"/>.
	/// </summary>
	export class ReqDispatchJobListByUnassignedAndLabels extends ReqDispatchJobListByUnassigned implements IReqListByLabels {
		/// <summary>
		/// A list of <see cref="LabelStyle.code">label codes</see> used to match <see cref="DispatchJob"/>s.
		/// All labels must match to include a <see cref="DispatchJob"/> in the result.
		/// </summary>
		public labels: string[] = [];
	}
	/// <summary>
	/// Gets the list of <see cref="DispatchJob"/>s for the specified <see cref="Company"/> which are not assigned to an <see cref="Asset"/>, only if the specified reference fields match.
	/// If no references are specified, it will match any <see cref="DispatchJob"/> with no references.
	/// If a reference value is null, it will match any <see cref="DispatchJob"/> without that reference key.
	/// </summary>
	export class ReqDispatchJobListByUnassignedAndRefPairs extends ReqDispatchJobListByUnassigned implements IReqListByReferences {
		/// <summary>
		/// Case-insensitive reference pairs used to match jobs.
		/// </summary>
		/// <seealso cref="DispatchJob.references"/>
		public references: Map<string, string>;
	}