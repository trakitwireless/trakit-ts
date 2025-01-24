

	/**
	 * A container for the requested <see cref="users"/>.
	 */
	export abstract class RespUserList extends Response {
		/**
		 * The list of requested <see cref="User"/>s.
		 */
		public users: User[] = [];
	}

	/**
	 * Contains the <see cref="Company.id"/> of the collection.
	 */
	export class RespUserListByCompany extends RespUserList {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		public company: RespId;
	}