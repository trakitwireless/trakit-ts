

	/**
	 * Details for how long a resource is locked, or if a command cannot be executed right away, how long until it can be executed.
	 */
	export class ErrorDetailLocked extends ErrorDetail {
		/**
		 * The amount of time the resource is locked, or you are prevented from issuing the command.
		 */
		public timeout?: TimeSpan;
		/**
		 * This timestamp represents the moment the resource becomes available again.
		 */
		public until: Date = DATE();
	}