
	/**
	 * Summarized bill per target.
	 */
	export class BillingReportSummary implements INamed {
		/**
		 * The target company to which this summary instance belongs.
		 * {@link Company.id}
		 */
		target: ulong = NaN;
		/**
		 * The target company's parent.
		 * {@link Company.id}
		 */
		parent: ulong = NaN;
		/**
		 * Target's name.
		 *  <override max-length="100" />
		 */
		name: string = "";
		/**
		 * Notes about the target.
		 */
		notes: string = "";
		/**
		 * Summary contains totals per type of hosting (services and licenses) for this target
		 */
		hosting: BillingReportHostingSummary[] = [];
	}