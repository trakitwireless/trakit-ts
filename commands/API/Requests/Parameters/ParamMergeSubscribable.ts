
	/// <summary>
	/// An abstract meant to help with validating "merge" operations.
	/// </summary>
	export abstract class ParamMergeSubscribable extends ParamMerge {
		/// <summary>
		/// The version keys used to validate synchronization.
		/// </summary>
		public v: int[] = [];
	}