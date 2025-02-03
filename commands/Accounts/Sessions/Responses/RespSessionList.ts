

	/**
	 * A container for the requested {@link sessions}.
	 */
	export abstract class RespSessionList extends Response {
		/**
		 * The list of requested {@link Session}.
		 */
		sessions: Session[] = [];
	}

	/**
	 * Contains the {@link Company.id} of the collection.
	 */
	export abstract class RespSessionListByCompany extends RespSessionList {
		/**
		 * An object to contain the "id" of the {@link Company} to which the array of {@link Session}s belong.
		 */
		company: RespId;
	}
	/**
	 * Contains the {@link User.login} of the collection.
	 */
	export abstract class RespSessionListByUser extends RespSessionList {
		/**
		 * An object to contain the "login" of the {@link User} to which the array of {@link Session}s belong.
		 */
		user: RespLoginCompany;
	}