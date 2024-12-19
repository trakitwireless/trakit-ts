
	/// <summary>
	/// Specifies how often a Report Template is automatically generates a Report Result.
	/// </summary>
	export enum ReportRecurrenceType {
		/// <summary>
		/// Runs only once.  This type is used for large reports which need to run overnight.
		/// </summary>
		once,
		/// <summary>
		/// Daily at midnight in the local timezone for the previous day based on the ReportRecurrence.weekdays.
		/// </summary>
		/// <seealso cref="ReportRecurrence.weekdays" />
		daily,
		/// <summary>
		/// Weekly at midnight in the local timezone for the previous 7 days based on the ReportRecurrence.weekday.
		/// </summary>
		/// <seealso cref="ReportRecurrence.weekday" />
		weekly,
		/// <summary>
		/// Monthly at midnight in the local timezone for the previous month based on the ReportRecurrence.start date.
		/// </summary>
		/// <seealso cref="ReportRecurrence.start" />
		monthly,
		/// <summary>
		/// Runs once every three months at midnight in the local timezone for the previous 3 months based on the ReportRecurrence.start date.
		/// </summary>
		/// <seealso cref="ReportRecurrence.start" />
		quarterly,
		/// <summary>
		/// Yearly at midnight in the local timezone based on the ReportRecurrence.start date.
		/// </summary>
		/// <seealso cref="ReportRecurrence.start" />
		annually,
	}