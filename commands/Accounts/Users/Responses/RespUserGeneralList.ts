

	/// <summary>
	/// A container for the requested <see cref="userGenerals"/>.
	/// </summary>
	export abstract class RespUserGeneralList extends Response {
		/// <summary>
		/// The list of requested <see cref="UserGeneral"/>s.
		/// </summary>
		public userGenerals: UserGeneral[] = [];
	}

	/// <summary>
	/// A container owner <see cref="Company"/> of the collection.
	/// </summary>
	export class RespUserGeneralListByCompany extends RespUserGeneralList {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: RespId;
	}
	/// <summary>
	/// A container owner <see cref="Company"/> of the collection.
	/// </summary>
	export class RespUserGeneralListByCompanyAndLabels extends RespUserGeneralListByCompany {
		/// <summary>
		/// The labels given as input.
		/// </summary>
		/// <seealso cref="UserGeneral.labels"/>
		public labels: string[] = [];
	}
	/// <summary>
	/// A container owner <see cref="Company"/> of the collection.
	/// </summary>
	export class RespUserGeneralListByCompanyAndRefPairs extends RespUserGeneralListByCompany {
		/// <summary>
		/// The reference string given as input.
		/// </summary>
		/// <seealso cref="UserGeneral.references"/>
		public references: Map<string, string>;
	}