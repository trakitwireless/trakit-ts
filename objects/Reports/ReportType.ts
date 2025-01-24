


/**
 * The type of logic used by the report runner.
 */
export enum ReportType {
	/**
	 * Processes all history for the assets.
	 */
	full = 1,
	/**
	 * Summarizes the timeline based on the given tags.
	 */
	tags,
	/**
	 * Summarizes the timeline based on places visited.
	 */
	places,
	/**
	 * Processes the log of messages sent to and from the assets.
	 */
	messages,
	/**
	 * Summarizes the timeline based on the asset's task's lifetimes.
	 * @deprecated 
	 */
	@deprecated Use `ReportType.jobs` instead
	tasks,
	/**
	 * Summarizes the timeline based on the given attributes and thresholds.
	 */
	attributes,
	/**
	 * Summarizes the timeline based on the regions (cities, provinces/states, countries) through which the assets travelled.
	 */
	regions,
	/**
	 * Summarizes the timeline based on the asset's jobs's lifetimes.
	 */
	jobs,
	/**
	 * Summarizes the timeline by day, week, and month based on the asset's positions.
	 */
	positions,
}