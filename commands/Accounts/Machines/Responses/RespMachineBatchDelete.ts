

	/// <summary>
	/// A container for the <see cref="machine"/>.
	/// </summary>
	export class RespMachineBatchDelete extends Response {
		/// <summary>
		/// Details about deleting/restoring the requested <see cref="Machine"/>.
		/// </summary>
		public machines: RespIdDeleted[] = [];
	}