


	/**
	 * Summarized asset details.
	 */
	export class ReportSummary {
		/**
		 * The asset to which this summary instance belongs.
		 * {@link Asset.id}
		 */
		public asset: ulong = NaN;
		/**
		 * Code given to this summary instance for an asset.
		 *  <override max-length="100" />
		 */
		public stateDetail: string = "";
		/**
		 * Identifier of the summary instance in the report.
		 */
		public instance: uint = NaN;
		/**
		 * The number of events included in calculating this summary instance.
		 */
		public instancesCount: uint = NaN;
		/**
		 * Date/time stamp of the first event in this summary's sequence.
		 */
		public startingUtc: Date = DATE();
		/**
		 * The reason code that this summary instance began.
		 */
		public startingReason: ReportSummaryReason;
		/**
		 * Date/time stamp of the last event in this summary's sequence.
		 */
		public endingUtc: Date = DATE();
		/**
		 * The reason code that this summary instance ended.
		 */
		public ReportSummaryReason endingReason = ReportSummaryReason.outsideRange;
		/**
		 * The distance travelled in kilometres by the asset during this summary instance.
		 */
		public distance: double = NaN;
		/**
		 * The amount of time that passed.
		 */
		public get duration(): TimeSpan { return this.endingUtc - this.startingUtc; }
		/**
		 * A simplified polyline of all the asset's positions in sequence.
		 */
		public polyline: LatLng[] = [];
		/**
		 * The first asset state which begins this summary instance.
		 */
		public firstState: Asset;
		/**
		 * The asset state that ended this summary instance.
		 */
		public lastState: Asset;
	}