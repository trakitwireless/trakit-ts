/**
 * The type of logic used by the report runner.
 */
export enum ReportType {
	/**
	 * Processes all history for the assets.
	 */
	full ="full",
	/**
	 * Summarizes the timeline based on the given tags.
	 */
	tags = "tags",
	/**
	 * Summarizes the timeline based on places visited.
	 */
	places = "places",
	/**
	 * Processes the log of messages sent to and from the assets.
	 */
	messages = "messages",
	/**
	 * Summarizes the timeline based on the asset's task's lifetimes.
	 * @deprecated Use `ReportType.jobs` instead
	 */
	tasks = "tasks",
	/**
	 * Summarizes the timeline based on the given attributes and thresholds.
	 */
	attributes = "attributes",
	/**
	 * Summarizes the timeline based on the regions (cities, provinces/states, countries) through which the assets travelled.
	 */
	regions = "regions",
	/**
	 * Summarizes the timeline based on the asset's jobs's lifetimes.
	 */
	jobs = "jobs",
	/**
	 * Summarizes the timeline by day, week, and month based on the asset's positions.
	 */
	positions = "positions",
}