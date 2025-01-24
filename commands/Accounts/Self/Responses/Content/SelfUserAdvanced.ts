

	/**
	 * Similar to the <see cref="UserAdvanced"/> object, but instead of the <see cref="groups"/> being a list of identifiers,
	 * the <see cref="UserGroup"/> objects are embedded within.
	 */
	export class SelfUserAdvanced extends UserAdvanced {
		/**
		 * The list of <see cref="UserGroup"/> to which this <see cref="User"/> belongs.
		 */
		new public groups: UserGroup[] = [];
	}