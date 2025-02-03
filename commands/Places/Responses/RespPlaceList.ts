


	/**
	 * A container for the requested {@link places}.
	 */
	export abstract class RespPlaceList extends Response {
		/**
		 * The list of requested {@link Place}s.
		 */
		places: Place[] = [];
	}

	/**
	 * Contains the {@link Company.id} of the collection.
	 */
	export class RespPlaceListByCompany extends RespPlaceList {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: RespId;
	}