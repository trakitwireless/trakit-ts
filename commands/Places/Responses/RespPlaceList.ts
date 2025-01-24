


	/**
	 * A container for the requested <see cref="places"/>.
	 */
	export abstract class RespPlaceList extends Response {
		/**
		 * The list of requested <see cref="Place"/>s.
		 */
		public places: Place[] = [];
	}

	/**
	 * Contains the <see cref="Company.id"/> of the collection.
	 */
	export class RespPlaceListByCompany extends RespPlaceList {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		public company: RespId;
	}