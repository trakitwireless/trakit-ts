

	/// <summary>
	/// Gets details of the specified <see cref="Session"/>.
	/// </summary>
	export class ReqSessionGet extends Request {
		/// <summary>
		/// An object to contain the "handle" of the <see cref="Session"/>.
		/// </summary>
		public session: ParamHandle;
	}