


	/**
	 * Gets details of the specified <see cref="FormTemplate"/>.
	 */
	export class ReqFormTemplateGet extends ReqFormTemplate implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted <see cref="FormTemplate"/> (if it exists).
		 */
		public includeDeleted: boolean = false;
	}