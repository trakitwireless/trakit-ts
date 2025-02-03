

	/**
	 * A container for the requested {@link pictures}.
	 */
	export abstract class RespPictureList extends Response {
		/**
		 * The list of requested {@link Picture}s.
		 */
		pictures: Picture[] = [];
	}

	/**
	 * Contains the {@link Company.id} of the collection.
	 */
	export class RespPictureListByCompany extends RespPictureList {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: RespId;
	}