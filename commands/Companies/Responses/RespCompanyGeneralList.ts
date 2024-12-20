

	/// <summary>
	/// A container for the requested <see cref="companyGenerals"/>.
	/// </summary>
	export abstract class RespCompanyGeneralList extends Response {
		/// <summary>
		/// The list of requested <see cref="CompanyGeneral"/>s.
		/// </summary>
		public companyGenerals: CompanyGeneral[] = [];
	}

	/// <summary>
	/// A container owner <see cref="Company"/> of the collection.
	/// </summary>
	export class RespCompanyGeneralListByCompany extends RespCompanyGeneralList {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: RespId;
	}
	/// <summary>
	/// A container owner <see cref="Company"/> of the collection.
	/// </summary>
	export class RespCompanyGeneralListByCompanyAndLabels extends RespCompanyGeneralListByCompany {
		/// <summary>
		/// The labels given as input.
		/// </summary>
		/// <seealso cref="CompanyGeneral.labels"/>
		public labels: string[] = [];
	}
	/// <summary>
	/// A container owner <see cref="Company"/> of the collection.
	/// </summary>
	export class RespCompanyGeneralListByCompanyAndRefPairs extends RespCompanyGeneralListByCompany {
		/// <summary>
		/// The reference string given as input.
		/// </summary>
		/// <seealso cref="CompanyGeneral.references"/>
		public references: Map<string, string>;
	}