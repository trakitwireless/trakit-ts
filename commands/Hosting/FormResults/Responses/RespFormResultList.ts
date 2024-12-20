


	/// <summary>
	/// A container for the requested <see cref="formResults"/>.
	/// </summary>
	export abstract class RespFormResultList extends Response {
		/// <summary>
		/// The list of requested <see cref="FormResult"/>s.
		/// </summary>
		public formResults: FormResult[] = [];
	}

	/// <summary>
	/// Contains the <see cref="Company.id"/> of the collection.
	/// </summary>
	export class RespFormResultListByCompany extends RespFormResultList {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: RespId;
	}