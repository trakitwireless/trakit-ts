

	/**
	 *  
	 */
	export abstract class ReqDispatchJobList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return  deleted <see cref="DispatchJob"/>s.
		 */
		includeDeleted: boolean = false;
	}

	/**
	 * Gets the list of <see cref="DispatchJob"/>s for the specified <see cref="Asset"/>.
	 */
	export class ReqDispatchJobListByAsset extends ReqDispatchJobList implements IReqListByAsset {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		asset: ParamId;
	}
	/**
	 * Gets the list of <see cref="DispatchJob"/>s for the specified <see cref="Asset"/> only if the specified reference fields match.
	 * If no references are specified, it will match any <see cref="DispatchJob"/> with no references.
	 * If a reference value is null, it will match any <see cref="DispatchJob"/> without that reference key.
	 */
	export class ReqDispatchJobListByAssetAndRefPairs extends ReqDispatchJobListByAsset {
		/**
		 * Case-insensitive reference pairs used to match jobs.
		 * {@link DispatchJob.references}
		 */
		references: Map<string, string>;
	}

	/**
	 * Gets the list of <see cref="DispatchJob"/>s for the specified <see cref="Company"/>.
	 */
	export class ReqDispatchJobListByCompany extends ReqDispatchJobList implements IReqListByCompany {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		company: ParamId;
	}
	/**
	 * Gets the list of <see cref="DispatchJob"/>s for the specified <see cref="Company"/> only if the <see cref="DispatchJob.labels"/> matches all of the given <see cref="labels"/>.
	 */
	export class ReqDispatchJobListByCompanyAndLabels extends ReqDispatchJobListByCompany implements IReqListByLabels {
		/**
		 * A list of <see cref="LabelStyle.code">label codes</see> used to match <see cref="DispatchJob"/>s.
		 * All labels must match to include a <see cref="DispatchJob"/> in the result.
		 */
		labels: string[] = [];
	}
	/**
	 * Gets the list of <see cref="DispatchJob"/>s for the specified <see cref="Company"/> only if the specified reference fields match.
	 * If no references are specified, it will match any <see cref="DispatchJob"/> with no references.
	 * If a reference value is null, it will match any <see cref="DispatchJob"/> without that reference key.
	 */
	export class ReqDispatchJobListByCompanyAndRefPairs extends ReqDispatchJobListByCompany implements IReqListByReferences {
		/**
		 * Case-insensitive reference pairs used to match jobs.
		 * {@link DispatchJob.references}
		 */
		references: Map<string, string>;
	}

	/**
	 * Gets the list of <see cref="DispatchJob"/>s for the specified <see cref="Company"/> which are not assigned to an <see cref="Asset"/>.
	 */
	export class ReqDispatchJobListByUnassigned extends ReqDispatchJobListByCompany { }
	/**
	 * Gets the list of <see cref="DispatchJob"/>s for the specified <see cref="Company"/> which are not assigned to an <see cref="Asset"/>, only if the <see cref="DispatchJob.labels"/> matches all of the given <see cref="labels"/>.
	 */
	export class ReqDispatchJobListByUnassignedAndLabels extends ReqDispatchJobListByUnassigned implements IReqListByLabels {
		/**
		 * A list of <see cref="LabelStyle.code">label codes</see> used to match <see cref="DispatchJob"/>s.
		 * All labels must match to include a <see cref="DispatchJob"/> in the result.
		 */
		labels: string[] = [];
	}
	/**
	 * Gets the list of <see cref="DispatchJob"/>s for the specified <see cref="Company"/> which are not assigned to an <see cref="Asset"/>, only if the specified reference fields match.
	 * If no references are specified, it will match any <see cref="DispatchJob"/> with no references.
	 * If a reference value is null, it will match any <see cref="DispatchJob"/> without that reference key.
	 */
	export class ReqDispatchJobListByUnassignedAndRefPairs extends ReqDispatchJobListByUnassigned implements IReqListByReferences {
		/**
		 * Case-insensitive reference pairs used to match jobs.
		 * {@link DispatchJob.references}
		 */
		references: Map<string, string>;
	}