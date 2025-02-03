

	/**
	 * Gets a list of {@link CompanyStyles}s.
	 */
	export abstract class ReqCompanyStylesList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted {@link CompanyStyles} (if it exists).
		 */
		includeDeleted: boolean = false;
	}

	/**
	 * Gets the list of {@link CompanyStyles}s for the specified {@link Company}.
	 */
	export class ReqCompanyStylesListByCompany extends ReqCompanyStylesList implements IReqListByCompany {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: ParamId;
	}
	/**
	 * Gets the list of {@link CompanyStyles}s for the specified {@link Company} only if the {@link CompanyStylesStyles.labels} matches all of the given {@link Parameters.labels}.
	 */
	export class ReqCompanyStylesListByCompanyAndLabels extends ReqCompanyStylesListByCompany implements IReqListByLabels {
		/**
		 * The parsed labels given as input.
		 * {@link CompanyStyles.labels}
		 */
		labels: string[] = [];
	}
	/**
	 * Gets the list of {@link CompanyStyles}s for the specified {@link Company} only if one of the specified {@link CompanyStylesStyles.references} fields match.
	 * If no references are specified, it will match any {@link CompanyStyles} with no references.
	 * If a reference value is null, it will match any {@link CompanyStyles} without that reference key.
	 */
	export class ReqCompanyStylesListByCompanyAndRefPairs extends ReqCompanyStylesListByCompany implements IReqListByReferences {
		/**
		 * The parsed references given as input.
		 * {@link CompanyStylesStyles.references}
		 */
		references: Map<string, string>;
	}