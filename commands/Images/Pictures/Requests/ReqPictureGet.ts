

	/**
	 * Gets details of the specified {@link Picture}.
	 */
	export class ReqPictureGet extends ReqPicture implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted {@link Picture} (if it exists).
		 */
		includeDeleted: boolean = false;
	}