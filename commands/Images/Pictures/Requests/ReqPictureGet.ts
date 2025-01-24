

	/**
	 * Gets details of the specified <see cref="Picture"/>.
	 */
	export class ReqPictureGet extends ReqPicture implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted <see cref="Picture"/> (if it exists).
		 */
		includeDeleted: boolean = false;
	}