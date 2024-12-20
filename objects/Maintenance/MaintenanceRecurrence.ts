


	/// <summary>
	/// The detail for calculating Maintenance Schedule recurrence.
	/// </summary>
	/// <override name="MaintenanceInterval" />
	export class MaintenanceRecurrence implements IBelongAsset {
		/// <summary>
		/// The Vehicle or Trailer to which this recurrence detail belongs.
		/// </summary>
		/// <seealso cref="Asset.id" />
		public asset: ulong = NaN;
		/// <summary>
		/// The date of the last calculation.
		/// </summary>
		public date: Date = DATE();
		/// <summary>
		/// The odometer at the time of the last calculation.
		/// </summary>
		public odometer: double = NaN;
		/// <summary>
		/// The operating time at the time of the last calculation.
		/// </summary>
		public engineHours: double = NaN;
		/// <summary>
		/// The last "completed" job related to this schedule interval.
		/// </summary>
		public lastJob: ulong = NaN;
	}