

	/**
	 * A container for the requested <see cref="documents"/>.
	 */
	export abstract class RespDocumentList extends Response {
		/**
		 * The list of requested <see cref="Document"/>s.
		 */
		public documents: Document[] = [];
	}

	/**
	 * Contains the <see cref="Company.id"/> of the collection.
	 */
	export class RespDocumentListByCompany extends RespDocumentList {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		public company: RespId;
	}