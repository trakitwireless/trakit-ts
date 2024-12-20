

	/// <summary>
	/// A container for the requested <see cref="userGroups"/>.
	/// </summary>
	export abstract class RespUserGroupList extends Response {
		/// <summary>
		/// The list of requested <see cref="UserGroup"/>s.
		/// </summary>
		public userGroups: UserGroup[] = [];
	}

	/// <summary>
	/// Contains the <see cref="Company.id"/> of the collection.
	/// </summary>
	export class RespUserGroupListByCompany extends RespUserGroupList {
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this collection belongs.
		/// </summary>
		public company: RespId;
	}