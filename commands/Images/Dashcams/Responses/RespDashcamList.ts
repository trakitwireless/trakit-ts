

	/**
	 * A container for the requested {@link dashcams}.
	 */
	export abstract class RespDashcamList extends Response {
		/**
		 * The list of requested {@link Dashcam}s.
		 */
		dashcams: Dashcam[] = [];
	}

	/**
	 * Contains the {@link Company.id} of the collection.
	 */
	export class RespDashcamListByCompany extends RespDashcamList {
		/**
		 * Identifier of the {@link Company} to which this collection belongs.
		 */
		company: RespId;
	}