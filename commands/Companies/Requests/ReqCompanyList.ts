

	/**
	 * Gets details of the specified <see cref="company"/>.
	 */
	export abstract class ReqCompanyList extends Request implements IReqIDeletable {
		/**
		 * When set to true, the full tree of <see cref="Company">companies</see> is returned.
		 * Otherwise, only the first-level child-<see cref="Company">companies</see> are included.
		 */
		tree: boolean = false;
		/**
		 * When set to true, the parent <see cref="Company"/> is included in the results.
		 */
		includeParent: boolean = false;
		/**
		 * When true, the command will also return  deleted <see cref="Company"/>s.
		 */
		includeDeleted: boolean = false;
	}
	/**
	 * Contains the <see cref="Company.id"/> of the collection.
	 */
	export class ReqCompanyListByCompany extends ReqCompanyList implements IReqListByCompany {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		company: ParamId;
	}
	/**
	 * Contains the <see cref="Company.id"/> of the collection.
	 */
	export class ReqCompanyListByCompanyAndRefPairs extends ReqCompanyListByCompany implements IReqListByReferences {
		/**
		 * Case-insensitive reference pairs used to match <see cref="Company"/>s.
		 * {@link CompanyGeneral.references}
		 */
		references: Map<string, string>;
	}