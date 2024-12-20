

	/// <summary>
	/// A defined permission for <see cref="User"/>s, <see cref="UserGroup"/>s, and <see cref="Machine"/>s.
	/// </summary>
	export class Permission {
		/// <summary>
		/// The <see cref="Company"/> that this permission targets.
		/// </summary>
		/// <seealso cref="Company.id" />
		public company: ulong = NaN;
		/// <summary>
		/// The type of permission.
		/// </summary>
		public kind: PermissionType;
		/// <summary>
		/// The kind of permission.
		/// </summary>
		/// <override type="Vorgon.UserPermissionType"/>
		[Obsolete("Use .kind instead")]
		public string type {
			get => this.kind.toString();
			set => this.kind = (PermissionType)Enum.Parse(typeof(PermissionType), value, true);
		}
		/// <summary>
		/// The level of access being defined.
		/// </summary>
		public level: PermissionLevel;
		/// <summary>
		/// The way the access is used.
		/// </summary>
		public method: PermissionMethod;
		/// <summary>
		/// Codified names of <see cref="LabelStyle"/>s.  If list is empty, this permission applies for all labels.
		/// </summary>
		/// <override>
		/// <values format="codified">
		/// <seealso cref="LabelStyle.code" />
		/// </values>
		/// </override>
		public labels: string[] = [];
	}