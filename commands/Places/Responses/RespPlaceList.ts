


	/// <summary>
	/// A container for the requested <see cref="places"/>.
	/// </summary>
	export abstract class RespPlaceList extends Response {
		/// <summary>
		/// The list of requested <see cref="Place"/>s.
		/// </summary>
		public places: Place[] = [];
	}

	/// <summary>
	/// Contains the <see cref="Company.id"/> of the collection.
	/// </summary>
	export class RespPlaceListByCompany extends RespPlaceList {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: RespId;
	}