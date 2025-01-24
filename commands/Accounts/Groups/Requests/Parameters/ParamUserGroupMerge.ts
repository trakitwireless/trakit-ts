

	/**
	 * Parameters used to create or update an <see cref="UserGroup"/>.
	 */
	export class ParamUserGroupMerge extends ParamMergeSubscribable {
		/**
		 * The unique identifier of the <see cref="UserGroup"/> you want to update.
		 */
		public id: ulong = NaN;
		/**
		 * The company to which this <see cref="UserGroup"/> belongs.
		 * After creation, this value is read-only.
		 */
		public company: ulong = NaN;
		/**
		 * Name for the <see cref="UserGroup"/>.
		 */
		public name: string = "";
		/**
		 * Notes for the <see cref="UserGroup"/>.
		 */
		public notes: string = "";
		/**
		 * List of permissions assigned to members of this <see cref="UserGroup"/>.
		 */
		public permissions: ParamPermission[] = [];
	}