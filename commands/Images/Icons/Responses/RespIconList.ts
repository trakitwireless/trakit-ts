

	/**
	 * A container for the requested {@link icons}.
	 */
	export abstract class RespIconList extends Response {
		/**
		 * The list of requested {@link Icon}s.
		 */
		icons: Icon[] = [];
	}

	/**
	 * Contains the {@link Company.id} of the collection.
	 */
	export class RespIconListByCompany extends RespIconList {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: RespId;
	}