

	/**
	 * Gets a list of {@link CompanyReseller}s.
	 */
	export abstract class ReqCompanyResellerList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted {@link CompanyReseller} (if it exists).
		 */
		includeDeleted: boolean = false;
	}

	/**
	 * Gets the list of {@link CompanyReseller}s for the specified {@link Company}.
	 */
	export class ReqCompanyResellerListByCompany extends ReqCompanyResellerList implements IReqListByCompany {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: ParamId;
	}
	/**
	 * Gets the list of {@link CompanyReseller}s for the specified {@link Company} only if the {@link CompanyResellerReseller.labels} matches all of the given {@link Parameters.labels}.
	 */
	export class ReqCompanyResellerListByCompanyAndLabels extends ReqCompanyResellerListByCompany implements IReqListByLabels {
		/**
		 * The parsed labels given as input.
		 * {@link CompanyReseller.labels}
		 */
		labels: string[] = [];
	}
	/**
	 * Gets the list of {@link CompanyReseller}s for the specified {@link Company} only if one of the specified {@link CompanyResellerReseller.references} fields match.
	 * If no references are specified, it will match any {@link CompanyReseller} with no references.
	 * If a reference value is null, it will match any {@link CompanyReseller} without that reference key.
	 */
	export class ReqCompanyResellerListByCompanyAndRefPairs extends ReqCompanyResellerListByCompany implements IReqListByReferences {
		/**
		 * The parsed references given as input.
		 * {@link CompanyResellerReseller.references}
		 */
		references: Map<string, string>;
	}