

	/**
	 * A container for the requested <see cref="icons"/>.
	 */
	export abstract class RespIconList extends Response {
		/**
		 * The list of requested <see cref="Icon"/>s.
		 */
		public icons: Icon[] = [];
	}

	/**
	 * Contains the <see cref="Company.id"/> of the collection.
	 */
	export class RespIconListByCompany extends RespIconList {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		public company: RespId;
	}