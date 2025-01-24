
	/**
	 * An abstract meant to help with validating "merge" operations.
	 */
	export abstract class ParamMerge {
		/**
		 * A list of keys given to this object so we can differentiate between null and undefined.
		 */
		givenKeys: string[] = [];
	}