

	/// <summary>
	/// A container for the requested <see cref="users"/>.
	/// </summary>
	export abstract class RespUserList extends Response {
		/// <summary>
		/// The list of requested <see cref="User"/>s.
		/// </summary>
		public users: User[] = [];
	}

	/// <summary>
	/// Contains the <see cref="Company.id"/> of the collection.
	/// </summary>
	export class RespUserListByCompany extends RespUserList {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: RespId;
	}