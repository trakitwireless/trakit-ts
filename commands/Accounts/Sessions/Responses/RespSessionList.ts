

	/// <summary>
	/// A container for the requested <see cref="sessions"/>.
	/// </summary>
	export abstract class RespSessionList extends Response {
		/// <summary>
		/// The list of requested <see cref="Session"/>.
		/// </summary>
		public sessions: Session[] = [];
	}

	/// <summary>
	/// Contains the <see cref="Company.id"/> of the collection.
	/// </summary>
	export abstract class RespSessionListByCompany extends RespSessionList {
		/// <summary>
		/// An object to contain the "id" of the <see cref="Company"/> to which the array of <see cref="Session"/>s belong.
		/// </summary>
		public company: RespId;
	}
	/// <summary>
	/// Contains the <see cref="User.login"/> of the collection.
	/// </summary>
	export abstract class RespSessionListByUser extends RespSessionList {
		/// <summary>
		/// An object to contain the "login" of the <see cref="User"/> to which the array of <see cref="Session"/>s belong.
		/// </summary>
		public user: RespLoginCompany;
	}