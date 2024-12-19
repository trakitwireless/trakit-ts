

	/// <summary>
	/// A container for the requested <see cref="contacts"/>.
	/// </summary>
	export abstract class RespContactList extends Response {
		/// <summary>
		/// The list of requested <see cref="Contact"/>s.
		/// </summary>
		public contacts: Contact[] = [];
	}

	/// <summary>
	/// Contains the <see cref="Company.id"/> of the collection.
	/// </summary>
	export class RespContactListByCompany extends RespContactList {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: RespId;
	}