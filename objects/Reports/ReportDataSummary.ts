


	/// <summary>
	/// Summarized asset details.
	/// </summary>
	export class ReportSummary {
		/// <summary>
		/// The asset to which this summary instance belongs.
		/// </summary>
		/// <seealso cref="Asset.id" />
		public asset: ulong = NaN;
		/// <summary>
		/// Code given to this summary instance for an asset.
		/// </summary>
		/// <override max-length="100" />
		public stateDetail: string = "";
		/// <summary>
		/// Identifier of the summary instance in the report.
		/// </summary>
		public instance: uint = NaN;
		/// <summary>
		/// The number of events included in calculating this summary instance.
		/// </summary>
		public instancesCount: uint = NaN;
		/// <summary>
		/// Date/time stamp of the first event in this summary's sequence.
		/// </summary>
		public startingUtc: Date = DATE();
		/// <summary>
		/// The reason code that this summary instance began.
		/// </summary>
		public startingReason: ReportSummaryReason;
		/// <summary>
		/// Date/time stamp of the last event in this summary's sequence.
		/// </summary>
		public endingUtc: Date = DATE();
		/// <summary>
		/// The reason code that this summary instance ended.
		/// </summary>
		public ReportSummaryReason endingReason = ReportSummaryReason.outsideRange;
		/// <summary>
		/// The distance travelled in kilometres by the asset during this summary instance.
		/// </summary>
		public distance: double = NaN;
		/// <summary>
		/// The amount of time that passed.
		/// </summary>
		public get duration(): TimeSpan { return this.endingUtc - this.startingUtc; }
		/// <summary>
		/// A simplified polyline of all the asset's positions in sequence.
		/// </summary>
		public polyline: LatLng[] = [];
		/// <summary>
		/// The first asset state which begins this summary instance.
		/// </summary>
		public firstState: Asset;
		/// <summary>
		/// The asset state that ended this summary instance.
		/// </summary>
		public lastState: Asset;
	}