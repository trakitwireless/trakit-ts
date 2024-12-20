

	/// <summary>
	/// A container for the requested <see cref="companies"/>.
	/// </summary>
	export abstract class RespCompanyList extends Response {
		/// <summary>
		/// The list of requested <see cref="Company"/>s.
		/// </summary>
		public companies: Company[] = [];
	}

	/// <summary>
	/// Contains the <see cref="Company.id"/> of the collection.
	/// </summary>
	export class RespCompanyListByCompany extends RespCompanyList {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: RespId;
	}
	/// <summary>
	/// Contains the <see cref="Company.id"/> of the collection.
	/// </summary>
	export class RespCompanyListByCompanyAndRefPairs extends RespCompanyListByCompany implements IReqListByReferences {
		/// <summary>
		/// The parsed references given as input.
		/// </summary>
		/// <seealso cref="CompanyGeneral.references"/>
		public references: Map<string, string>;
	}