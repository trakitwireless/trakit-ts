

	/// <summary>
	/// Gets details of the specified <see cref="company"/>.
	/// </summary>
	export abstract class ReqCompanyList extends Request implements IReqIDeletable {
		/// <summary>
		/// When set to true, the full tree of <see cref="Company">companies</see> is returned.
		/// Otherwise, only the first-level child-<see cref="Company">companies</see> are included.
		/// </summary>
		public tree: boolean = false;
		/// <summary>
		/// When set to true, the parent <see cref="Company"/> is included in the results.
		/// </summary>
		public includeParent: boolean = false;
		/// <summary>
		/// When true, the command will also return  deleted <see cref="Company"/>s.
		/// </summary>
		public includeDeleted: boolean = false;
	}
	/// <summary>
	/// Contains the <see cref="Company.id"/> of the collection.
	/// </summary>
	export class ReqCompanyListByCompany extends ReqCompanyList implements IReqListByCompany {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: ParamId;
	}
	/// <summary>
	/// Contains the <see cref="Company.id"/> of the collection.
	/// </summary>
	export class ReqCompanyListByCompanyAndRefPairs extends ReqCompanyListByCompany implements IReqListByReferences {
		/// <summary>
		/// Case-insensitive reference pairs used to match <see cref="Company"/>s.
		/// </summary>
		/// <seealso cref="CompanyGeneral.references"/>
		public references: Map<string, string>;
	}