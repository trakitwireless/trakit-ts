

	/// <summary>
	/// A simple status for each place an Asset visits.
	/// </summary>
	export class AssetPlaceStatus {
		/// <summary>
		/// The kind of interaction.
		/// </summary>
		public kind: AssetPlaceStatusType;
		/// <summary>
		/// The date/time stamp for when the Asset first began interacting with the Place.
		/// </summary>
		public enter: Date = DATE();
		/// <summary>
		/// The most recent date/time stamp for the interaction.
		/// </summary>
		public latest: Date = DATE();
	}