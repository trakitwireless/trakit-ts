

	/**
	 * Gets details of the specified <see cref="Dashcam"/>.
	 */
	export class ReqDashcamGet extends ReqDashcam implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted <see cref="Dashcam"/> (if it exists).
		 */
		includeDeleted: boolean = false;
	}