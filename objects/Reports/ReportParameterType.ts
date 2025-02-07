/**
 * The kinds of parameters required and optional to build Report Results
 */
export enum ReportParameterType {
	/**
	 * The staring date/time range for events to be included in the results.
	 * The date should be a valid ISO-8601 string.
	 */
	startDate = "startDate",
	/**
	 * The ending date/time range for events to be included in the results.
	 * The date should be a valid ISO-8601 string.
	 */
	endDate = "endDate",
	/**
	 * Time-span processed on each day.
	 * Only data within the time-span is included in the results.
	 * The times should be 2 space separated duration strings.
	 */
	timeOfDay = "timeOfDay",
	/**
	 * A list of status tags an Asset must have to be included in the results.
	 * Should be a comma separated string of codified tag names.
	 */
	tags = "tags",
	/**
	 * The minimum amount of time for a Summary nice before it is included in the results.
	 * Supplied as a <format id="timespan">duration string</format>.
	 */
	duration = "duration",
	/**
	 * The maximum amount of time in a Summary Instance before it is split into two and the latter marked as an exception in the results.
	 * Supplied as a <format id="timespan">duration string</format>.
	 */
	prolonged = "prolonged",
	/**
	 * The minimum distance travelled in a Summary Instance before it is included in the results.
	 * Supplied as a number of meters.
	 */
	distance = "distance",
	/**
	 * The maximum distance travelled in a Summary Instance before it is split into two and the latter marked as an exception in the results.
	 * Supplied as a number of meters.
	 */
	rubicon = "rubicon",
	/**
	 * A choice in the method used to calculate a Summary Instance's values.
	 * For an attribute report, the possible values are "instance" where if the attribute is present it is included,
	 * and "value" where each attribute's simple value becomes it's own summary instance.
	 * For a Tag Summary report, the possible values are "inclusive" where any of the given tags must match, and
	 * "exclusive" where all the given tags must match.
	 */
	collate = "collate",
	/**
	 * A list of attribute names an Asset must have to be included in the results.
	 * Should be a comma separated string of codified tag names.
	 */
	attributes = "attributes",
}