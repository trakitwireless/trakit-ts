


	/// <summary>
	/// Totalled information from all the results of the report.
	/// </summary>
	/// <override name="ReportTotal" />
	export class ReportDataTotal {
		/// <summary>
		/// The asset to which this report total belongs.
		/// </summary>
		/// <seealso cref="Asset.id" />
		public asset: ulong = NaN;
		/// <summary>
		/// Unique code given to the report total.
		/// </summary>
		/// <override max-length="100" />
		public stateDetail: string = "";
		/// <summary>
		/// The number of summary instances included in this total.
		/// </summary>
		public summaryCount: uint = NaN;
		/// <summary>
		/// The total duration of all summary instances.
		/// </summary>
		public duration: TimeSpan;
		/// <summary>
		/// The total distance travelled in kilometres of all summary instances.
		/// </summary>
		public distance: double = NaN;
	}