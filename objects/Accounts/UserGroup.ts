

	/**
	 * Members of a group (as set by a <see cref="User"/>'s <see cref="UserAdvanced.groups"/> or <see cref="Machine"/>'s <see cref="Machine.groups"/>)
	 * allow for easy administration of permissions and levels of access.
	 */
	export class UserGroup extends Component implements IIdUlong, INamed, IBelongCompany, IDeletable {
		/**
		 * Unique identifier of this group.
		 */
		public id: ulong = NaN;
		/**
		 * The company to which this group belongs.
		 * {@link Company.id}
		 */
		public company: ulong = NaN;
		/**
		 * A name given to this group.
		 *  <override max-length="100" />
		 */
		public name: string = "";
		/**
		 * Notes about this group, and to whom this group should be applied.
		 */
		public notes: string = "";
		/**
		 * Permissions for this group.
		 */
		public permissions: Permission[] = [];

		// IRequestable
		/**
		 * The <see cref="id"/> is the key.
		 */
public getKey(): string { return this.id.toString(); }

		// IDeletable
		/**
		 * Indicates whether this object was deleted.
		 */
		public deleted: boolean = false;
		/**
		 * Timestamp from the action that deleted or suspended this object.
		 */
		public since: Date = DATE();
	}