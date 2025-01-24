

	/**
	 * A simple status for each place an Asset visits.
	 */
	export class AssetPlaceStatus {
		/**
		 * The kind of interaction.
		 */
		public kind: AssetPlaceStatusType;
		/**
		 * The date/time stamp for when the Asset first began interacting with the Place.
		 */
		public enter: Date = DATE();
		/**
		 * The most recent date/time stamp for the interaction.
		 */
		public latest: Date = DATE();
	}