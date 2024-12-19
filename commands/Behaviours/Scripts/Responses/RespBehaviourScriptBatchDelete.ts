

	/// <summary>
	/// A container for the <see cref="behaviourScript"/>.
	/// </summary>
	export class RespBehaviourScriptBatchDelete extends Response {
		/// <summary>
		/// Details about deleting/restoring the requested <see cref="BehaviourScript"/>.
		/// </summary>
		public behaviourScripts: RespIdDeleted[] = [];
	}