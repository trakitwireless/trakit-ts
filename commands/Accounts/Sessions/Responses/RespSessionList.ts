

	/**
	 * A container for the requested <see cref="sessions"/>.
	 */
	export abstract class RespSessionList extends Response {
		/**
		 * The list of requested <see cref="Session"/>.
		 */
		sessions: Session[] = [];
	}

	/**
	 * Contains the <see cref="Company.id"/> of the collection.
	 */
	export abstract class RespSessionListByCompany extends RespSessionList {
		/**
		 * An object to contain the "id" of the <see cref="Company"/> to which the array of <see cref="Session"/>s belong.
		 */
		company: RespId;
	}
	/**
	 * Contains the <see cref="User.login"/> of the collection.
	 */
	export abstract class RespSessionListByUser extends RespSessionList {
		/**
		 * An object to contain the "login" of the <see cref="User"/> to which the array of <see cref="Session"/>s belong.
		 */
		user: RespLoginCompany;
	}