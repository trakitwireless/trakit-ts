

	/**
	 * Gets details of the specified {@link Dashcam}.
	 */
	export class ReqDashcamGet extends ReqDashcam implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted {@link Dashcam} (if it exists).
		 */
		includeDeleted: boolean = false;
	}