

	/// <summary>
	/// A container for the <see cref="contact"/>.
	/// </summary>
	export class RespContactDelete extends Response {
		/// <summary>
		/// Details about deleting/restoring the requested <see cref="Contact"/>.
		/// </summary>
		public contact: RespIdDeleted;
	}