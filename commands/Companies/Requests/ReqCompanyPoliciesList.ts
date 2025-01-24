

	/**
	 * Gets a list of <see cref="CompanyPolicies"/>s.
	 */
	export abstract class ReqCompanyPoliciesList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted <see cref="CompanyPolicies"/> (if it exists).
		 */
		public includeDeleted: boolean = false;
	}

	/**
	 * Gets the list of <see cref="CompanyPolicies"/>s for the specified <see cref="Company"/>.
	 */
	export class ReqCompanyPoliciesListByCompany extends ReqCompanyPoliciesList implements IReqListByCompany {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		public company: ParamId;
	}
	/**
	 * Gets the list of <see cref="CompanyPolicies"/>s for the specified <see cref="Company"/> only if the <see cref="CompanyPoliciesPolicies.labels"/> matches all of the given <see cref="Parameters.labels"/>.
	 */
	export class ReqCompanyPoliciesListByCompanyAndLabels extends ReqCompanyPoliciesListByCompany implements IReqListByLabels {
		/**
		 * The parsed labels given as input.
		 * {@link CompanyPolicies.labels}
		 */
		public labels: string[] = [];
	}
	/**
	 * Gets the list of <see cref="CompanyPolicies"/>s for the specified <see cref="Company"/> only if one of the specified <see cref="CompanyPoliciesPolicies.references"/> fields match.
	 * If no references are specified, it will match any <see cref="CompanyPolicies"/> with no references.
	 * If a reference value is null, it will match any <see cref="CompanyPolicies"/> without that reference key.
	 */
	export class ReqCompanyPoliciesListByCompanyAndRefPairs extends ReqCompanyPoliciesListByCompany implements IReqListByReferences {
		/**
		 * The parsed references given as input.
		 * {@link CompanyPoliciesPolicies.references}
		 */
		public references: Map<string, string>;
	}