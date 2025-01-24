


	/**
	 * Infraction parameter used to generate scorecard
	 */
	export class ReportScorecardParameter {
		/**
		 * Type of exception, example speeding, idling, etc.
		 */
		public condition: string = "";
		/**
		 * Threshold per instance. If the threshold is 0, each instance is used in the calculation
		 */
		public duration: TimeSpan;
		/**
		 * Points applied against the base score per instance
		 */
		public points: double = NaN;
	}