
	/// <summary>
	/// Asset information used in calculating a summary instance.
	/// </summary>
	export class ReportBreakdown {
		/// <summary>
		/// The asset to which this event data belongs.
		/// </summary>
		public asset: ulong = NaN;
		/// <summary>
		/// Report specific identifier of the event data.
		/// </summary>
		public instance: uint = NaN;
		/// <summary>
		/// Identifiers of the summary instances that used this event.
		/// </summary>
		public summaryInstances: uint[] = [];
		/// <summary>
		/// General Asset information.
		/// </summary>
		public general: AssetGeneral;
		/// <summary>
		/// Advanced/detailed information used.
		/// </summary>
		public advanced: AssetAdvanced;
	}