

	/**
	 * Gets details of the specified {@link company}.
	 */
	export abstract class ReqCompanyList extends Request implements IReqIDeletable {
		/**
		 * When set to true, the full tree of {@link Company|companies} is returned.
		 * Otherwise, only the first-level child-{@link Company|companies} are included.
		 */
		tree: boolean = false;
		/**
		 * When set to true, the parent {@link Company} is included in the results.
		 */
		includeParent: boolean = false;
		/**
		 * When true, the command will also return  deleted {@link Company}s.
		 */
		includeDeleted: boolean = false;
	}
	/**
	 * Contains the {@link Company.id} of the collection.
	 */
	export class ReqCompanyListByCompany extends ReqCompanyList implements IReqListByCompany {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: ParamId;
	}
	/**
	 * Contains the {@link Company.id} of the collection.
	 */
	export class ReqCompanyListByCompanyAndRefPairs extends ReqCompanyListByCompany implements IReqListByReferences {
		/**
		 * Case-insensitive reference pairs used to match {@link Company}s.
		 * {@link CompanyGeneral.references}
		 */
		references: Map<string, string>;
	}