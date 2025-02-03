

	/**
	 *  
	 */
	export abstract class ReqDispatchJobList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return  deleted {@link DispatchJob}s.
		 */
		includeDeleted: boolean = false;
	}

	/**
	 * Gets the list of {@link DispatchJob}s for the specified {@link Asset}.
	 */
	export class ReqDispatchJobListByAsset extends ReqDispatchJobList implements IReqListByAsset {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		asset: ParamId;
	}
	/**
	 * Gets the list of {@link DispatchJob}s for the specified {@link Asset} only if the specified reference fields match.
	 * If no references are specified, it will match any {@link DispatchJob} with no references.
	 * If a reference value is null, it will match any {@link DispatchJob} without that reference key.
	 */
	export class ReqDispatchJobListByAssetAndRefPairs extends ReqDispatchJobListByAsset {
		/**
		 * Case-insensitive reference pairs used to match jobs.
		 * {@link DispatchJob.references}
		 */
		references: Map<string, string>;
	}

	/**
	 * Gets the list of {@link DispatchJob}s for the specified {@link Company}.
	 */
	export class ReqDispatchJobListByCompany extends ReqDispatchJobList implements IReqListByCompany {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: ParamId;
	}
	/**
	 * Gets the list of {@link DispatchJob}s for the specified {@link Company} only if the {@link DispatchJob.labels} matches all of the given {@link labels}.
	 */
	export class ReqDispatchJobListByCompanyAndLabels extends ReqDispatchJobListByCompany implements IReqListByLabels {
		/**
		 * A list of {@link LabelStyle.code|label codes} used to match {@link DispatchJob}s.
		 * All labels must match to include a {@link DispatchJob} in the result.
		 */
		labels: string[] = [];
	}
	/**
	 * Gets the list of {@link DispatchJob}s for the specified {@link Company} only if the specified reference fields match.
	 * If no references are specified, it will match any {@link DispatchJob} with no references.
	 * If a reference value is null, it will match any {@link DispatchJob} without that reference key.
	 */
	export class ReqDispatchJobListByCompanyAndRefPairs extends ReqDispatchJobListByCompany implements IReqListByReferences {
		/**
		 * Case-insensitive reference pairs used to match jobs.
		 * {@link DispatchJob.references}
		 */
		references: Map<string, string>;
	}

	/**
	 * Gets the list of {@link DispatchJob}s for the specified {@link Company} which are not assigned to an {@link Asset}.
	 */
	export class ReqDispatchJobListByUnassigned extends ReqDispatchJobListByCompany { }
	/**
	 * Gets the list of {@link DispatchJob}s for the specified {@link Company} which are not assigned to an {@link Asset}, only if the {@link DispatchJob.labels} matches all of the given {@link labels}.
	 */
	export class ReqDispatchJobListByUnassignedAndLabels extends ReqDispatchJobListByUnassigned implements IReqListByLabels {
		/**
		 * A list of {@link LabelStyle.code|label codes} used to match {@link DispatchJob}s.
		 * All labels must match to include a {@link DispatchJob} in the result.
		 */
		labels: string[] = [];
	}
	/**
	 * Gets the list of {@link DispatchJob}s for the specified {@link Company} which are not assigned to an {@link Asset}, only if the specified reference fields match.
	 * If no references are specified, it will match any {@link DispatchJob} with no references.
	 * If a reference value is null, it will match any {@link DispatchJob} without that reference key.
	 */
	export class ReqDispatchJobListByUnassignedAndRefPairs extends ReqDispatchJobListByUnassigned implements IReqListByReferences {
		/**
		 * Case-insensitive reference pairs used to match jobs.
		 * {@link DispatchJob.references}
		 */
		references: Map<string, string>;
	}