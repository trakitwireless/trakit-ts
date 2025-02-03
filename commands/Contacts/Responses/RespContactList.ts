

	/**
	 * A container for the requested {@link contacts}.
	 */
	export abstract class RespContactList extends Response {
		/**
		 * The list of requested {@link Contact}s.
		 */
		contacts: Contact[] = [];
	}

	/**
	 * Contains the {@link Company.id} of the collection.
	 */
	export class RespContactListByCompany extends RespContactList {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: RespId;
	}