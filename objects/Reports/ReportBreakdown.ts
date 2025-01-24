
	/**
	 * Asset information used in calculating a summary instance.
	 */
	export class ReportBreakdown {
		/**
		 * The asset to which this event data belongs.
		 */
		asset: ulong = NaN;
		/**
		 * Report specific identifier of the event data.
		 */
		instance: uint = NaN;
		/**
		 * Identifiers of the summary instances that used this event.
		 */
		summaryInstances: uint[] = [];
		/**
		 * General Asset information.
		 */
		general: AssetGeneral;
		/**
		 * Advanced/detailed information used.
		 */
		advanced: AssetAdvanced;
	}