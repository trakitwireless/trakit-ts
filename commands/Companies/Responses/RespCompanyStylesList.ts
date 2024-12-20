

	/// <summary>
	/// A container for the requested <see cref="companyStyless"/>.
	/// </summary>
	export abstract class RespCompanyStylesList extends Response {
		/// <summary>
		/// The list of requested <see cref="CompanyStyles"/>s.
		/// </summary>
		public companyStyless: CompanyStyles[] = [];
	}

	/// <summary>
	/// A container owner <see cref="Company"/> of the collection.
	/// </summary>
	export class RespCompanyStylesListByCompany extends RespCompanyStylesList {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: RespId;
	}
	/// <summary>
	/// A container owner <see cref="Company"/> of the collection.
	/// </summary>
	export class RespCompanyStylesListByCompanyAndLabels extends RespCompanyStylesListByCompany {
		/// <summary>
		/// The labels given as input.
		/// </summary>
		/// <seealso cref="CompanyStyles.labels"/>
		public labels: string[] = [];
	}
	/// <summary>
	/// A container owner <see cref="Company"/> of the collection.
	/// </summary>
	export class RespCompanyStylesListByCompanyAndRefPairs extends RespCompanyStylesListByCompany {
		/// <summary>
		/// The reference string given as input.
		/// </summary>
		/// <seealso cref="CompanyStyles.references"/>
		public references: Map<string, string>;
	}