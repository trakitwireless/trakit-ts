

	/**
	 * Similar to the {@link Permission} object, but the {@link company}, {@link level}, {@link method}, and {@link labels} are all optional.
	 *  <category>Users and Groups</category>
	 */
	export class ParamPermission {
		/**
		 * The {@link Company} that this permission targets.
		 * If not given, will default to the {@link UserAdvanced.company}, {@link UserGroup.company} or {@link Machine.company} to which it belongs.
		 * {@link Company.id}
		 */
		company: ulong = NaN;
		/**
		 * The kind of {@link PermissionType}.
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
		 * Codified names of {@link CompanyLabels.labels}.  If list is empty, this permission applies for all labels.
		 *  <override>
		 *  <values format="codified">
		 * {@link LabelStyle.code}
		 *  </values>
		 *  </override>
		 */
		labels: string[] = [];
	}