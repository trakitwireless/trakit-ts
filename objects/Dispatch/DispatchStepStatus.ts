
	/**
	 * The lifetime of all {@link DispatchStep}s (in order).
	 */
	export enum DispatchStepStatus {
		/**
		 * The {@link DispatchStep} has not yet been started.
		 */
		pending,
		/**
		 * The asset is on the way to the {@link DispatchStep}'s location next.
		 */
		onRoute,
		/**
		 * The asset has arrived at the {@link DispatchStep}'s location.
		 */
		arrived,
		/**
		 * The {@link DispatchStep} is done (or the asset has departed the location).
		 */
		completed,
	}