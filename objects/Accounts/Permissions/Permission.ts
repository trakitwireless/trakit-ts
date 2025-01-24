

	/**
	 * A defined permission for <see cref="User"/>s, <see cref="UserGroup"/>s, and <see cref="Machine"/>s.
	 */
	export class Permission {
		/**
		 * The <see cref="Company"/> that this permission targets.
		 * {@link Company.id}
		 */
		public company: ulong = NaN;
		/**
		 * The type of permission.
		 */
		public kind: PermissionType;
		/**
		 * The kind of permission.
		 *  <override type="Vorgon.UserPermissionType"/>
		 * @deprecated Use .kind instead
		 */
		public string type {
			get => this.kind.toString();
			set => this.kind = (PermissionType)Enum.Parse(typeof(PermissionType), value, true);
		}
		/**
		 * The level of access being defined.
		 */
		public level: PermissionLevel;
		/**
		 * The way the access is used.
		 */
		public method: PermissionMethod;
		/**
		 * Codified names of <see cref="LabelStyle"/>s.  If list is empty, this permission applies for all labels.
		 *  <override>
		 *  <values format="codified">
		 * {@link LabelStyle.code}
		 *  </values>
		 *  </override>
		 */
		public labels: string[] = [];
	}