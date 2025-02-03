

	/**
	 * A container for the requested {@link users}.
	 */
	export abstract class RespUserList extends Response {
		/**
		 * The list of requested {@link User}s.
		 */
		users: User[] = [];
	}

	/**
	 * Contains the {@link Company.id} of the collection.
	 */
	export class RespUserListByCompany extends RespUserList {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: RespId;
	}