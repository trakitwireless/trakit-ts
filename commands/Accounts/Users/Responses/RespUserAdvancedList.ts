

	/// <summary>
	/// A container for the requested <see cref="userAdvanceds"/>.
	/// </summary>
	export abstract class RespUserAdvancedList extends Response {
		/// <summary>
		/// The list of requested <see cref="UserAdvanced"/>s.
		/// </summary>
		public userAdvanceds: UserAdvanced[] = [];
	}

	/// <summary>
	/// A container owner <see cref="Company"/> of the collection.
	/// </summary>
	export class RespUserAdvancedListByCompany extends RespUserAdvancedList {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: RespId;
	}
	/// <summary>
	/// A container owner <see cref="Company"/> of the collection.
	/// </summary>
	export class RespUserAdvancedListByCompanyAndLabels extends RespUserAdvancedListByCompany {
		/// <summary>
		/// The labels given as input.
		/// </summary>
		/// <seealso cref="UserGeneral.labels"/>
		public labels: string[] = [];
	}
	/// <summary>
	/// A container owner <see cref="Company"/> of the collection.
	/// </summary>
	export class RespUserAdvancedListByCompanyAndRefPairs extends RespUserAdvancedListByCompany {
		/// <summary>
		/// The reference string given as input.
		/// </summary>
		/// <seealso cref="UserGeneral.references"/>
		public references: Map<string, string>;
	}