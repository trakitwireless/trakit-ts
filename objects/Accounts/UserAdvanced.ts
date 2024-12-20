
	/// <summary>
	/// Permissions and group membership defined for a user.
	/// </summary>
	export class UserAdvanced extends Component implements IBelongCompany, IHavePermissions {
		/// <summary>
		/// The unique public email address used to access the system.
		/// </summary>
		/// <seealso cref="User.login" />
		/// <override min-length="6" max-length="254" format="email" />
		public login: string = "";
		/// <summary>
		/// The company to which this user belongs.
		/// </summary>
		/// <seealso cref="Company.id" />
		public company: ulong = NaN;
		/// <summary>
		/// A list of groups to which this user belongs.
		/// </summary>
		/// <seealso cref="UserGroup.id" />
		public groups: ulong[] = [];
		/// <summary>
		/// Individual permission rules which override the group rules.
		/// </summary>
		public permissions: Permission[] = [];

		// IRequestable
		/// <summary>
		/// The <see cref="login"/> is the key.
		/// </summary>
		/// <returns></returns>
		public getKey(): string { return this.login; }
	}