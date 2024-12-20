


	/// <summary>
	/// The type of logic used by the report runner.
	/// </summary>
	export enum ReportType {
		/// <summary>
		/// Processes all history for the assets.
		/// </summary>
		full = 1,
		/// <summary>
		/// Summarizes the timeline based on the given tags.
		/// </summary>
		tags,
		/// <summary>
		/// Summarizes the timeline based on places visited.
		/// </summary>
		places,
		/// <summary>
		/// Processes the log of messages sent to and from the assets.
		/// </summary>
		messages,
		/// <summary>
		/// Summarizes the timeline based on the asset's task's lifetimes.
		/// </summary>
		[Obsolete("Use `ReportType.jobs` instead")]
		tasks,
		/// <summary>
		/// Summarizes the timeline based on the given attributes and thresholds.
		/// </summary>
		attributes,
		/// <summary>
		/// Summarizes the timeline based on the regions (cities, provinces/states, countries) through which the assets travelled.
		/// </summary>
		regions,
		/// <summary>
		/// Summarizes the timeline based on the asset's jobs's lifetimes.
		/// </summary>
		jobs,
		/// <summary>
		/// Summarizes the timeline by day, week, and month based on the asset's positions.
		/// </summary>
		positions,
	}