

	/// <summary>
	/// A container for the details of the <see cref="Machine"/> requested.
	/// </summary>
	export class SelfMachine extends Machine {
		/// <summary>
		/// A list of groups to which this machine account belongs.
		/// </summary>
		/// <seealso cref="UserGroup.id" />
		new public groups: UserGroup[] = [];
	}