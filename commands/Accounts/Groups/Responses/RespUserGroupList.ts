

	/**
	 * A container for the requested <see cref="userGroups"/>.
	 */
	export abstract class RespUserGroupList extends Response {
		/**
		 * The list of requested <see cref="UserGroup"/>s.
		 */
		userGroups: UserGroup[] = [];
	}

	/**
	 * Contains the <see cref="Company.id"/> of the collection.
	 */
	export class RespUserGroupListByCompany extends RespUserGroupList {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		company: RespId;
	}