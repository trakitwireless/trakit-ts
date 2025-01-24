

	/**
	 * A simple status for each place an Asset visits.
	 */
	export class AssetPlaceStatus {
		/**
		 * The kind of interaction.
		 */
		kind: AssetPlaceStatusType;
		/**
		 * The date/time stamp for when the Asset first began interacting with the Place.
		 */
		enter: Date = DATE();
		/**
		 * The most recent date/time stamp for the interaction.
		 */
		latest: Date = DATE();
	}