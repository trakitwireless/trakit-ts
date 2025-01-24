


	/**
	 * A container for the <see cref="formTemplate"/>.
	 */
	export class RespFormTemplateBatchDelete extends Response {
		/**
		 * Details about deleting/restoring the requested <see cref="FormTemplate"/>.
		 */
		formTemplates: RespIdDeleted[] = [];
	}