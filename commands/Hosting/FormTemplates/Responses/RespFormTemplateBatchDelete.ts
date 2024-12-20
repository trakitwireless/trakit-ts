


	/// <summary>
	/// A container for the <see cref="formTemplate"/>.
	/// </summary>
	export class RespFormTemplateBatchDelete extends Response {
		/// <summary>
		/// Details about deleting/restoring the requested <see cref="FormTemplate"/>.
		/// </summary>
		public formTemplates: RespIdDeleted[] = [];
	}