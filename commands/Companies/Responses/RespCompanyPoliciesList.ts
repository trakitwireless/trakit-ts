

	/**
	 * A container for the requested <see cref="companyPolicies"/>.
	 */
	export abstract class RespCompanyPoliciesList extends Response {
		/**
		 * The list of requested <see cref="CompanyPolicies"/>s.
		 */
		public companyPolicies: CompanyPolicies[] = [];
	}

	/**
	 * A container owner <see cref="Company"/> of the collection.
	 */
	export class RespCompanyPoliciesListByCompany extends RespCompanyPoliciesList {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		public company: RespId;
	}
	/**
	 * A container owner <see cref="Company"/> of the collection.
	 */
	export class RespCompanyPoliciesListByCompanyAndLabels extends RespCompanyPoliciesListByCompany {
		/**
		 * The labels given as input.
		 * {@link CompanyPolicies.labels}
		 */
		public labels: string[] = [];
	}
	/**
	 * A container owner <see cref="Company"/> of the collection.
	 */
	export class RespCompanyPoliciesListByCompanyAndRefPairs extends RespCompanyPoliciesListByCompany {
		/**
		 * The reference string given as input.
		 * {@link CompanyPolicies.references}
		 */
		public references: Map<string, string>;
	}