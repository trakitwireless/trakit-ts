

	/// <summary>
	/// Parameters used to create or update an <see cref="UserGroup"/>.
	/// </summary>
	export class ParamUserGroupMerge extends ParamMergeSubscribable {
		/// <summary>
		/// The unique identifier of the <see cref="UserGroup"/> you want to update.
		/// </summary>
		public id: ulong = NaN;
		/// <summary>
		/// The company to which this <see cref="UserGroup"/> belongs.
		/// After creation, this value is read-only.
		/// </summary>
		public company: ulong = NaN;
		/// <summary>
		/// Name for the <see cref="UserGroup"/>.
		/// </summary>
		public name: string = "";
		/// <summary>
		/// Notes for the <see cref="UserGroup"/>.
		/// </summary>
		public notes: string = "";
		/// <summary>
		/// List of permissions assigned to members of this <see cref="UserGroup"/>.
		/// </summary>
		public permissions: ParamPermission[] = [];
	}