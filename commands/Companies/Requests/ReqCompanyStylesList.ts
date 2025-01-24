

	/**
	 * Gets a list of <see cref="CompanyStyles"/>s.
	 */
	export abstract class ReqCompanyStylesList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted <see cref="CompanyStyles"/> (if it exists).
		 */
		public includeDeleted: boolean = false;
	}

	/**
	 * Gets the list of <see cref="CompanyStyles"/>s for the specified <see cref="Company"/>.
	 */
	export class ReqCompanyStylesListByCompany extends ReqCompanyStylesList implements IReqListByCompany {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		public company: ParamId;
	}
	/**
	 * Gets the list of <see cref="CompanyStyles"/>s for the specified <see cref="Company"/> only if the <see cref="CompanyStylesStyles.labels"/> matches all of the given <see cref="Parameters.labels"/>.
	 */
	export class ReqCompanyStylesListByCompanyAndLabels extends ReqCompanyStylesListByCompany implements IReqListByLabels {
		/**
		 * The parsed labels given as input.
		 * {@link CompanyStyles.labels}
		 */
		public labels: string[] = [];
	}
	/**
	 * Gets the list of <see cref="CompanyStyles"/>s for the specified <see cref="Company"/> only if one of the specified <see cref="CompanyStylesStyles.references"/> fields match.
	 * If no references are specified, it will match any <see cref="CompanyStyles"/> with no references.
	 * If a reference value is null, it will match any <see cref="CompanyStyles"/> without that reference key.
	 */
	export class ReqCompanyStylesListByCompanyAndRefPairs extends ReqCompanyStylesListByCompany implements IReqListByReferences {
		/**
		 * The parsed references given as input.
		 * {@link CompanyStylesStyles.references}
		 */
		public references: Map<string, string>;
	}