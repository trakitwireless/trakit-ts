

	/**
	 * Gets a list of {@link CompanyGeneral}s.
	 */
	export abstract class ReqCompanyGeneralList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted {@link CompanyGeneral} (if it exists).
		 */
		includeDeleted: boolean = false;
	}

	/**
	 * Gets the list of {@link CompanyGeneral}s for the specified {@link Company}.
	 */
	export class ReqCompanyGeneralListByCompany extends ReqCompanyGeneralList implements IReqListByCompany {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: ParamId;
	}
	/**
	 * Gets the list of {@link CompanyGeneral}s for the specified {@link Company} only if the {@link CompanyGeneral.labels} matches all of the given {@link CompanyStyles.labels}.
	 */
	export class ReqCompanyGeneralListByCompanyAndLabels extends ReqCompanyGeneralListByCompany implements IReqListByLabels {
		/**
		 * The parsed labels given as input.
		 * {@link CompanyStyles.labels}
		 */
		labels: string[] = [];
	}
	/**
	 * Gets the list of {@link CompanyGeneral}s for the specified {@link Company} only if one of the specified {@link CompanyGeneral.references} fields match.
	 * If no references are specified, it will match any {@link CompanyGeneral} with no references.
	 * If a reference value is null, it will match any {@link CompanyGeneral} without that reference key.
	 */
	export class ReqCompanyGeneralListByCompanyAndRefPairs extends ReqCompanyGeneralListByCompany implements IReqListByReferences {
		/**
		 * The parsed references given as input.
		 * {@link CompanyGeneralGeneral.references}
		 */
		references: Map<string, string>;
	}