

	/**
	 * Gets a list of <see cref="CompanyGeneral"/>s.
	 */
	export abstract class ReqCompanyGeneralList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted <see cref="CompanyGeneral"/> (if it exists).
		 */
		includeDeleted: boolean = false;
	}

	/**
	 * Gets the list of <see cref="CompanyGeneral"/>s for the specified <see cref="Company"/>.
	 */
	export class ReqCompanyGeneralListByCompany extends ReqCompanyGeneralList implements IReqListByCompany {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		company: ParamId;
	}
	/**
	 * Gets the list of <see cref="CompanyGeneral"/>s for the specified <see cref="Company"/> only if the <see cref="CompanyGeneral.labels"/> matches all of the given <see cref="CompanyStyles.labels"/>.
	 */
	export class ReqCompanyGeneralListByCompanyAndLabels extends ReqCompanyGeneralListByCompany implements IReqListByLabels {
		/**
		 * The parsed labels given as input.
		 * {@link CompanyStyles.labels}
		 */
		labels: string[] = [];
	}
	/**
	 * Gets the list of <see cref="CompanyGeneral"/>s for the specified <see cref="Company"/> only if one of the specified <see cref="CompanyGeneral.references"/> fields match.
	 * If no references are specified, it will match any <see cref="CompanyGeneral"/> with no references.
	 * If a reference value is null, it will match any <see cref="CompanyGeneral"/> without that reference key.
	 */
	export class ReqCompanyGeneralListByCompanyAndRefPairs extends ReqCompanyGeneralListByCompany implements IReqListByReferences {
		/**
		 * The parsed references given as input.
		 * {@link CompanyGeneralGeneral.references}
		 */
		references: Map<string, string>;
	}