
	/// <summary>
	/// The kinds of parameters required and optional to build Report Results
	/// </summary>
	export enum ReportParameterType {
		/// <summary>
		/// The staring date/time range for events to be included in the results.
		/// The date should be a valid ISO-8601 string.
		/// </summary>
		startDate,
		/// <summary>
		/// The ending date/time range for events to be included in the results.
		/// The date should be a valid ISO-8601 string.
		/// </summary>
		endDate,
		/// <summary>
		/// Time-span processed on each day.
		/// Only data within the time-span is included in the results.
		/// The times should be 2 space separated duration strings.
		/// </summary>
		timeOfDay,
		/// <summary>
		/// A list of status tags an Asset must have to be included in the results.
		/// Should be a comma separated string of codified tag names.
		/// </summary>
		tags,
		/// <summary>
		/// The minimum amount of time for a Summary nice before it is included in the results.
		/// Supplied as a <format id="timespan">duration string</format>.
		/// </summary>
		duration,
		/// <summary>
		/// The maximum amount of time in a Summary Instance before it is split into two and the latter marked as an exception in the results.
		/// Supplied as a <format id="timespan">duration string</format>.
		/// </summary>
		prolonged,
		/// <summary>
		/// The minimum distance travelled in a Summary Instance before it is included in the results.
		/// Supplied as a number of meters.
		/// </summary>
		distance,
		/// <summary>
		/// The maximum distance travelled in a Summary Instance before it is split into two and the latter marked as an exception in the results.
		/// Supplied as a number of meters.
		/// </summary>
		rubicon,
		/// <summary>
		/// A choice in the method used to calculate a Summary Instance's values.
		/// For an attribute report, the possible values are "instance" where if the attribute is present it is included,
		/// and "value" where each attribute's simple value becomes it's own summary instance.
		/// For a Tag Summary report, the possible values are "inclusive" where any of the given tags must match, and
		/// "exclusive" where all the given tags must match.
		/// </summary>
		collate,
		/// <summary>
		/// A list of attribute names an Asset must have to be included in the results.
		/// Should be a comma separated string of codified tag names.
		/// </summary>
		attributes,
	}