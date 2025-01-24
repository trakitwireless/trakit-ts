


	/**
	 * Totalled information from all the results of the report.
	 *  <override name="ReportTotal" />
	 */
	export class ReportDataTotal {
		/**
		 * The asset to which this report total belongs.
		 * {@link Asset.id}
		 */
		asset: ulong = NaN;
		/**
		 * Unique code given to the report total.
		 *  <override max-length="100" />
		 */
		stateDetail: string = "";
		/**
		 * The number of summary instances included in this total.
		 */
		summaryCount: uint = NaN;
		/**
		 * The total duration of all summary instances.
		 */
		duration: TimeSpan;
		/**
		 * The total distance travelled in kilometres of all summary instances.
		 */
		distance: double = NaN;
	}