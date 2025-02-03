

	/**
	 * A container for the requested {@link documents}.
	 */
	export abstract class RespDocumentList extends Response {
		/**
		 * The list of requested {@link Document}s.
		 */
		documents: Document[] = [];
	}

	/**
	 * Contains the {@link Company.id} of the collection.
	 */
	export class RespDocumentListByCompany extends RespDocumentList {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: RespId;
	}