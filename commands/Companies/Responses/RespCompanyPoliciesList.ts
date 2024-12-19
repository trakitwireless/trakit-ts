

	/// <summary>
	/// A container for the requested <see cref="companyPolicies"/>.
	/// </summary>
	export abstract class RespCompanyPoliciesList extends Response {
		/// <summary>
		/// The list of requested <see cref="CompanyPolicies"/>s.
		/// </summary>
		public companyPolicies: CompanyPolicies[] = [];
	}

	/// <summary>
	/// A container owner <see cref="Company"/> of the collection.
	/// </summary>
	export class RespCompanyPoliciesListByCompany extends RespCompanyPoliciesList {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: RespId;
	}
	/// <summary>
	/// A container owner <see cref="Company"/> of the collection.
	/// </summary>
	export class RespCompanyPoliciesListByCompanyAndLabels extends RespCompanyPoliciesListByCompany {
		/// <summary>
		/// The labels given as input.
		/// </summary>
		/// <seealso cref="CompanyPolicies.labels"/>
		public labels: string[] = [];
	}
	/// <summary>
	/// A container owner <see cref="Company"/> of the collection.
	/// </summary>
	export class RespCompanyPoliciesListByCompanyAndRefPairs extends RespCompanyPoliciesListByCompany {
		/// <summary>
		/// The reference string given as input.
		/// </summary>
		/// <seealso cref="CompanyPolicies.references"/>
		public references: Map<string, string>;
	}