
	/**
	 * Summarized bill per target.
	 */
	export class BillingReportSummary implements INamed {
		/**
		 * The target company to which this summary instance belongs.
		 * {@link Company.id}
		 */
		public target: ulong = NaN;
		/**
		 * The target company's parent.
		 * {@link Company.id}
		 */
		public parent: ulong = NaN;
		/**
		 * Target's name.
		 *  <override max-length="100" />
		 */
		public name: string = "";
		/**
		 * Notes about the target.
		 */
		public notes: string = "";
		/**
		 * Summary contains totals per type of hosting (services and licenses) for this target
		 */
		public hosting: BillingReportHostingSummary[] = [];
	}