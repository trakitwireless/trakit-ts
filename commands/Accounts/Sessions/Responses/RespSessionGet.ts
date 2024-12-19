

	/// <summary>
	/// A container for the <see cref="User"/> of the current session.
	/// </summary>
	export class RespSessionGet extends Response {
		/// <summary>
		/// The requested <see cref="Session"/> details.
		/// </summary>
		public session: Session;
	}