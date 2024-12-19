

	/// <summary>
	/// A container for the <see cref="User"/> of the current session.
	/// </summary>
	export class RespSessionDelete extends Response {
		/// <summary>
		/// An object which contains the <see cref="Session.handle"/>, related <see cref="User.login"/>, and owning <see cref="User.company"/> id.
		/// </summary>
		public session: SessionHandle;
	}