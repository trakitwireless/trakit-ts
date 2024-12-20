

	/// <summary>
	/// A container for the <see cref="behaviour"/>.
	/// </summary>
	export class RespBehaviourBatchDelete extends Response {
		/// <summary>
		/// Details about deleting/restoring the requested <see cref="Behaviour"/>.
		/// </summary>
		public behaviours: RespIdDeleted[] = [];
	}