

	/// <summary>
	/// A container for the requested <see cref="pictures"/>.
	/// </summary>
	export abstract class RespPictureList extends Response {
		/// <summary>
		/// The list of requested <see cref="Picture"/>s.
		/// </summary>
		public pictures: Picture[] = [];
	}

	/// <summary>
	/// Contains the <see cref="Company.id"/> of the collection.
	/// </summary>
	export class RespPictureListByCompany extends RespPictureList {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: RespId;
	}