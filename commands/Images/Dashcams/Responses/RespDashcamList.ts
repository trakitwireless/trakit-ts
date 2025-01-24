

	/**
	 * A container for the requested <see cref="dashcams"/>.
	 */
	export abstract class RespDashcamList extends Response {
		/**
		 * The list of requested <see cref="Dashcam"/>s.
		 */
		public dashcams: Dashcam[] = [];
	}

	/**
	 * Contains the <see cref="Company.id"/> of the collection.
	 */
	export class RespDashcamListByCompany extends RespDashcamList {
		/**
		 * Identifier of the <see cref="Company"/> to which this collection belongs.
		 */
		public company: RespId;
	}