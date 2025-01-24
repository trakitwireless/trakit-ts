
	/**
	 * The lifetime of all <see cref="DispatchStep"/>s (in order).
	 */
	export enum DispatchStepStatus {
		/**
		 * The <see cref="DispatchStep"/> has not yet been started.
		 */
		pending,
		/**
		 * The asset is on the way to the <see cref="DispatchStep"/>'s location next.
		 */
		onRoute,
		/**
		 * The asset has arrived at the <see cref="DispatchStep"/>'s location.
		 */
		arrived,
		/**
		 * The <see cref="DispatchStep"/> is done (or the asset has departed the location).
		 */
		completed,
	}