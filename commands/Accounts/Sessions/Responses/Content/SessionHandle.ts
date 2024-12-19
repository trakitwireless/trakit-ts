

	/// <summary>
	/// A container class used to house the "handle" identifying a <see cref="Session"/>.
	/// </summary>
	export class SessionHandle {
		/// <summary>
		/// A "handle" identifying a resource.
		/// </summary>
		public handle: string = "";
		/// <summary>
		/// Identifier of the <see cref="Company"/> to which this object belongs
		/// </summary>
		/// <seealso cref="Company.id"/>
		public company: ulong = NaN;
		/// <summary>
		/// The <see cref="User"/> to which the <see cref="Session"/> belongs.
		/// </summary>
		/// <seealso cref="User.login" />
		public login: string = "";
		/// <summary>
		/// A timestamp for when the <see cref="Session"/> will expire.
		/// </summary>
		public expiry: Date = DATE();
	}