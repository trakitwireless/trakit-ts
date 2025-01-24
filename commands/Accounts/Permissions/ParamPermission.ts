

	/**
	 * Similar to the <see cref="Permission"/> object, but the <see cref="company"/>, <see cref="level"/>, <see cref="method"/>, and <see cref="labels"/> are all optional.
	 *  <category>Users and Groups</category>
	 */
	export class ParamPermission {
		/**
		 * The <see cref="Company"/> that this permission targets.
		 * If not given, will default to the <see cref="UserAdvanced.company"/>, <see cref="UserGroup.company"/> or <see cref="Machine.company"/> to which it belongs.
		 * {@link Company.id}
		 */
		company: ulong = NaN;
		/**
		 * The kind of <see cref="PermissionType"/>.
		 *  <override required="always" />
		 */
		kind: PermissionType;
		/**
		 * The level of access being defined.
		 *  <override value="read"/>
		 */
		level?: PermissionLevel;
		/**
		 * The way the access is used.
		 *  <override value="grant"/>
		 */
		method?: PermissionMethod;
		/**
		 * Codified names of <see cref="CompanyLabels.labels"/>.  If list is empty, this permission applies for all labels.
		 *  <override>
		 *  <values format="codified">
		 * {@link LabelStyle.code}
		 *  </values>
		 *  </override>
		 */
		labels: string[] = [];
	}