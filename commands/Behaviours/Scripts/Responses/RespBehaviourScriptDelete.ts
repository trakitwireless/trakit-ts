

	/// <summary>
	/// A container for the <see cref="behaviourScript"/>.
	/// </summary>
	export class RespBehaviourScriptDelete extends Response {
		/// <summary>
		/// Details about deleting/restoring the requested <see cref="BehaviourScript"/>.
		/// </summary>
		public behaviourScript: RespIdDeleted;
	}