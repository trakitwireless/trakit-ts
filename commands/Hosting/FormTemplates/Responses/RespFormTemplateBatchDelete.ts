


	/**
	 * A container for the {@link formTemplate}.
	 */
	export class RespFormTemplateBatchDelete extends Response {
		/**
		 * Details about deleting/restoring the requested {@link FormTemplate}.
		 */
		formTemplates: RespIdDeleted[] = [];
	}