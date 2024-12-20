

	/// <summary>
	/// Gets a list of <see cref="CompanyDirectory"/>s.
	/// </summary>
	export abstract class ReqCompanyDirectoryList extends Request implements IReqIDeletable {
		/// <summary>
		/// When true, the command will also return a deleted <see cref="CompanyDirectory"/> (if it exists).
		/// </summary>
		public includeDeleted: boolean = false;
	}

	/// <summary>
	/// Gets the list of <see cref="CompanyDirectory"/>s for the specified <see cref="Company"/>.
	/// </summary>
	export class ReqCompanyDirectoryListByCompany extends ReqCompanyDirectoryList implements IReqListByCompany {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: ParamId;
	}
	/// <summary>
	/// Gets the list of <see cref="CompanyDirectory"/>s for the specified <see cref="Company"/> only if the <see cref="CompanyDirectoryDirectory.labels"/> matches all of the given <see cref="Parameters.labels"/>.
	/// </summary>
	export class ReqCompanyDirectoryListByCompanyAndLabels extends ReqCompanyDirectoryListByCompany implements IReqListByLabels {
		/// <summary>
		/// The parsed labels given as input.
		/// </summary>
		/// <seealso cref="CompanyDirectory.labels"/>
		public labels: string[] = [];
	}
	/// <summary>
	/// Gets the list of <see cref="CompanyDirectory"/>s for the specified <see cref="Company"/> only if one of the specified <see cref="CompanyDirectoryDirectory.references"/> fields match.
	/// If no references are specified, it will match any <see cref="CompanyDirectory"/> with no references.
	/// If a reference value is null, it will match any <see cref="CompanyDirectory"/> without that reference key.
	/// </summary>
	export class ReqCompanyDirectoryListByCompanyAndRefPairs extends ReqCompanyDirectoryListByCompany implements IReqListByReferences {
		/// <summary>
		/// The parsed references given as input.
		/// </summary>
		/// <seealso cref="CompanyDirectoryDirectory.references"/>
		public references: Map<string, string>;
	}