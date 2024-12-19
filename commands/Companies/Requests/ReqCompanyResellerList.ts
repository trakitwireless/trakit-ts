

	/// <summary>
	/// Gets a list of <see cref="CompanyReseller"/>s.
	/// </summary>
	export abstract class ReqCompanyResellerList extends Request implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return a deleted <see cref="CompanyReseller"/> (if it exists).
		/// </summary>
		public includeDeleted: boolean = false;
	}

	/// <summary>
	/// Gets the list of <see cref="CompanyReseller"/>s for the specified <see cref="Company"/>.
	/// </summary>
	export class ReqCompanyResellerListByCompany extends ReqCompanyResellerList implements IReqListByCompany {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: ParamId;
	}
	/// <summary>
	/// Gets the list of <see cref="CompanyReseller"/>s for the specified <see cref="Company"/> only if the <see cref="CompanyResellerReseller.labels"/> matches all of the given <see cref="Parameters.labels"/>.
	/// </summary>
	export class ReqCompanyResellerListByCompanyAndLabels extends ReqCompanyResellerListByCompany implements IReqListByLabels {
		/// <summary>
		/// The parsed labels given as input.
		/// </summary>
		/// <seealso cref="CompanyReseller.labels"/>
		public labels: string[] = [];
	}
	/// <summary>
	/// Gets the list of <see cref="CompanyReseller"/>s for the specified <see cref="Company"/> only if one of the specified <see cref="CompanyResellerReseller.references"/> fields match.
	/// If no references are specified, it will match any <see cref="CompanyReseller"/> with no references.
	/// If a reference value is null, it will match any <see cref="CompanyReseller"/> without that reference key.
	/// </summary>
	export class ReqCompanyResellerListByCompanyAndRefPairs extends ReqCompanyResellerListByCompany implements IReqListByReferences {
		/// <summary>
		/// The parsed references given as input.
		/// </summary>
		/// <seealso cref="CompanyResellerReseller.references"/>
		public references: Map<string, string>;
	}