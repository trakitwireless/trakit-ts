

	/// <summary>
	/// A container for the <see cref="behaviourLog"/>.
	/// </summary>
	export class RespBehaviourLogBatchDelete extends Response {
		/// <summary>
		/// Details about deleting/restoring the requested <see cref="BehaviourLog"/>.
		/// </summary>
		public behaviourLogs: RespIdDeleted[] = [];
	}