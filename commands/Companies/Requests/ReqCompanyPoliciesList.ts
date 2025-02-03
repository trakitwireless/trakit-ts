

	/**
	 * Gets a list of {@link CompanyPolicies}s.
	 */
	export abstract class ReqCompanyPoliciesList extends Request implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted {@link CompanyPolicies} (if it exists).
		 */
		includeDeleted: boolean = false;
	}

	/**
	 * Gets the list of {@link CompanyPolicies}s for the specified {@link Company}.
	 */
	export class ReqCompanyPoliciesListByCompany extends ReqCompanyPoliciesList implements IReqListByCompany {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: ParamId;
	}
	/**
	 * Gets the list of {@link CompanyPolicies}s for the specified {@link Company} only if the {@link CompanyPoliciesPolicies.labels} matches all of the given {@link Parameters.labels}.
	 */
	export class ReqCompanyPoliciesListByCompanyAndLabels extends ReqCompanyPoliciesListByCompany implements IReqListByLabels {
		/**
		 * The parsed labels given as input.
		 * {@link CompanyPolicies.labels}
		 */
		labels: string[] = [];
	}
	/**
	 * Gets the list of {@link CompanyPolicies}s for the specified {@link Company} only if one of the specified {@link CompanyPoliciesPolicies.references} fields match.
	 * If no references are specified, it will match any {@link CompanyPolicies} with no references.
	 * If a reference value is null, it will match any {@link CompanyPolicies} without that reference key.
	 */
	export class ReqCompanyPoliciesListByCompanyAndRefPairs extends ReqCompanyPoliciesListByCompany implements IReqListByReferences {
		/**
		 * The parsed references given as input.
		 * {@link CompanyPoliciesPolicies.references}
		 */
		references: Map<string, string>;
	}