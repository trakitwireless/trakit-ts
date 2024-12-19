
	/// <summary>
	/// A value assigned to <see cref="DispatchJob"/>s in order to weigh them when optimizing a route.
	/// </summary>
	export enum DispatchJobPriority {
		/// <summary>
		/// Will be done last, after all others, if at all.
		/// </summary>
		standby,
		/// <summary>
		/// Low priority jobs are assigned towards the end of a dispatch, unless they are in very close proximity to another job.
		/// </summary>
		low,
		/// <summary>
		/// A normal job that will be done at the first opportunity.
		/// </summary>
		medium,
		/// <summary>
		/// More important job that will be routed to first unless the next high importance job is much farther away.
		/// </summary>
		high,
		/// <summary>
		/// Must be done first, before all others.
		/// </summary>
		urgent,
	}