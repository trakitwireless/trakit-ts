
	/**
	 * Permissions and group membership defined for a user.
	 */
	export class UserAdvanced extends Component implements IBelongCompany, IHavePermissions {
		/**
		 * The unique public email address used to access the system.
		 * {@link User.login}
		 *  <override min-length="6" max-length="254" format="email" />
		 */
		login: string = "";
		/**
		 * The company to which this user belongs.
		 * {@link Company.id}
		 */
		company: ulong = NaN;
		/**
		 * A list of groups to which this user belongs.
		 * {@link UserGroup.id}
		 */
		groups: ulong[] = [];
		/**
		 * Individual permission rules which override the group rules.
		 */
		permissions: Permission[] = [];

		// IRequestable
		/**
		 * The {@link login} is the key.
		 */
getKey(): string { return this.login; }
	}