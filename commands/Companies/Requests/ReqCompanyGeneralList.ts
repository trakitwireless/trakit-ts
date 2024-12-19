

	/// <summary>
	/// Gets a list of <see cref="CompanyGeneral"/>s.
	/// </summary>
	export abstract class ReqCompanyGeneralList extends Request implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return a deleted <see cref="CompanyGeneral"/> (if it exists).
		/// </summary>
		public includeDeleted: boolean = false;
	}

	/// <summary>
	/// Gets the list of <see cref="CompanyGeneral"/>s for the specified <see cref="Company"/>.
	/// </summary>
	export class ReqCompanyGeneralListByCompany extends ReqCompanyGeneralList implements IReqListByCompany {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: ParamId;
	}
	/// <summary>
	/// Gets the list of <see cref="CompanyGeneral"/>s for the specified <see cref="Company"/> only if the <see cref="CompanyGeneral.labels"/> matches all of the given <see cref="CompanyStyles.labels"/>.
	/// </summary>
	export class ReqCompanyGeneralListByCompanyAndLabels extends ReqCompanyGeneralListByCompany implements IReqListByLabels {
		/// <summary>
		/// The parsed labels given as input.
		/// </summary>
		/// <seealso cref="CompanyStyles.labels"/>
		public labels: string[] = [];
	}
	/// <summary>
	/// Gets the list of <see cref="CompanyGeneral"/>s for the specified <see cref="Company"/> only if one of the specified <see cref="CompanyGeneral.references"/> fields match.
	/// If no references are specified, it will match any <see cref="CompanyGeneral"/> with no references.
	/// If a reference value is null, it will match any <see cref="CompanyGeneral"/> without that reference key.
	/// </summary>
	export class ReqCompanyGeneralListByCompanyAndRefPairs extends ReqCompanyGeneralListByCompany implements IReqListByReferences {
		/// <summary>
		/// The parsed references given as input.
		/// </summary>
		/// <seealso cref="CompanyGeneralGeneral.references"/>
		public references: Map<string, string>;
	}