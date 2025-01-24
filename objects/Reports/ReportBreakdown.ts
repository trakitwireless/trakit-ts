
	/**
	 * Asset information used in calculating a summary instance.
	 */
	export class ReportBreakdown {
		/**
		 * The asset to which this event data belongs.
		 */
		public asset: ulong = NaN;
		/**
		 * Report specific identifier of the event data.
		 */
		public instance: uint = NaN;
		/**
		 * Identifiers of the summary instances that used this event.
		 */
		public summaryInstances: uint[] = [];
		/**
		 * General Asset information.
		 */
		public general: AssetGeneral;
		/**
		 * Advanced/detailed information used.
		 */
		public advanced: AssetAdvanced;
	}