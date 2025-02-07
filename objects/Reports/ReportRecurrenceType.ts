/**
 * Specifies how often a Report Template is automatically generates a Report Result.
 */
export enum ReportRecurrenceType {
	/**
	 * Runs only once.  This type is used for large reports which need to run overnight.
	 */
	once = "once",
	/**
	 * Daily at midnight in the local timezone for the previous day based on the ReportRecurrence.weekdays.
	 * {@link ReportRecurrence.weekdays}
	 */
	daily = "daily",
	/**
	 * Weekly at midnight in the local timezone for the previous 7 days based on the ReportRecurrence.weekday.
	 * {@link ReportRecurrence.weekday}
	 */
	weekly = "weekly",
	/**
	 * Monthly at midnight in the local timezone for the previous month based on the ReportRecurrence.start date.
	 * {@link ReportRecurrence.start}
	 */
	monthly = "monthly",
	/**
	 * Runs once every three months at midnight in the local timezone for the previous 3 months based on the ReportRecurrence.start date.
	 * {@link ReportRecurrence.start}
	 */
	quarterly = "quarterly",
	/**
	 * Yearly at midnight in the local timezone based on the ReportRecurrence.start date.
	 * {@link ReportRecurrence.start}
	 */
	annually = "annually",
}