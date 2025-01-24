

	/**
	 * A container for the requested <see cref="contacts"/>.
	 */
	export abstract class RespContactList extends Response {
		/**
		 * The list of requested <see cref="Contact"/>s.
		 */
		public contacts: Contact[] = [];
	}

	/**
	 * Contains the <see cref="Company.id"/> of the collection.
	 */
	export class RespContactListByCompany extends RespContactList {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		public company: RespId;
	}