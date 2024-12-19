

	/// <summary>
	/// A container for the requested <see cref="companyDirectorys"/>.
	/// </summary>
	export abstract class RespCompanyDirectoryList extends Response {
		/// <summary>
		/// The list of requested <see cref="CompanyDirectory"/>s.
		/// </summary>
		public companyDirectorys: CompanyDirectory[] = [];
	}

	/// <summary>
	/// A container owner <see cref="Company"/> of the collection.
	/// </summary>
	export class RespCompanyDirectoryListByCompany extends RespCompanyDirectoryList {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: RespId;
	}
	/// <summary>
	/// A container owner <see cref="Company"/> of the collection.
	/// </summary>
	export class RespCompanyDirectoryListByCompanyAndLabels extends RespCompanyDirectoryListByCompany {
		/// <summary>
		/// The labels given as input.
		/// </summary>
		/// <seealso cref="CompanyDirectory.labels"/>
		public labels: string[] = [];
	}
	/// <summary>
	/// A container owner <see cref="Company"/> of the collection.
	/// </summary>
	export class RespCompanyDirectoryListByCompanyAndRefPairs extends RespCompanyDirectoryListByCompany {
		/// <summary>
		/// The reference string given as input.
		/// </summary>
		/// <seealso cref="CompanyDirectory.references"/>
		public references: Map<string, string>;
	}