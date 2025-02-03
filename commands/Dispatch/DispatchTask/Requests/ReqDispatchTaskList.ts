

	/**
	 *  
	 */
	export abstract class ReqDispatchTaskList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return  deleted {@link DispatchTask}s.
		 */
		includeDeleted: boolean = false;
	}

	/**
	 * Gets the list of {@link DispatchTask}s for the specified {@link Asset}.
	 */
	export class ReqDispatchTaskListByAsset extends ReqDispatchTaskList implements IReqListByAsset {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		asset: ParamId;
	}
	/**
	 * Gets the list of {@link DispatchTask}s for the specified {@link Asset} only if the specified reference fields match.
	 * If no references are specified, it will match any {@link DispatchTask} with no references.
	 * If a reference value is null, it will match any {@link DispatchTask} without that reference key.
	 */
	export class ReqDispatchTaskListByAssetAndRefPairs extends ReqDispatchTaskListByAsset {
		/**
		 * Case-insensitive reference pairs used to match jobs.
		 * {@link DispatchTask.references}
		 */
		references: Map<string, string>;
	}

	/**
	 * Gets the list of {@link DispatchTask}s for the specified {@link Company}.
	 */
	export class ReqDispatchTaskListByCompany extends ReqDispatchTaskList implements IReqListByCompany {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: ParamId;
	}
	/**
	 * Gets the list of {@link DispatchTask}s for the specified {@link Company} only if the specified reference fields match.
	 * If no references are specified, it will match any {@link DispatchTask} with no references.
	 * If a reference value is null, it will match any {@link DispatchTask} without that reference key.
	 */
	export class ReqDispatchTaskListByCompanyAndRefPairs extends ReqDispatchTaskListByCompany implements IReqListByReferences {
		/**
		 * Case-insensitive reference pairs used to match jobs.
		 * {@link DispatchTask.references}
		 */
		references: Map<string, string>;
	}