

	/// <summary>
	/// A container for the requested <see cref="icons"/>.
	/// </summary>
	export abstract class RespIconList extends Response {
		/// <summary>
		/// The list of requested <see cref="Icon"/>s.
		/// </summary>
		public icons: Icon[] = [];
	}

	/// <summary>
	/// Contains the <see cref="Company.id"/> of the collection.
	/// </summary>
	export class RespIconListByCompany extends RespIconList {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: RespId;
	}