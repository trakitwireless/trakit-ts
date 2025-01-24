

	/**
	 * A container for the details of the <see cref="Machine"/> requested.
	 */
	export class SelfMachine extends Machine {
		/**
		 * A list of groups to which this machine account belongs.
		 * {@link UserGroup.id}
		 */
		new public groups: UserGroup[] = [];
	}