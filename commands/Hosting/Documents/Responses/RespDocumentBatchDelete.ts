

	/// <summary>
	/// A container for the <see cref="document"/>.
	/// </summary>
	export class RespDocumentBatchDelete extends Response {
		/// <summary>
		/// Details about deleting/restoring the requested <see cref="Document"/>.
		/// </summary>
		public documents: RespIdDeleted[] = [];
	}