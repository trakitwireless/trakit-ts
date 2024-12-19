

	/// <summary>
	/// Gets a list of <see cref="CompanyStyles"/>s.
	/// </summary>
	export abstract class ReqCompanyStylesList extends Request implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return a deleted <see cref="CompanyStyles"/> (if it exists).
		/// </summary>
		public includeDeleted: boolean = false;
	}

	/// <summary>
	/// Gets the list of <see cref="CompanyStyles"/>s for the specified <see cref="Company"/>.
	/// </summary>
	export class ReqCompanyStylesListByCompany extends ReqCompanyStylesList implements IReqListByCompany {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: ParamId;
	}
	/// <summary>
	/// Gets the list of <see cref="CompanyStyles"/>s for the specified <see cref="Company"/> only if the <see cref="CompanyStylesStyles.labels"/> matches all of the given <see cref="Parameters.labels"/>.
	/// </summary>
	export class ReqCompanyStylesListByCompanyAndLabels extends ReqCompanyStylesListByCompany implements IReqListByLabels {
		/// <summary>
		/// The parsed labels given as input.
		/// </summary>
		/// <seealso cref="CompanyStyles.labels"/>
		public labels: string[] = [];
	}
	/// <summary>
	/// Gets the list of <see cref="CompanyStyles"/>s for the specified <see cref="Company"/> only if one of the specified <see cref="CompanyStylesStyles.references"/> fields match.
	/// If no references are specified, it will match any <see cref="CompanyStyles"/> with no references.
	/// If a reference value is null, it will match any <see cref="CompanyStyles"/> without that reference key.
	/// </summary>
	export class ReqCompanyStylesListByCompanyAndRefPairs extends ReqCompanyStylesListByCompany implements IReqListByReferences {
		/// <summary>
		/// The parsed references given as input.
		/// </summary>
		/// <seealso cref="CompanyStylesStyles.references"/>
		public references: Map<string, string>;
	}