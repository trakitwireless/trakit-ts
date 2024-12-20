

	/// <summary>
	/// A container for the requested <see cref="companyResellers"/>.
	/// </summary>
	export abstract class RespCompanyResellerList extends Response {
		/// <summary>
		/// The list of requested <see cref="CompanyReseller"/>s.
		/// </summary>
		public companyResellers: CompanyReseller[] = [];
	}

	/// <summary>
	/// A container owner <see cref="Company"/> of the collection.
	/// </summary>
	export class RespCompanyResellerListByCompany extends RespCompanyResellerList {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: RespId;
	}
	/// <summary>
	/// A container owner <see cref="Company"/> of the collection.
	/// </summary>
	export class RespCompanyResellerListByCompanyAndLabels extends RespCompanyResellerListByCompany {
		/// <summary>
		/// The labels given as input.
		/// </summary>
		/// <seealso cref="CompanyReseller.labels"/>
		public labels: string[] = [];
	}
	/// <summary>
	/// A container owner <see cref="Company"/> of the collection.
	/// </summary>
	export class RespCompanyResellerListByCompanyAndRefPairs extends RespCompanyResellerListByCompany {
		/// <summary>
		/// The reference string given as input.
		/// </summary>
		/// <seealso cref="CompanyReseller.references"/>
		public references: Map<string, string>;
	}