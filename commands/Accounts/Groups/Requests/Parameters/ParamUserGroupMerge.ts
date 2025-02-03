

	/**
	 * Parameters used to create or update an {@link UserGroup}.
	 */
	export class ParamUserGroupMerge extends ParamMergeSubscribable {
		/**
		 * The unique identifier of the {@link UserGroup} you want to update.
		 */
		id: ulong = NaN;
		/**
		 * The company to which this {@link UserGroup} belongs.
		 * After creation, this value is read-only.
		 */
		company: ulong = NaN;
		/**
		 * Name for the {@link UserGroup}.
		 */
		name: string = "";
		/**
		 * Notes for the {@link UserGroup}.
		 */
		notes: string = "";
		/**
		 * List of permissions assigned to members of this {@link UserGroup}.
		 */
		permissions: ParamPermission[] = [];
	}