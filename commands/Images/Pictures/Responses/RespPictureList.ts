

	/**
	 * A container for the requested <see cref="pictures"/>.
	 */
	export abstract class RespPictureList extends Response {
		/**
		 * The list of requested <see cref="Picture"/>s.
		 */
		pictures: Picture[] = [];
	}

	/**
	 * Contains the <see cref="Company.id"/> of the collection.
	 */
	export class RespPictureListByCompany extends RespPictureList {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		company: RespId;
	}