

	/**
	 *  
	 */
	export abstract class ReqDispatchTaskList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return  deleted <see cref="DispatchTask"/>s.
		 */
		public includeDeleted: boolean = false;
	}

	/**
	 * Gets the list of <see cref="DispatchTask"/>s for the specified <see cref="Asset"/>.
	 */
	export class ReqDispatchTaskListByAsset extends ReqDispatchTaskList implements IReqListByAsset {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		public asset: ParamId;
	}
	/**
	 * Gets the list of <see cref="DispatchTask"/>s for the specified <see cref="Asset"/> only if the specified reference fields match.
	 * If no references are specified, it will match any <see cref="DispatchTask"/> with no references.
	 * If a reference value is null, it will match any <see cref="DispatchTask"/> without that reference key.
	 */
	export class ReqDispatchTaskListByAssetAndRefPairs extends ReqDispatchTaskListByAsset {
		/**
		 * Case-insensitive reference pairs used to match jobs.
		 * {@link DispatchTask.references}
		 */
		public references: Map<string, string>;
	}

	/**
	 * Gets the list of <see cref="DispatchTask"/>s for the specified <see cref="Company"/>.
	 */
	export class ReqDispatchTaskListByCompany extends ReqDispatchTaskList implements IReqListByCompany {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		public company: ParamId;
	}
	/**
	 * Gets the list of <see cref="DispatchTask"/>s for the specified <see cref="Company"/> only if the specified reference fields match.
	 * If no references are specified, it will match any <see cref="DispatchTask"/> with no references.
	 * If a reference value is null, it will match any <see cref="DispatchTask"/> without that reference key.
	 */
	export class ReqDispatchTaskListByCompanyAndRefPairs extends ReqDispatchTaskListByCompany implements IReqListByReferences {
		/**
		 * Case-insensitive reference pairs used to match jobs.
		 * {@link DispatchTask.references}
		 */
		public references: Map<string, string>;
	}