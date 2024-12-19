

	/// <summary>
	/// A container for the <see cref="contact"/>.
	/// </summary>
	export class RespContactBatchDelete extends Response {
		/// <summary>
		/// Details about deleting/restoring the requested <see cref="Contact"/>.
		/// </summary>
		public contacts: RespIdDeleted[] = [];
	}