


	/**
	 * Gets details of the specified {@link FormTemplate}.
	 */
	export class ReqFormTemplateGet extends ReqFormTemplate implements IReqIDeletable {
		/**
		 * When true, the command will also return a deleted {@link FormTemplate} (if it exists).
		 */
		includeDeleted: boolean = false;
	}