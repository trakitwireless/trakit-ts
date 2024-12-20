

	/// <summary>
	/// Gets a list of <see cref="CompanyPolicies"/>s.
	/// </summary>
	export abstract class ReqCompanyPoliciesList extends Request implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return a deleted <see cref="CompanyPolicies"/> (if it exists).
		/// </summary>
		public includeDeleted: boolean = false;
	}

	/// <summary>
	/// Gets the list of <see cref="CompanyPolicies"/>s for the specified <see cref="Company"/>.
	/// </summary>
	export class ReqCompanyPoliciesListByCompany extends ReqCompanyPoliciesList implements IReqListByCompany {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: ParamId;
	}
	/// <summary>
	/// Gets the list of <see cref="CompanyPolicies"/>s for the specified <see cref="Company"/> only if the <see cref="CompanyPoliciesPolicies.labels"/> matches all of the given <see cref="Parameters.labels"/>.
	/// </summary>
	export class ReqCompanyPoliciesListByCompanyAndLabels extends ReqCompanyPoliciesListByCompany implements IReqListByLabels {
		/// <summary>
		/// The parsed labels given as input.
		/// </summary>
		/// <seealso cref="CompanyPolicies.labels"/>
		public labels: string[] = [];
	}
	/// <summary>
	/// Gets the list of <see cref="CompanyPolicies"/>s for the specified <see cref="Company"/> only if one of the specified <see cref="CompanyPoliciesPolicies.references"/> fields match.
	/// If no references are specified, it will match any <see cref="CompanyPolicies"/> with no references.
	/// If a reference value is null, it will match any <see cref="CompanyPolicies"/> without that reference key.
	/// </summary>
	export class ReqCompanyPoliciesListByCompanyAndRefPairs extends ReqCompanyPoliciesListByCompany implements IReqListByReferences {
		/// <summary>
		/// The parsed references given as input.
		/// </summary>
		/// <seealso cref="CompanyPoliciesPolicies.references"/>
		public references: Map<string, string>;
	}