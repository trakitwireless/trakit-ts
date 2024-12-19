

	/// <summary>
	/// Similar to the <see cref="UserAdvanced"/> object, but instead of the <see cref="groups"/> being a list of identifiers,
	/// the <see cref="UserGroup"/> objects are embedded within.
	/// </summary>
	export class SelfUserAdvanced extends UserAdvanced {
		/// <summary>
		/// The list of <see cref="UserGroup"/> to which this <see cref="User"/> belongs.
		/// </summary>
		new public groups: UserGroup[] = [];
	}