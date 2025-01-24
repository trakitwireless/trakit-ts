


	/**
	 * Infraction parameter used to generate scorecard
	 */
	export class ReportScorecardParameter {
		/**
		 * Type of exception, example speeding, idling, etc.
		 */
		condition: string = "";
		/**
		 * Threshold per instance. If the threshold is 0, each instance is used in the calculation
		 */
		duration: TimeSpan;
		/**
		 * Points applied against the base score per instance
		 */
		points: double = NaN;
	}