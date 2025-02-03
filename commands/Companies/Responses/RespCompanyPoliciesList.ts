

	/**
	 * A container for the requested {@link companyPolicies}.
	 */
	export abstract class RespCompanyPoliciesList extends Response {
		/**
		 * The list of requested {@link CompanyPolicies}s.
		 */
		companyPolicies: CompanyPolicies[] = [];
	}

	/**
	 * A container owner {@link Company} of the collection.
	 */
	export class RespCompanyPoliciesListByCompany extends RespCompanyPoliciesList {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: RespId;
	}
	/**
	 * A container owner {@link Company} of the collection.
	 */
	export class RespCompanyPoliciesListByCompanyAndLabels extends RespCompanyPoliciesListByCompany {
		/**
		 * The labels given as input.
		 * {@link CompanyPolicies.labels}
		 */
		labels: string[] = [];
	}
	/**
	 * A container owner {@link Company} of the collection.
	 */
	export class RespCompanyPoliciesListByCompanyAndRefPairs extends RespCompanyPoliciesListByCompany {
		/**
		 * The reference string given as input.
		 * {@link CompanyPolicies.references}
		 */
		references: Map<string, string>;
	}