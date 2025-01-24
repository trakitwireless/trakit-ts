

	/**
	 * A defined permission for <see cref="User"/>s, <see cref="UserGroup"/>s, and <see cref="Machine"/>s.
	 */
	export class Permission {
		/**
		 * The <see cref="Company"/> that this permission targets.
		 * {@link Company.id}
		 */
		company: ulong = NaN;
		/**
		 * The type of permission.
		 */
		kind: PermissionType;
		/**
		 * The kind of permission.
		 *  <override type="Vorgon.UserPermissionType"/>
		 * @deprecated Use .kind instead
		 */
		string type {
			get => this.kind.toString();
			set => this.kind = (PermissionType)Enum.Parse(typeof(PermissionType), value, true);
		}
		/**
		 * The level of access being defined.
		 */
		level: PermissionLevel;
		/**
		 * The way the access is used.
		 */
		method: PermissionMethod;
		/**
		 * Codified names of <see cref="LabelStyle"/>s.  If list is empty, this permission applies for all labels.
		 *  <override>
		 *  <values format="codified">
		 * {@link LabelStyle.code}
		 *  </values>
		 *  </override>
		 */
		labels: string[] = [];
	}