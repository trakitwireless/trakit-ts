

	/// <summary>
	/// A container for the <see cref="behaviour"/>.
	/// </summary>
	export class RespBehaviourDelete extends Response {
		/// <summary>
		/// Details about deleting/restoring the requested <see cref="Behaviour"/>.
		/// </summary>
		public behaviour: RespIdDeleted;
	}