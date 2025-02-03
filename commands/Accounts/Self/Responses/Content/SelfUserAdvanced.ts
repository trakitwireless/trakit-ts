

	/**
	 * Similar to the {@link UserAdvanced} object, but instead of the {@link groups} being a list of identifiers,
	 * the {@link UserGroup} objects are embedded within.
	 */
	export class SelfUserAdvanced extends UserAdvanced {
		/**
		 * The list of {@link UserGroup} to which this {@link User} belongs.
		 */
		new public groups: UserGroup[] = [];
	}