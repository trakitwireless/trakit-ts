

	/**
	 * A container for the requested {@link userGroups}.
	 */
	export abstract class RespUserGroupList extends Response {
		/**
		 * The list of requested {@link UserGroup}s.
		 */
		userGroups: UserGroup[] = [];
	}

	/**
	 * Contains the {@link Company.id} of the collection.
	 */
	export class RespUserGroupListByCompany extends RespUserGroupList {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: RespId;
	}