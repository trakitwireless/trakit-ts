
	/**
	 * An abstract meant to help with validating "merge" operations.
	 */
	export abstract class ParamMergeSubscribable extends ParamMerge {
		/**
		 * The version keys used to validate synchronization.
		 */
		v: int[] = [];
	}