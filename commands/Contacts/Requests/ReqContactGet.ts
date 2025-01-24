

	/**
	 * Gets details of the specified <see cref="Contact"/>.
	 */
	export class ReqContactGet extends ReqContact implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted <see cref="Contact"/> (if it exists).
		 */
		public includeDeleted: boolean = false;
	}