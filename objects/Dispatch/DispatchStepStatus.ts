
	/// <summary>
	/// The lifetime of all <see cref="DispatchStep"/>s (in order).
	/// </summary>
	export enum DispatchStepStatus {
		/// <summary>
		/// The <see cref="DispatchStep"/> has not yet been started.
		/// </summary>
		pending,
		/// <summary>
		/// The asset is on the way to the <see cref="DispatchStep"/>'s location next.
		/// </summary>
		onRoute,
		/// <summary>
		/// The asset has arrived at the <see cref="DispatchStep"/>'s location.
		/// </summary>
		arrived,
		/// <summary>
		/// The <see cref="DispatchStep"/> is done (or the asset has departed the location).
		/// </summary>
		completed,
	}